<template>
  <section id="work" class="relative pt-10">
    <div class="container px-4">
      <h2 class="mb-20 text-5xl font-extrabold md:text-[4.625rem]">
        Some projects
      </h2>
      <div
        class="relative grid auto-rows-auto gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
      >
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
              class="block max-w-full rounded-3xl"
              :src="`${imagesByFolder[project.images][0]}`"
              width="413"
              height="310"
              alt=""
            />
            <h3 class="my-4 text-[32px] text-black">
              {{ project.name }}
            </h3>
          </div>
          <button
            @click="openModal(project)"
            class="mt-4 flex h-[51px] min-w-[81px] items-center justify-center self-end rounded-full bg-black text-white transition-all duration-500 hover:bg-white hover:text-black"
          >
            <svgo-arrow class="size-11" :fontControlled="false" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = useState("projects");

const modalOpen = useState("isOpen");

const imageModules = import.meta.glob(
  "@/assets/img/**/*.{png,jpg,jpeg,gif,svg,webp}",
  { eager: true },
);
const imagesByFolder = {};

Object.entries(imageModules).forEach(([path, mod]) => {
  // Extract the subfolder name from the path.
  // The expected path format is something like '@/assets/img/subfolder/filename.ext'
  const parts = path.split("/assets/img/");
  if (parts.length > 1) {
    const relativePath = parts[1]; // e.g. "motf/image.jpg"
    const subfolder = relativePath.split("/")[0]; // Get the subfolder name
    if (!imagesByFolder[subfolder]) {
      imagesByFolder[subfolder] = [];
    }
    imagesByFolder[subfolder].push(mod.default);
  }
});

function openModal(project) {
  modalOpen.value = true;
  project.imagesByFolder = imagesByFolder[project.images];
  useState("project", () => project);
}
</script>
