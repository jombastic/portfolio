<template>
  <Transition>
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 rounded-full bg-yellow-400 p-3 text-black shadow-lg transition-opacity duration-300 hover:bg-yellow-300"
    >
      <svgo-up filled class="h-6 w-6" :fontControlled="false" />
    </button>
  </Transition>
</template>

<script setup>
const route = useRoute();

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = async () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  await navigateTo(route.path);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
