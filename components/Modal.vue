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
            <div class="mx-auto my-20 w-[50rem] max-w-full px-6">
              <div class="mb-10 flex flex-col items-center">
                <h3 class="mb-2 mt-4 text-center text-[2rem] text-black">
                  {{ project.name }}
                </h3>
                <a
                  :href="project.url"
                  v-if="project.url"
                  target="_blank"
                  class="mb-4 inline-block"
                >
                  <BaseButton>{{ project.url }}</BaseButton>
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="mb-4 inline-flex items-center gap-2 rounded-[.625rem] border border-solid border-black px-[1.5rem] py-3 text-lg font-bold transition-all duration-500 hover:bg-black hover:text-white"
                >
                  <svgo-github class="size-6" :fontControlled="false" />
                  <span>Github link</span>
                </a>
              </div>

              <BaseCarousel />

              <h4 class="mb-4 mt-16 font-medium">Skills used</h4>
              <BaseTech :technologies="project.technologies" />

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
