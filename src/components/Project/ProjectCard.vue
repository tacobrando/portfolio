<template>
  <div
    class="project-card w-full m-5 bg-white text-black flex transform justify-start delay-75 duration-200 ease-in-out items-center lg:hover:shadow-2xl lg:hover:-translate-y-3 transition fade-in"
  >
    <span class="image-container h-[300px] w-[500px] overflow-hidden">
      <img id="project-img" class="image" :src="imageUrl()" :alt="data.title" />
    </span>
    <div
      class="project-info w-full flex flex-col justify-start items-start ml-4"
    >
      <div class="flex flex-col lg:items-start items-center lg:mt-0 mt-2">
        <div>
          <h1 class="mb-4 text-2xl font-bold">
            {{ data.title.toUpperCase() }}
          </h1>

          <i
            class="mr-2 text-xl"
            v-for="(type, index) in data.types"
            :key="index"
            :class="'devicon-' + type + ' colored'"
          ></i>
        </div>
        <p class="text-sm mt-4 mr-4">{{ data.description }}</p>
      </div>
      <div
        class="flex flex-row gap-4 mt-4 lg:mb-0 mb-4 items-center w-full lg:justify-start justify-center"
      >
        <button
          v-if="data.url"
          style="background-color: #007cc7"
          @click="redirect(data.url)"
          class="p-2 text-white cursor-pointer hover:opacity-70 transition delay-50"
        >
          <i class="bi bi-box-arrow-up-right"></i>
          Visit
        </button>
        <button
          v-if="data.github"
          @click="redirect(data.github)"
          class="p-2 bg-black text-white cursor-pointer hover:opacity-70 transition delay-50"
        >
          <i class="bi bi-github"></i>
          GitHub
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProjectData } from "@/types/projectTypes";

const props = defineProps<{
  data: ProjectData;
  index: number;
}>();

const imageUrl = (): string => {
  return new URL(`../../assets/images/${props.data.image}`, import.meta.url)
    .href;
};

function redirect(url: string): void {
  window.open(url);
}
</script>
<style scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  background-color: #04aa6d;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
