<template>
  <section id="about" class="relative">
    <div class="relative pt-12 lg:pt-24">
      <div class="px-6 md:container">
        <h2
          class="mb-10 text-center text-5xl font-extrabold text-[#E9E9E9] md:mb-16 md:text-[4.625rem]"
        >
          About me
        </h2>
        <div
          class="flex flex-col gap-y-4 text-lg text-white sm:text-xl md:text-2xl"
        >
          <p>
            For the past {{ yearsOfXp }}+ years, I have specialized in building
            streamlined, user-centric websites alongside sophisticated web
            applications. My portfolio includes modern single-page sites built
            with frameworks like Nuxt.js (<NuxtLink
              to="https://github.com/jombastic/portfolio"
              target="_blank"
              class="underline-offset-3 ml-1 inline-block font-semibold text-[#F2DA91] underline decoration-transparent transition-colors duration-150 hover:decoration-current"
              >this portfolio</NuxtLink
            >, for example) as well as custom web solutions - featuring CRM
            systems with secure authentication and authorization, seamless
            payment integrations, and robust APIs. I excel at transforming
            complex requirements into elegant, scalable digital experiences.
          </p>
          <p>
            In addition to solving intricate technical challenges 💡, I am an
            avid outdoor enthusiast who loves hiking 🥾⛰️, savoring a
            well-crafted beer 🍻, and immersing myself in the energy of live
            heavy metal performances 🤘🎸.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const dateDifferenceInMonths = (dateInitial, dateFinal) =>
  Math.max(
    (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12 +
      dateFinal.getMonth() -
      dateInitial.getMonth(),
    0,
  );

const yearsOfXp = Math.floor(
  dateDifferenceInMonths(new Date("June 15, 2018"), new Date()) / 12,
);
</script>
