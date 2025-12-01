<template>
  <footer role="contentinfo" class="mb-8 max-w-4xl px-6 md:container">
    <div
      class="rounded-2xl bg-[#2B2B2B24] p-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[1.875rem]"
    >
      <div class="text-base font-semibold text-black">
        <div class="flex flex-wrap items-center justify-center">
          Copyright ©
          {{ year }}
          <a
            href="https://www.linkedin.com/in/slav-mit/"
            target="_blank"
            class="inline-flex justify-center gap-x-2 rounded-[0.5rem] px-3 py-1 font-bold text-black transition-all duration-300 hover:underline"
          >
            <svgo-linkedin class="size-6" :fontControlled="false" />
            Slavcho Mitrov
          </a>
        </div>
        <div class="mt-4 flex flex-wrap items-center justify-center">
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
    </div>
  </footer>
</template>

<script setup>
const year = computed(() => {
  let todayDate = new Date().getFullYear();
  return todayDate === 2025 ? todayDate : "2025 - " + todayDate;
});
</script>
