<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    },
  ],
});

// default settings for the toast notification
useToast().settings({
  position: "topRight",
  backgroundColor: "#1a1a1a",
  titleColor: "#f4e56d",
  messageColor: "#ffffff",
  icon: "material-icons",
  theme: "dark",
  iconColor: "#f4e56d",
  progressBarColor: "#f4e56d",
  close: true,
  closeOnClick: true,
  timeout: 5000,
  transitionIn: "fadeInDown",
  transitionOut: "fadeOutUp",
  layout: 2,
  class: "custom-toast",
});
</script>

<style>
.custom-toast {
  @apply rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.5)];
}

.custom-toast--error {
  @apply shadow-[0_4px_12px_rgba(255,0,0,0.3)];
}

.v-enter-active,
.v-leave-active {
  @apply transition-opacity duration-[0.5s] ease-[ease];
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}
</style>
