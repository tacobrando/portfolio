<script setup lang="ts">
defineProps<{
  rotation?: string
  title: string
}>()
</script>

<template>
  <div class="flex flex-col items-center gap-1 group cursor-pointer">
    <svg
      class="w-10 h-10 transform transition duration-300 group-hover:scale-110"
      :class="rotation"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
    <span class="text-sm group-hover:underline">{{ title }}</span>
  </div>
</template>