<template>
  <section class="bg-[url('/img/forest.png')] bg-cover pb-32 pt-[16.125rem]">
    <div
      class="container grid-cols-5 justify-between px-4 text-[#EFEFEE] lg:grid"
    >
      <div class="col-start-1 col-end-3 mb-8">
        <h1>
          <span class="text-[2.75rem] font-medium leading-[2.5]"
            >Hi, I'm Slavcho.</span
          >
          <br />
          <span class="text-[4.625rem] font-extrabold leading-[5.5975rem]"
            >A fullstack developer.</span
          >
        </h1>
        <p class="mb-10 mt-2 text-2xl leading-9">
          Besides solving complex problems, I love hiking, exploring the great
          outdoors, beer and heavy metal music.
        </p>
        <BaseButton element="a" :to="{ path: '/', hash: '#contact' }">Get in touch</BaseButton>
      </div>
      <div
        class="col-start-4 col-end-6 flex items-end justify-center lg:justify-end"
      >
        <div class="relative max-w-[25.125rem]">
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