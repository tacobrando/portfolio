<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div class="
      navbar
      h-16 
      fixed
      flex 
      justify-center 
      items-center
      bg-primary
      text-white
      m-3
      shadow-md
      slide-top
      rounded-sm
    "
    v-if="route.path !== '/'"
  >
  </div>
</template>