<template>
  <section id="work" class="relative pt-10">
    <div class="m-auto max-w-lg px-6 md:container">
      <h2 class="mb-20 text-5xl font-extrabold md:text-[4.625rem]">
        Some projects
      </h2>
      <div
        class="relative grid auto-rows-auto gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        <TransitionGroup name="project-fade">
          <div
            v-for="(project, index) in projects"
            :key="index"
            :class="[
              'relative',
              'project',
              'flex',
              'flex-col',
              'justify-between',
              'rounded-3xl',
              'bg-[#E9E9E9]',
              'p-9',
            ]"
          >
            <div>
              <img
                class="block h-[250px] w-full max-w-full rounded-3xl object-cover"
                :src="`${imagesByFolder[project.images][0]}`"
                width="413"
                height="310"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <h3 class="my-4 text-2xl text-black md:text-[2rem]">
                {{ project.name }}
              </h3>
            </div>
            <button
              @click="openModal(project)"
              class="mt-4 flex h-[3.1875rem] min-w-16 items-center justify-center self-end rounded-full bg-black text-white transition-all duration-500 hover:bg-white hover:text-black md:min-w-[5.0625rem]"
              aria-label="Open project"
            >
              <svgo-arrow class="size-8 md:size-11" :fontControlled="false" />
            </button>
          </div>
        </TransitionGroup>
      </div>
      <div
        v-if="loaded < content.projects.length"
        class="mt-16 flex justify-center"
      >
        <BaseButton @click="loadMore">Load more</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import content from "@/content/content.json";

const loaded = ref(3);
const imagesByFolder = ref({});

const projects = useState("projects", () =>
  content.projects.slice(0, loaded.value),
);
const modalOpen = useState("isOpen");

const imageModules = import.meta.glob(
  "@/assets/img/**/*.{png,jpg,jpeg,gif,svg,webp}",
  { eager: true },
);

Object.entries(imageModules).forEach(([path, mod]) => {
  // Extract the subfolder name from the path.
  // The expected path format is something like '@/assets/img/subfolder/filename.ext'
  const parts = path.split("/assets/img/");
  if (parts.length > 1) {
    const relativePath = parts[1]; // e.g. "motf/image.jpg"
    const subfolder = relativePath.split("/")[0]; // Get the subfolder name
    if (!imagesByFolder.value[subfolder]) {
      imagesByFolder.value[subfolder] = [];
    }
    imagesByFolder.value[subfolder].push(mod.default);
  }
});

const openModal = (project) => {
  modalOpen.value = true;
  project.imagesByFolder = imagesByFolder.value[project.images];
  useState("project").value = project;
};

const loadMore = () => {
  loaded.value += 3;
  projects.value = content.projects.slice(0, loaded.value);
};
</script>

<style scoped>
.project-fade-enter-active,
.project-fade-leave-active {
  @apply transition-all duration-[0.5s] ease-[ease];
}

.project-fade-enter-from {
  @apply translate-y-[20px] opacity-0;
}

.project-fade-leave-to {
  @apply translate-y-[-20px] opacity-0;
}
</style>
