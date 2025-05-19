<template>
  <div class="relative">
    <div class="absolute z-50 w-full">
      <div class="container px-4">
        <nav
          class="top-0 mt-14 flex items-center justify-between rounded-3xl border-8 border-solid border-[#F2F2F2] bg-[#2B2B2B24] p-6 shadow-[0rem_.25rem_1.875rem_#2B2B2B24] backdrop-blur-[1.875rem]"
        >
          <!-- Logo -->
          <div>
            <AppLink
              class="block rounded-[12.5rem] border border-solid border-black px-[1.5rem] py-[.5rem] text-xs"
              to="/"
              ><span class="font-extrabold">Slavcho</span>Mitrov</AppLink
            >
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center justify-center">
            <div
              class="relative flex items-center text-black"
              style="--items: 2"
            >
              <AppLink class="peer mx-5" :to="{ path: '/', hash: '#about' }"
                >About</AppLink
              >
              <AppLink class="peer mx-5" :to="{ path: '/', hash: '#work' }"
                >Work</AppLink
              >
              <span
                class="pointer-events-none absolute -top-10 left-[calc(100%/var(--items)*(var(--index)-0.5))] h-0 w-0 -translate-x-1/2 border-l-[.625rem] border-r-[.625rem] border-t-[.875rem] border-solid border-[#232323] border-l-transparent border-r-transparent align-middle opacity-0 transition-all duration-500 [--index:0] peer-[.active-link]:opacity-100 peer-[.active-link:nth-of-type(1)]:[--index:1] peer-[.active-link:nth-of-type(2)]:[--index:2]"
              ></span>
            </div>
            <AppLink
              class="block rounded-[.625rem] border border-solid border-black px-[1.5rem] py-3 font-bold transition-all duration-500 hover:bg-black hover:text-white"
              :to="{ path: '/', hash: '#contact' }"
              active-classes="md:bg-black md:text-white"
              >Get in touch</AppLink
            >
          </div>

          <!-- Mobile Hamburger -->
          <button
            @click="menuOpen = !menuOpen"
            class="md:hidden focus:outline-none"
          >
            <svg
              class="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!menuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </nav>

        <!-- Mobile Nav with transition -->
        <Transition name="fade-slide">
          <div
            v-if="menuOpen"
            class="md:hidden mt-4 rounded-xl border border-black bg-[#2B2B2B]/20 backdrop-blur-lg p-6 space-y-4 shadow-md"
          >
            <AppLink
              class="block rounded-[.625rem] border border-solid border-black px-[1.5rem] py-3 font-bold transition-all duration-300 hover:bg-black hover:text-white"
              :to="{ path: '/', hash: '#about' }"
              @click="closeMenu"
              >About</AppLink
            >
            <AppLink
              class="block rounded-[.625rem] border border-solid border-black px-[1.5rem] py-3 font-bold transition-all duration-300 hover:bg-black hover:text-white"
              :to="{ path: '/', hash: '#work' }"
              @click="closeMenu"
              >Work</AppLink
            >
            <AppLink
              class="block rounded-[.625rem] border border-solid border-black px-[1.5rem] py-3 font-bold transition-all duration-300 hover:bg-black hover:text-white"
              :to="{ path: '/', hash: '#contact' }"
              active-classes="md:bg-black md:text-white"
              @click="closeMenu"
              >Get in touch</AppLink
            >
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const menuOpen = ref(false);
const closeMenu = () => (menuOpen.value = false);
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  @apply transition-opacity duration-300 ease-[ease];
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  @apply opacity-0 translate-y-[-0.5rem];
}
</style>
