<template>
  <section class="relative mt-14 pb-10 md:pb-28 lg:mt-28">
    <div class="px-6 md:container">
      <h2
        class="mb-10 text-center text-5xl font-extrabold text-[#E9E9E9] md:mb-16 md:text-[4.625rem]"
      >
        My toolbox
      </h2>

      <BaseTech animation-type="fade-right" />
    </div>
  </section>
</template>

<script setup>
const technologies = useState("technologies");
</script>
