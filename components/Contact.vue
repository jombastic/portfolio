<template>
  <section id="contact" class="container px-4 py-24">
    <div
      class="rounded-3xl bg-[url(/img/sports.png)] bg-cover bg-center bg-no-repeat"
    >
      <div class="py-16">
        <div class="text-center">
          <h3
            class="bg-gradient-to-b from-[#F2DA91] to-[#FFF1B9] bg-clip-text text-[74px] font-extrabold text-transparent"
          >
            Let's have a beer
          </h3>
          <p class="text-[1.75rem] text-[#EBF3F4]">
            Whether it's a cool project or just a casual chat - drop me a
            message.
          </p>

          <div class="mt-12 flex justify-center gap-4">
            <Polygons
              v-for="item in 4"
              :key="item"
              class="h-[23px] w-[86px] text-white"
              :fontControlled="false"
            />
          </div>
        </div>

        <form
          class="m-auto flex max-w-3xl flex-col gap-4 px-10 py-16"
          @submit="onSubmit"
          novalidate
        >
          <div class="flex gap-4">
            <BaseInput
              name="name"
              placeholder="Your name"
              customClass="w-1/2"
            />
            <BaseInput
              name="email"
              type="email"
              placeholder="Your email"
              customClass="w-1/2"
            />
          </div>
          <BaseInput
            element="textarea"
            name="message"
            placeholder="What's on your mind?"
            rows="6"
          />
          <BaseButton type="submit" :disabled="isSubmitting"
            >{{ isSubmitting ? "Submitting... 🍺" : "Send message" }}
          </BaseButton>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import Polygons from "@/public/img/polygons.svg";
import * as yup from "yup";

const toast = useToast();

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message"),
  }),
});

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  try {
    const res = await $fetch("/api/sendMail", {
      method: "POST",
      body: {
        ...values,
      },
    });
    if (res?.accepted) {
      resetForm();

      toast.success({
        title: "Hey!",
        message: "Your message has been sent successfully! 🍻",
        iconText: "done",
      });
    } else {
      toastError();
    }
  } catch (err) {
    toastError();
  }
});

const toastError = () =>
  toast.error({
    title: "Oops!",
    message: "Something went wrong. Please try again later...",
    backgroundColor: "#5a1a1a",
    iconText: "error",
    class: "custom-toast custom-toast--error",
  });
</script>
