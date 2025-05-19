<template>
  <section
    class="bg-[url('/img/forest.png')] bg-cover pb-32 pt-44 md:pt-[16.125rem]"
  >
    <div
      class="container justify-between gap-x-4 px-6 text-[#EFEFEE] lg:grid xl:grid-cols-4"
    >
      <div class="col-start-1 col-end-3 mb-8">
        <h1
          class="text-3xl font-medium leading-[2.5] sm:text-[2.75rem]"
          data-aos="fade-up"
        >
          Hi, I'm Slavcho.
        </h1>
        <h2
          class="text-4xl font-extrabold leading-10 sm:text-[4.625rem] sm:leading-[5.5975rem]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Your fullstack developer.
        </h2>
        <p
          class="mb-10 mt-2 text-lg sm:text-2xl sm:leading-9"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          I craft modern, performant web applications from the ground up - from
          intuitive user interfaces to robust backend systems.
        </p>
        <a
          class="inline-block"
          href="/SlavchoMitrovCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-up"
          data-aos-delay="900"
        >
          <BaseButton>View my CV</BaseButton>
        </a>
      </div>
      <div
        class="col-start-4 flex items-center justify-center lg:justify-end 2xl:items-end"
      >
        <div class="relative max-w-[18rem] sm:max-w-[24rem]">
          <div
            class="grid items-end justify-center overflow-hidden rounded-[0_0_100vw_100vw]"
          >
            <div
              class="absolute aspect-square h-[18rem] w-[18rem] max-w-full rounded-full bg-gradient-to-r from-[#dbdbcf] via-[#f2da91] to-[#f2da91] object-cover sm:h-[24rem] sm:w-[24rem] lg:ml-auto lg:mt-0"
            ></div>
            <img
              src="/img/slavco.png"
              width="448"
              height="448"
              alt="A photo of me"
              class="relative top-0 z-[2] max-w-[21rem] sm:max-w-[28rem]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
