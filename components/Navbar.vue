<template>
  <div class="relative">
    <div
      class="absolute z-50 w-full transform duration-300 ease-in-out md:fixed"
      :class="{ 'md:translate-y-[-100%]': !isVisible }"
    >
      <div class="px-6 md:container">
        <nav
          role="navigation"
          class="top-0 mt-14 flex items-center justify-between rounded-3xl border-8 border-solid p-4 shadow-[0rem_.25rem_1.875rem_#2B2B2B24] backdrop-blur-[1.875rem] transition-all duration-300 md:p-6"
          :class="[
            isAtTop
              ? 'border-[#F2F2F2] bg-[#2B2B2B24]'
              : 'md:border-black md:bg-[#E9E9E9]',
          ]"
        >
          <!-- Logo -->
          <div>
            <AppLink
              class="block rounded-[12.5rem] border border-solid border-black px-[1.5rem] py-[.5rem] text-xs"
              to="/"
            >
              <svgo-favicon
                class="size-6 md:size-8"
                :filled="true"
                :fontControlled="false"
              />
              <span class="sr-only">Home</span>
            </AppLink>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden items-center justify-center md:flex">
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
            class="focus:outline-none md:hidden"
            aria-label="Menu"
          >
            <svg
              class="h-6 w-6 text-black"
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
            class="mt-4 space-y-4 rounded-xl border border-black bg-[#2B2B2B]/20 p-6 shadow-md backdrop-blur-lg md:hidden"
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
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const menuOpen = ref(false);
const isVisible = ref(true);
const isAtTop = ref(true);
let lastScrollY = ref(0);

const closeMenu = () => (menuOpen.value = false);

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // Only update isVisible for desktop devices (md and above)
  if (window.innerWidth >= 768) {
    // 768px is the md breakpoint in Tailwind
    isVisible.value = currentScrollY < lastScrollY.value || currentScrollY < 10;
    // Update isAtTop based on scroll position
    isAtTop.value = currentScrollY < 10;

    lastScrollY.value = currentScrollY;
  }
};
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  @apply transition-opacity duration-300 ease-[ease];
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  @apply translate-y-[-0.5rem] opacity-0;
}
</style>
