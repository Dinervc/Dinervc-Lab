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
        <h2>About This Lab</h2>
        <p>This lab is a reflection of my journey as a Software Engineer. It showcases my skills, projects, and
          passion for technology. Built with the latest web technologies, it's designed to give you insight into my
          professional capabilities.</p>
      </div>
      <div class="grid-item" id="three">
        <h3>Featured Project - Reflectory</h3>
        <p>This is an AI powered mental health improvement app. Created for the Hack United hackathon in August 2023. It
          was awarded as the best Solo Hack out of the competition.</p>
        <br><button class="demo"><a href="path/to/demo" target="_blank">Demo</a></button>
      </div>
    </div>
  </div>
</template>

<style>
#three {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url('../assets/certificate.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  animation: gradient ease;
}

.demo {
  border-radius: 5px;
  font-size: 25px;
  padding-bottom: 6px;
}

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
  border-radius: 30px;
}

.grid-item>img {
  width: 200px;
  margin-right: 30px;
}
</style>