<script setup>
import ProjectCard from '../components/Project/ProjectCard.vue';
import projects from "../assets/json/projects.json"
import router from '../router';

function navigateBack() {
  const portfolio = document.getElementById("portfolio-page")
  portfolio.classList.add("animate__fadeOutRightBig")
  portfolio.style.overflow = 'hidden'
  setTimeout(() => {
    router.push("/")
  }, 600)
}
</script>

<template>
  <div class="portfolio animate__animated flex flex-col" id="portfolio-page">
    <div class="backBtn flex items-center p-2">
      <svg 
        id="back-btn"
        @click="navigateBack"
        class="
          w-12 
          cursor-pointer 
          transform 
          hover:text-gray-500
          rotate-180
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
    <span class="w-full text-center text-3xl font-bold pb-2">
      <h1>Projects</h1>
    </span>
    <div class="project-container flex flex-col items-center">
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="index" 
        :data="project"
        :imageUrl="`../../assets/images/${project.image}`"
      />
    </div>
  </div>
</template>
<style>
.project-container {
  height: 93%;
  overflow: auto;
}
</style>