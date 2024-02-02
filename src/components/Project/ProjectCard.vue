<template>
  <div class="
    project-card 
    w-full 
    m-5
    bg-white 
    text-black 
    flex 
    transform
    justify-start
    delay-75 
    duration-200 
    ease-in-out
    items-center
    lg:hover:shadow-2xl
    lg:hover:-translate-y-3 
    transition
    fade-in
  "
  >
    <span class="image-container">
      <img id="project-img" class="image" :src="imageUrl()">
    </span>
    <div class="project-info flex flex-col justify-start items-center">
      <h1 class="p-2 text-xl font-bold">{{ data.title.toUpperCase() }}</h1>
      <div>
        <i class="p-1 text-xl" v-for="(type, index) in data.types" :key="index" :class="'devicon-' + type + ' colored'"></i>
      </div>
      <p class="text-sm p-4">{{ data.description }}</p>
      <span>
        <button v-if="data.url" style="background-color: #007CC7;" @click="redirect(data.url)" class="p-2 text-white cursor-pointer m-2 hover:opacity-70 transition delay-50">
          <i class="bi bi-box-arrow-up-right"></i>
          Visit
        </button>
        <button v-if="data.github" @click="redirect(data.github)" class="p-2 bg-black text-white cursor-pointer m-2 hover:opacity-70 transition delay-50">
          <i class="bi bi-github"></i>
          GitHub
        </button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProjectData } from '@/types/projectTypes';

const props = defineProps<{
  data: ProjectData,
  index: number
}>()

const imageUrl = (): string => {
  return new URL(`../../assets/images/${props.data.image}`, import.meta.url).href
}

function redirect(url: string): void {
  window.open(url)
}

</script>
<style scoped>
.image-container {
  width: 50%;
}

.image {
  width: 100%;
  height: 100%;
}

.project-info {
  width: 50%;
}

@media only screen and (max-width: 1000px) {
  .project-card {
    display: flex;
    flex-direction: column;
  }
  .image-container {
    width: 100%;
  }
  .project-info {
    width: 100%;
  }
  .image {
    width: 100%;
  }
}

.text {
  background-color: #04AA6D;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>