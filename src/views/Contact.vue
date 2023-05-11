<template>
  <div class="contact animate__animated fade-in" id="contact">
    <div class="backBtn flex items-center justify-center p-2    pointer 
    next-btn 
    flex-col ">
      <svg 
        id="back-btn"
        @click="navigateBack"
        class="
          -rotate-90
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
      <p class="hide">Back</p>   
    </div>
    <div class="contact-container">

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateBack() {
  const contact = document.getElementById("contact")
  contact.classList.add("animate__fadeOutDownBig")
  contact.style.overflow = 'hidden'
  setTimeout(() => {
    router.push("/")
  }, 600)
}
</script>