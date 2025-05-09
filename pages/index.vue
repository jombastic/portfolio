<template>
  <div>
    <Hero />
    <About />
    <Tech />
    <Projects />
    <Contact />
    <Modal />
    <Footer />
    <BaseBackToTop />
  </div>
</template>

<script setup>
import content from "@/content/content.json";

useState("technologies", () => content.technologies);
</script>
