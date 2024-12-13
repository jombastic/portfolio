<template>
  <div>
    <div v-if="isOpen" class="fixed inset-0 z-50 bg-black bg-opacity-60"></div>

    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        class="relative max-h-full max-w-full rounded-3xl bg-white p-6 shadow-lg"
        :style="{
          width: '90vw',
          height: '90vh',
          maxWidth: '1200px',
          maxHeight: '90vh',
        }"
      >
        <button
          class="absolute right-4 top-4 rounded bg-black p-2 text-white"
          @click="toggleModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div class="overflow-auto">
          <iframe
            :src="projectUrl"
            class="h-[80vh] w-full"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  projectUrl: String,
});

const isOpen = useState("isOpen", () => false);

function toggleModal() {
  isOpen.value = !isOpen.value;
}
</script>
