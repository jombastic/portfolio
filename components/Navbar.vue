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
    <div class="flex items-center text-[#000000]">
      <NuxtLink
        class="relative mx-5 flex justify-center before:invisible before:absolute before:-top-10 before:inline-block before:h-0 before:w-0 before:border-l-[.625rem] before:border-r-[.625rem] before:border-t-[.875rem] before:border-solid before:border-[#232323] before:border-l-transparent before:border-r-transparent before:align-middle hover:before:visible"
        to="/"
        >About</NuxtLink
      >
      <NuxtLink
        class="relative mx-5 flex justify-center before:invisible before:absolute before:-top-10 before:inline-block before:h-0 before:w-0 before:border-l-[.625rem] before:border-r-[.625rem] before:border-t-[.875rem] before:border-solid before:border-[#232323] before:border-l-transparent before:border-r-transparent before:align-middle hover:before:visible"
        to="/"
        >Work</NuxtLink
      >

      <NuxtLink
        class="block rounded-[.625rem] border border-solid border-[#000000] px-[1.5rem] py-[.5rem] font-bold hover:bg-[#000000] hover:text-[#ffffff]"
        to="#contact"
        >Get in touch</NuxtLink
      >
    </div>
  </nav>
</template>
