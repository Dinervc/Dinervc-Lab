<script setup lang="ts">
import TheHome from '../components/TheHome.vue'
</script>

<template>
  <div class="home">
    <TheHome />

    <div class="grid-container">
      <div class="grid-item">
        <h1>Welcome to the Digital Home of Dinervc</h1>
        <p>A passionate Software Engineer based in Switzerland, currently immersed in academic studies, and dedicated to
          developing innovative solutions through coding and programming. Explore my projects to witness my commitment to
          efficiency and modern design principles. Let's build the future of technology together.</p>
      </div>
      <div class="grid-item">
        <h2>About This Portfolio</h2>
        <p>This portfolio is a reflection of my journey as a Software Engineer. It showcases my skills, projects, and
          passion for technology. Built with the latest web technologies, it's designed to give you insight into my
          professional capabilities.</p>
      </div>
      <div class="grid-item">
        <h3>Featured Project: [Project Title]</h3>
        <p>[Project Description]</p>
        <img src="path/to/your/image1.jpg" alt="[Image Description]">
        <img src="path/to/your/image2.jpg" alt="[Image Description]">
        <button><a href="path/to/demo" target="_blank">Demo</a></button>
      </div>
    </div>
  </div>
</template>

<style>
.grid-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.grid-item {
  flex: 1 1 400px;
  /* Adjust this value to control when items wrap */
  box-sizing: border-box;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ddd;
}
</style>