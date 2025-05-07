<template>
  <div>
    <Hero />
    <About />
    <Tech />
    <Projects />
    <Contact />
    <Modal />
    <BaseBackToTop />
  </div>
</template>

<script setup>
import content from "@/content/content.json";
useState("projects", () => content.projects);
useState("technologies", () => content.technologies);
</script>
