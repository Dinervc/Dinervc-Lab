<script setup lang="ts">
import CareerPath from '../components/CareerPath.vue'
</script>

<template>
  <div class="career">
    <h1>Career Journey</h1>
    <p class="intro-text">
      Follow my professional journey through key milestones, projects, and achievements. This
      timeline showcases my growth from beginning computer science education to developing complex
      software solutions. Toggle between viewing my career from newest to oldest events or vice
      versa.
    </p>
    <div class="timeline-container">
      <CareerPath />
    </div>
  </div>
</template>

<style scoped>
.career {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 10px;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10px;
  background: linear-gradient(to right, #3a5338, #1a2318);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.intro-text {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
}

.timeline-container {
  width: 100%;
  position: relative;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .career {
    padding: 20px 5px;
  }

  h1 {
    font-size: 2rem;
  }

  .intro-text {
    font-size: 1rem;
    padding: 0 15px;
  }
}
</style>
