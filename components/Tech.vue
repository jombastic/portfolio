<template>
  <section class="relative mt-14 lg:mt-28 pb-28">
    <div class="container px-4">
      <h2
        class="mb-10 text-center text-5xl font-extrabold text-[#E9E9E9] md:mb-16 md:text-[4.625rem]"
      >
        My toolbox
      </h2>

      <BaseTech />
    </div>
  </section>
</template>

<script setup>
const technologies = useState("technologies");
</script>
