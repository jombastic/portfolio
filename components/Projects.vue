<template>
  <section id="work" class="relative">
    <div class="container px-4">
      <h2 class="mb-20 text-[104px] font-extrabold text-[#E9E9E9]">
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
              :src="`/img/${project.images[0]}`"
              alt=""
            />
            <h3 class="my-4 text-[32px] text-black">
              {{ project.name }}
            </h3>
            <!-- <div class="flex gap-2">
              <div
                v-for="(tech, idx) in project.technologies"
                :key="idx"
                class="inline-block rounded-md bg-white p-4"
              >
                <component :is="`svgo-${tech}`" filled></component>
                {{ tech }}
              </div>
            </div> -->
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
function openModal(project) {
  modalOpen.value = true;
  useState("project", () => project);
}
</script>
