<template>
  <div class="social animate__animated fade-in" id="social">
    <div class="backBtn flex items-center justify-center p-2 pointer 
    next-btn 
    flex-col
    ">
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
    <div class="social-container flex flex-col justify-center h-5/6 items-center">
      <span class="w-full text-center text-3xl pb-2 fade-in">
        <h3 class="text-3xl fade-in p-2">Contact & Socials:</h3>      
      </span>
      <span class="text-4xl text-center fade-in">
        <a href="https://www.linkedin.com/in/matthew-lee-b9583b199/" target="_blank">
          <i class="
          bi bi-linkedin 
          cursor-pointer 
          transform 
          hover:text-gray-400
          hover:-translate-y-3
          transition 
          delay-75 
          m-2
          duration-200 
          ease-in-out
        "></i>
        </a>
        <a href="https://github.com/tacobrando" target="_blank">
          <i class="
            bi bi-github 
            cursor-pointer 
            transform 
            m-2
            hover:text-gray-400
            hover:-translate-y-3
            transition 
            delay-75 
            duration-200 
            ease-in-out
          "></i>
        </a>
        <a href="mailto: matthewytlee2@icloud.com">
          <i class="
            bi bi-envelope
            cursor-pointer 
            transform 
            m-2
            hover:text-gray-400
            hover:-translate-y-3
            transition 
            delay-75 
            duration-200 
            ease-in-out
          "></i>
        </a>
      </span>
      <span class="w-full text-center text-xl pt-4 pb-2 fade-in">
        <h3 class="text-xl fade-in p-2">Resume/CV:</h3>      
      </span>
      <span class="fade-in">
        <a 
          :href="resume"
          class="
            rounded 
            bg-red-500 
            p-2
            transition 
            delay-75 
            duration-200 
            ease-in-out
            transform
            hover:opacity-80
          ">
          <i class="bi bi-cloud-download"></i>
          Download
      </a>
      </span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import resume from '../assets/cv/resume.pdf'

const router = useRouter()

function navigateBack() {
  const social = document.getElementById("social")
  social.classList.add("animate__fadeOutDownBig")
  social.style.overflow = 'hidden'
  setTimeout(() => {
    router.push("/")
  }, 600)
}

function downloadResume() {

}
</script>