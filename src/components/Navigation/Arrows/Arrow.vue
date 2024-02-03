<template>
  <div class="pointer next-btn flex flex-col items-center justify-center">
    <svg 
      id="arrow-btn"
      @click="routeHandler"
      :class="direction"
      class="w-12 cursor-pointer transform hover:text-gray-500 hover:-translate-y-3 transition delay-75 duration-200 ease-in-out"
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        :class="props.load ? 'fade-in' : ''"
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M9 5l7 7-7 7"
      >
      </path>
    </svg>
    <p id="nav-item-text" :class="props.load ? 'hide fade-in-text' : 'hide'">{{title}}</p>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const props = defineProps({
  direction: String,
  title: String,
  slug: String,
  load: Boolean
});

const route = useRoute()

function routeHandler() {
  const landingPage = document.getElementById("landing-page")
  if(landingPage &&!props.load) {
    if(route.path === "/" && props.direction == undefined) {
      landingPage.classList.add("animate__fadeOutLeftBig")
    } else if(route.path === "/" && props.direction === "rotate-180") {
      landingPage.classList.add("animate__fadeOutRightBig")
    } else if(route.path === "/" && props.direction === "rotate-90") {
      landingPage.classList.add("animate__fadeOutUpBig")
    }
  }
  setTimeout(() => {
    emit("routeHandler", props.slug)
  }, 650)
}

const emit = defineEmits(['routeHandler'])
</script>