<template>
  <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
    <Slide v-for="image in images" :key="image.id">
      <img
        :src="image"
        alt="Gallery Image"
        class="gallery-image"
        loading="lazy"
        decoding="async"
      />
    </Slide>
  </Carousel>

  <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
    <Slide v-for="image in images" :key="image.id">
      <template #default="{ currentIndex, isActive }">
        <div
          :class="['thumbnail', { 'is-active': isActive }]"
          @click="slideTo(currentIndex)"
        >
          <img
            :src="image"
            alt="Thumbnail Image"
            class="thumbnail-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </template>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";

const currentSlide = ref(0);

const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: "fade",
  mouseDrag: false,
  touchDrag: false,
};

const thumbnailsConfig = {
  height: 80,
  itemsToShow: 6,
  wrapAround: true,
  touchDrag: false,
  gap: 10,
};

const images = useState("project").value.imagesByFolder;
</script>

<style scoped>
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  @apply h-full w-full rounded-lg object-cover;
}

.gallery-image {
  @apply rounded-2xl;
}

#thumbnails {
  @apply mt-[.625rem];
}

.thumbnail {
  @apply h-full w-full cursor-pointer opacity-[0.6] transition-opacity duration-[0.3s] ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
  @apply opacity-100;
}
</style>
