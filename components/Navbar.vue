<template>
  <nav
    class="mx-20 mt-14 flex items-center justify-between rounded-3xl border-8 border-solid border-[#F2F2F2] bg-[#2B2B2B24] p-6 shadow-[0rem_.25rem_1.875rem_#2B2B2B24] backdrop-blur-[1.875rem]"
  >
    <div>
      <NuxtLink
        class="block rounded-[12.5rem] border border-solid border-[#000000] px-[1.5rem] py-[.5rem] text-xs"
        to="/"
        ><span class="font-extrabold">Slavcho</span>Mitrov</NuxtLink
      >
    </div>
    <div class="flex justify-center">
      <div class="relative flex items-center text-[#000000]" style="--items: 2">
        <NuxtLink :class="activeClass('/', '#about')" class="peer mx-5" :to="{ path: '/', hash: '#about' }"
          >About</NuxtLink
        >
        <NuxtLink :class="activeClass('/', '#work')" class="peer mx-5" :to="{ path: '/', hash: '#work' }">Work</NuxtLink>
        <span
          class="pointer-events-none absolute -top-10 left-[calc(100%/var(--items)*(var(--index)-0.5))] h-0 w-0 -translate-x-1/2 border-l-[.625rem] border-r-[.625rem] border-t-[.875rem] border-solid border-[#232323] border-l-transparent border-r-transparent align-middle opacity-0 transition-all duration-500 [--index:0] peer-[.active-link]:opacity-100 peer-[.active-link:nth-of-type(1)]:[--index:1] peer-[.active-link:nth-of-type(2)]:[--index:2]"
        ></span>
      </div>
      <NuxtLink
        class="block rounded-[.625rem] border border-solid border-[#000000] px-[1.5rem] py-[.5rem] font-bold hover:bg-[#000000] hover:text-[#ffffff]"
        to="#contact"
        >Get in touch</NuxtLink
      >
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const route = useRoute();
const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
});

const activeClass = (path, hash) => {
  return isClient.value && route.path === path && route.hash === hash ? 'active-link' : '';
};
</script>