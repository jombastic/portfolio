<template>
  <section class="bg-[url('/img/forest.png')] bg-cover pb-32 pt-[16.125rem]">
    <div
      class="container grid-cols-5 justify-between px-4 text-[#EFEFEE] lg:grid"
    >
      <div class="col-start-1 col-end-3 mb-8">
        <h1>
          <span class="text-3xl font-medium sm:text-[2.75rem] leading-[2.5]"
            >Hi, I'm Slavcho.</span
          >
          <br />
          <span class="sm:text-[4.625rem] font-extrabold text-4xl leading-10 sm:leading-[5.5975rem]"
            >A fullstack developer.</span
          >
        </h1>
        <p class="mb-10 mt-2 sm:text-2xl text-lg sm:leading-9">
          I craft modern, performant web applications from the ground up — from
          intuitive user interfaces to robust backend systems.
        </p>
        <BaseButton element="a" :to="{ path: '/', hash: '#contact' }"
          >Get in touch</BaseButton
        >
      </div>
      <div
        class="col-start-4 col-end-6 flex items-end justify-center lg:justify-end"
      >
        <div class="relative max-w-full xs:max-w-[25.125rem]">
          <div
            class="grid items-end justify-center overflow-hidden rounded-[0_0_100vw_100vw]"
          >
            <div
              class="absolute aspect-square h-[25.125rem] w-[25.125rem] max-w-full rounded-full bg-gradient-to-r from-[#dbdbcf] via-[#f2da91] to-[#f2da91] object-cover lg:ml-auto lg:mt-0"
            ></div>
            <img
              src="/img/slavco.png"
              alt=""
              class="relative top-0 z-[2] max-w-[34.625rem]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
