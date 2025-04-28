import * as yup from "yup";
import { object, string, number, date, InferType } from "yup";

const userSchema = object({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  message: yup.string().required().label("Message"),
});

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) =>
    userSchema.validate(body),
  );

  const { sendMail } = useNodeMailer();

  return sendMail({
    to: process.env.NUXT_NODEMAILER_AUTH_USER,
    from: result.email,
    subject: `New Portfolio Contact - ${result.name}`,
    text: result.message,
  });
});
