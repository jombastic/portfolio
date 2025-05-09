<template>
  <footer
    class="mx-auto mb-8 max-w-4xl rounded-2xl bg-[#2B2B2B24] px-6 py-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[1.875rem]"
  >
    <div class="text-base font-semibold text-black">
      <div class="flex items-center justify-center flex-wrap">
        Copyright ©
        {{ year }}
        <a
          href="https://www.linkedin.com/in/slavcho-mitrov-795b15110/"
          target="_blank"
          class="inline-flex justify-center gap-x-2 rounded-[0.5rem] px-3 py-1 font-bold text-black transition-all duration-300 hover:underline"
        >
          <svgo-linkedin class="size-6" :fontControlled="false" />
          Slavcho Mitrov
        </a>
      </div>
      <div class="mt-4 flex items-center justify-center flex-wrap">
        Design by
        <a
          href="https://www.linkedin.com/in/kirilspasov/"
          target="_blank"
          class="inline-flex justify-center gap-x-2 rounded-[0.5rem] px-3 py-1 font-bold text-black transition-all duration-300 hover:underline"
        >
          <svgo-linkedin class="size-6" :fontControlled="false" />
          Kiril Spasov
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = computed(() => {
  let todayDate = new Date().getFullYear();
  return todayDate === 2025 ? todayDate : "2025 - " + todayDate;
});
</script>
