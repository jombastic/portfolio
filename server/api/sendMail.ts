import * as yup from "yup";
import { object, string, number, date, InferType } from "yup";

// Define the schema including the recaptcha token
const userSchema = object({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  message: yup.string().required().label("Message"),
  "recaptcha-token": yup.string().required().label("reCAPTCHA Token"),
});

// Infer the TypeScript type from the schema
type UserData = InferType<typeof userSchema>;

// Define the interface for the reCAPTCHA verification response
interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

// Helper function to verify the reCAPTCHA token
async function verifyRecaptchaToken(token: string, secret: string): Promise<void> {
  const response = await $fetch<RecaptchaResponse>("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });
  if (!response.success) {
    throw createError({ statusCode: 400, message: "reCAPTCHA verification failed." });
  }
}

export default defineEventHandler(async (event) => {
  const { recaptchaSecretKey } = useRuntimeConfig(event);

  // Validate and type the incoming body.
  const result: UserData = await readValidatedBody(event, (body) =>
    userSchema.validate(body)
  );

  // Verify reCAPTCHA token via the helper function
  await verifyRecaptchaToken(result["recaptcha-token"], recaptchaSecretKey);

  const { sendMail } = useNodeMailer();

  return sendMail({
    to: process.env.NUXT_NODEMAILER_AUTH_USER,
    from: result.email,
    subject: `New Portfolio Contact - ${result.name} <${result.email}>`,
    text: result.message,
  });
});