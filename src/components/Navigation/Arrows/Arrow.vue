<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const props = defineProps({
  direction: {
    type: String,
  },
  func: {
    type: Function,
  },
  title: {
    type: String
  },
  slug: {
    type: String
  }
})

const route = useRoute()

function routeHandler() {
  if(route.path === "/" && props.direction === "right") {
    document.getElementById("landing-page").classList.add("animate__fadeOutLeftBig")
  } else if(route.path === "/" && props.direction === "left") {
    document.getElementById("landing-page").classList.add("animate__fadeOutRightBig")
  }
  setTimeout(() => {
    emit("routeHandler", props.slug)
  }, 500)
}

const emit = defineEmits(['routeHandler'])

onMounted(() => {
  const arrowBtn = document.getElementById("arrow-btn")
  if(props.direction == "left") {
    arrowBtn.classList.add("rotate-180")
  }
})
</script>
<template>
  <div class="
    pointer 
    next-btn 
    flex 
    flex-col 
    items-center 
    justify-center
  ">
    <svg 
    id="arrow-btn"
    @click="routeHandler"
    class="
      w-12 
      cursor-pointer 
      transform 
      hover:text-gray-500
      hover:-translate-y-3
      transition 
      delay-75 
      duration-200 
      ease-in-out
    " 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      class="fade-in"
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="2" 
      d="M9 5l7 7-7 7"
    >
    </path>
  </svg>
  <p id="nav-item-text" class="hide fade-in-text">{{title}}</p>
  </div>
</template>
