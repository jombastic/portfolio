<template>
  <Transition>
    <div v-if="isOpen">
      <div
        class="fixed left-0 top-0 z-[50] h-full w-full bg-[rgba(0,0,0,0.6)]"
        @click="closeModal"
      ></div>

      <div
        class="fixed left-1/2 top-1/2 z-[100] block h-[90vh] max-h-full w-[75rem] max-w-full -translate-x-1/2 -translate-y-1/2 overflow-y-hidden rounded-3xl bg-white shadow-[0_0_60px_10px_rgba(0,0,0,0.9)]"
      >
        <div class="h-full w-full overflow-y-auto">
          <button
            class="absolute right-5 top-4 z-[1] rounded bg-black p-2 text-white"
            @click="closeModal"
          >
            <svgo-close class="size-6" :fontControlled="false" />
          </button>
          <div class="absolute left-0 top-0 h-full w-full overflow-y-scroll">
            <div class="mx-auto my-20 w-[800px] max-w-full">
              <h3 class="mb-16 mt-4 text-center text-[32px] text-black">
                {{ project.name }}
              </h3>

              <BaseCarousel />

              <h4 class="mb-4 mt-16 font-medium">Skills used</h4>
              <div class="mb-16 flex flex-wrap gap-3">
                <div
                  v-for="(tech, key, idx) in project.technologies"
                  :key="idx"
                  class="flex items-center gap-1 rounded-md bg-[#E9E9E9] p-3"
                >
                  <component
                    :is="`svgo-${key}`"
                    class="h-7 w-7"
                    :fontControlled="false"
                    filled
                  ></component>
                  {{ tech }}
                </div>
              </div>

              <h3 class="mb-4 text-2xl font-medium">{{ project.title }}</h3>
              <p class="font-light">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isOpen = useState("isOpen", () => false);
const project = useState("project");

function closeModal() {
  isOpen.value = false;
}

watch(isOpen, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  @apply transition-opacity duration-[0.5s] ease-[ease];
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}
</style>
