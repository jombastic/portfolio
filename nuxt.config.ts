// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Slavcho's portfolio",
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-svgo",
    "@vee-validate/nuxt",
    "nuxt-nodemailer",
    "nuxt-toast",
  ],
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  nodemailer: {
    host: "smtp.mailtrap.io",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "john@doe.com",
      pass: "",
    },
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    recaptchaSecretKey: "",
    // Keys within public are also exposed client-side
    public: {
      recaptchaSiteKey: "",
      apiBase: "/api",
    },
  },
});
