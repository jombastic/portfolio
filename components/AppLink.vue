<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  ...RouterLink.props,
  activeClasses: String,
});

const isExternalLink = computed(() => {
  return typeof props.to === "string" && props.to.startsWith("http");
});

const route = useRoute();

const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
});

const isActiveWithHash = computed(() => {
  if (typeof props.to === "string") {
    return isClient.value && route.path === props.to.split('#')[0] && route.hash === `#${props.to.split('#')[1]}`;
  } else if (typeof props.to === "object" && props.to.path) {
    return isClient.value && route.path === props.to.path && route.hash === props.to.hash;
  }
  return false;
});

const activeLinkClass = computed(() => {
  return isActiveWithHash.value ? props.activeClasses ? props.activeClasses : 'active-link': '';
})
</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="activeLinkClass"
    >
      <slot />
    </a>
  </router-link>
</template>
