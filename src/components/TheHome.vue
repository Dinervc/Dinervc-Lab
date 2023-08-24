<script setup lang="ts"></script>

<template>
  <h1 class="typing" align="center">
    <img
      src="https://readme-typing-svg.herokuapp.com/?font=VT323&size=35&center=true&vCenter=true&color=00bd7e&pause=3000&width=700&height=70&duration=3000&lines=Welcome!;+I'm+Dinervc,+Software+Engineer!;Creating+Innovative+Software+Solutions!;Building+the+Future+of+Tech;Turning+Visions+into+Reality"
      class="typingImg" />
  </h1>
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
  background-color: black;
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
