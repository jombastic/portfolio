<template>
  <div>
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Modal />
  </div>
</template>

<script setup>
import content from "@/content/content.json";
useState("projects", () => content.projects);
</script>
