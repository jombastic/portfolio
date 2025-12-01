<template>
  <div>
    <main role="main">
      <Hero />
      <AboutTech />
      <Projects />
      <Contact />
      <Modal />
    </main>
    <Footer />
    <BaseBackToTop />
  </div>
</template>

<script setup>
import content from "@/content/content.json";

useState("technologies", () => content.technologies);
</script>
