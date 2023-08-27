<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const isSticky = ref(false);
const navElement = ref<HTMLElement | null>(null);  // Reference to the nav element
const navY = ref<number | null>(null);  // y position of the nav element

onMounted(async () => {
  await nextTick(); // Wait for the next DOM update cycle

  if (navElement.value) {
    navY.value = navElement.value.getBoundingClientRect().y;
  }

  const handleScroll = () => {
    if (navY.value !== null) {
      isSticky.value = window.scrollY > navY.value;
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();  // Initial check

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<template>
  <header>
    <!--<img alt="Dinervc logo" class="logo" src="@/assets/gameboy.png" width="75" />-->

    <div class="wrapper">
      <RouterLink to="/" class="logo-text">Dinervc Lab</RouterLink>

      <nav :class="{ sticky: isSticky }" ref="navElement">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
      </nav>
    </div>
  </header>
  <div class="router-view">
    <RouterView></RouterView>
  </div>
  <div class="bg"></div>
</template>

<style scoped>
.router-view {
  width: 92.5vw;
  margin: auto;
  margin-top: 120px;
  margin-bottom: 50px;
}

nav {
  font-size: 50px;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: center;
}

nav.sticky {
  position: fixed;
  top: 0;
  z-index: 1000;
  background: linear-gradient(-45deg, #414141e5, #756b6be5, #4b5051e5, #3e4341e5);
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;
  /*padding-top: 11px;*/
  margin-top: 0;
  width: 100vw;
  text-align: center;
  padding-bottom: 5px;
}

/*.logo {
  margin-right: 10px;
}*/

.wrapper {
  top: 0;
  background: linear-gradient(-45deg, #68686854, #756b6b54, #6c737554, #a8b3af54);
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.logo-text {
  text-align: center;
  font-size: 50px;
}

nav {
  font-size: 25px;
  margin-bottom: 5px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid black;
}

nav.sticky a {
  border-left: 1px solid black;
}

nav a:first-of-type {
  border: 0;
}
</style>
