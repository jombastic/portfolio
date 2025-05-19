<template>
  <section id="about">
    <div class="relative">
      <div
        class="absolute -top-6 bottom-0 min-h-[87.5rem] w-full bg-[url(/img/sports.png)] bg-cover bg-center xs:min-h-[81.25rem] sm:min-h-[67.5rem] 2xl:bg-contain 2xl:bg-center 2xl:min-h-[61.25rem]"
      ></div>
    </div>
    <div class="relative pt-12 lg:pt-24">
      <div class="container px-6">
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
            with frameworks like Nuxt.js (this website, for example) as well as
            custom web solutions - featuring CRM systems with secure
            authentication and authorization, seamless payment integrations, and
            robust APIs. I excel at transforming complex requirements into
            elegant, scalable digital experiences.
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
