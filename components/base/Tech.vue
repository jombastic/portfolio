<template>
  <div class="mb-16 flex flex-wrap gap-3">
    <div
      v-for="(tech, key, idx) in technologies"
      :key="idx"
      class="flex items-center gap-1 rounded-md bg-[#E9E9E9] p-3"
    >
      <component
        :is="`svgo-${key}`"
        class="h-4 w-4 sm:h-7 sm:w-7"
        :fontControlled="false"
        filled
      ></component>
      <span class="text-sm sm:text-base">{{ tech }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  technologies: Object,
});
</script>
