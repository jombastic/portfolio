<template>
  <section id="work" class="relative">
    <div class="container px-4">
      <h2 class="mb-20 text-[104px] font-extrabold text-[#E9E9E9]">
        Some projects
      </h2>
      <div
        class="grid auto-rows-auto gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="(project, index) in projects"
          :key="index"
          :class="[
            'project',
            'flex',
            'flex-col',
            'justify-between',
            'rounded-3xl',
            'bg-[#E9E9E9]',
            'px-9',
            'py-5',
            project.span === 2 ? 'lg:col-span-2' : '',
          ]"
        >
          <div>
            <h3 class="mb-4 text-[32px] text-black">
              {{ project.name }}
            </h3>
            <p class="line-clamp-4 max-w-[80%] text-lg text-[#232323]">
              {{ project.description }}
            </p>
          </div>
          <button
            @click="openModal"
            class="mt-4 flex h-[51px] min-w-[81px] items-center justify-center self-end rounded-full bg-black text-white transition-all duration-500 hover:bg-white hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-11"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <Modal />
    </div>
  </section>
</template>

<script setup>
const projects = useState("content");

const modalOpen = useState("isOpen");

function openModal() {
  modalOpen.value = !modalOpen.value;
}
</script>
