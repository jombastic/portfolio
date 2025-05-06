<template>
  <AppLink
    v-if="element == 'a'"
    class="inline-block rounded-[.625rem] bg-[#F2DA91] px-[1.5rem] py-3 font-bold text-black transition-all duration-500 hover:bg-black hover:text-white"
    :to="{ path, hash: `#${hash}` }"
  >
    <slot></slot>
  </AppLink>
  <button
    v-else
    class="inline-block rounded-[.625rem] px-6 py-3 font-bold text-black transition-all duration-500"
    :class="{
      'cursor-not-allowed bg-gray-400': disabled,
      'bg-[#F2DA91] hover:bg-black hover:text-white': !disabled,
    }"
    :type
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  text: String,
  element: String,
  type: {
    type: String,
    default: "button",
  },
  path: String,
  hash: String,
  disabled: Boolean,
});
</script>
