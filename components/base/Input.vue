<template>
  <div class="flex flex-col" :class="customClass">
    <label :for="name" class="sr-only">{{ label }}</label>
    <component
      :is="element"
      :id="name"
      :value="value"
      v-on="validationListeners"
      :type="type"
      :placeholder="placeholder"
      :rows="rows"
      class="rounded-lg p-3"
    ></component>
    <span class="text-red-500 mt-2">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
const { name } = defineProps({
  element: {
    type: String,
    default: "input",
  },
  type: {
    type: String,
    default: "text",
  },
  customClass: String,
  rows: String,
  label: String,
  placeholder: String,
  name: String,
});

const { value, errorMessage, handleChange, handleBlur } = useField(
  () => name,
  undefined,
  {
    validateOnValueUpdate: false,
  },
);

const validationListeners = {
  blur: (evt) => handleBlur(evt, true),
  change: handleChange,
  input: (evt) => handleChange(evt, !!errorMessage.value),
};
</script>
