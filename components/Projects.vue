<template>
  <div id="work" class="relative">
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
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const projects = ref([]);

// Generate random project data with column span
const generateRandomProjects = () => {
  const projectNames = [
    "Project Alpha",
    "Beta Build",
    "Gamma Growth",
    "Delta Design",
    "Epsilon Expansion",
    "Zeta Zone",
    "Eta Evolution",
    "Theta Theory",
    "Iota Innovation",
    "Kappa Knowledge",
  ];

  const projectDescriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
    "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    "Nullam varius, turpis et commodo pharetra, est eros bibendum elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    "Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum.",
    "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
  ];

  return projectNames.map((name, index) => ({
    name,
    description: projectDescriptions[index],
    span: Math.random() > 0.7 ? 2 : 1, // Randomly assign a span of 2 to some projects
  }));
};

// Perform randomization on client-side only
onMounted(() => {
  projects.value = generateRandomProjects();
});

const modalOpen = useState('isOpen');

function openModal() {
  modalOpen.value = !modalOpen.value;
}
</script>
