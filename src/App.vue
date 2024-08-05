<script setup>
import { RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <header>
    <div class="name"><a href="/">Naomi Mine</a></div>
    <NavMenu />
  </header>
  <RouterView />
</template>

<style>
@import "./styles/main.scss";

header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name {
  font-size: 32px;
}
</style>
