<template>
  <div class="about animate__animated" id="about">
    <div class="
    pointer 
    next-btn 
    flex 
    flex-row-reverse
    w-full
    items-center
  ">
    <svg 
    id="back-btn"
    @click="navigateBack"
    class="
      w-12 
      cursor-pointer 
      transform 
      hover:text-gray-500
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
  <p class="hide fade-in">Back</p>
  </div>
    <h1 class="fade-in">This is an about page</h1>
  </div>
</template>
<script setup>
import router from '../router';

function navigateBack() {
  const about = document.getElementById("about")
  about.classList.add("animate__fadeOutLeftBig")
  about.style.overflow = 'hidden'
  setTimeout(() => {
    router.push("/")
  }, 600)
}
</script>