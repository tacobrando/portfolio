<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/Navigation/Navbar.vue'

const route = useRoute()
</script>

<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view 
    :key="route.path" 
    class="bg-secondary h-screen text-primary" 
  />
</template>


<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
