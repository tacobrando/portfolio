<template>
  <div
    class="project-card animate__animated animate__fadeInUp w-full max-w-6xl m-4 p-4 bg-neutral-900 text-gray-200 flex flex-col lg:flex-row gap-6 items-start shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out rounded-xl"
    :style="{ animationDelay: `${index * 100}ms` }"
  >
    <!-- Image Section -->
    <div class="w-full lg:w-1/2 overflow-hidden rounded-lg aspect-video">
      <img
        class="w-full h-full object-cover"
        :src="imageUrl()"
        :alt="data.title"
      />
    </div>

    <!-- Info Section -->
    <div class="w-full lg:w-1/2 flex flex-col justify-between">
      <div>
        <h1 class="text-2xl font-bold mb-2 text-center lg:text-left">
          {{ data.title.toUpperCase() }}
        </h1>

        <div class="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
          <i
            v-for="(type, index) in data.types"
            :key="index"
            :class="'devicon-' + type + ' colored text-2xl'"
          ></i>
        </div>

        <p class="text-sm text-center lg:text-left">
          {{ data.description }}
        </p>
      </div>

      <div class="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
        <button
          v-if="data.url"
          @click="redirect(data.url)"
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <i class="bi bi-box-arrow-up-right mr-2"></i>Visit
        </button>

        <button
          v-if="data.github"
          @click="redirect(data.github)"
          class="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          <i class="bi bi-github mr-2"></i>GitHub
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
  window.open(url, "_blank");
}
</script>

<style scoped>
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
  transform: scale(1.03);
}
</style>
