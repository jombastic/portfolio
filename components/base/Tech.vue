<template>
  <div class="mb-16 flex flex-wrap gap-3">
    <div
      v-for="(tech, idx) in usedTechnologies"
      :key="idx"
      class="flex items-center gap-1 rounded-md bg-[#E9E9E9] p-3"
      v-bind="animationProps"
    >
      <component
        :is="`svgo-${tech}`"
        class="h-4 w-4 sm:h-7 sm:w-7"
        :fontControlled="false"
        filled
      ></component>
      <span class="text-sm sm:text-base">{{ allTechnologies[tech] }}</span>
    </div>
  </div>
</template>

<script setup>
const { technologies, animationType } = defineProps({
  technologies: {
    type: Object,
    default: {},
  },
  animationType: {
    type: String,
    default: null,
  },
});

const delay = ref(0);
const delayTime = computed(() => {
  delay.value += 50;
  return delay.value;
});

const allTechnologies = useState("technologies");

// this is used if no prop was passed
// the Tech component doesn't pass a prop, so we use all the technologies we know ;)
const usedTechnologies = computed(() => {
  if (Object.keys(technologies).length > 0) {
    return technologies;
  }

  return Object.keys(allTechnologies.value);
});

const animationProps = computed(() => {
  if (!animationType) return {};

  return {
    "data-aos": animationType,
    "data-aos-delay": delayTime.value,
  };
});
</script>
