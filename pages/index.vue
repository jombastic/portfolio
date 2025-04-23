<template>
  <div>
    <Hero />
    <About />
    <Projects />
    <div id="contact"></div>
  </div>
</template>

<script setup>
import projectsJson from "../content/content.json";
const projects = useState("content", () => projectsJson);
</script>
