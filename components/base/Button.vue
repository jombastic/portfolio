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
    class="inline-block rounded-[.625rem] bg-[#F2DA91] px-[1.5rem] py-3 font-bold text-black transition-all duration-500 hover:bg-black hover:text-white"
    :type="type"
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
    default: 'button'
  },
  path: String,
  hash: String
});
</script>
