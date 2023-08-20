<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Dinervc logo" class="logo" src="@/assets/gameboy.png" width="75" />

    <div class="wrapper">
      <RouterLink to="/" class="logoText">Dinervc Lab</RouterLink>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/wip">WiP</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* ... Existing Styles ... */

header {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  margin-right: 10px;
}

.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.logoText {
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
}

nav {
  margin-top: auto;
  font-size: 12px;
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
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    justify-content: center; /* Center the children vertically within the wrapper */
  }

  .logoText {
    margin-top: 20px; /* You can adjust this value to your preference */
  }

  nav {
    margin-top: 20px; /* You can adjust this value to your preference */
    padding: 0; /* Reset padding */
  }
}
</style>
