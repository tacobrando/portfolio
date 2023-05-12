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
    rounded
    fade-in
  "
  >
    <span class="image-container">
      <img id="project-img" class="image rounded" :src="imageUrl()">
    </span>
    <div class="project-info flex flex-col justify-start items-center">
      <h1 class="p-2 text-xl font-bold">{{ data.title.toUpperCase() }}</h1>
      <div>
        <i class="p-1 text-xl" v-for="(type, index) in data.types" :key="index" :class="'devicon-' + type + '-plain colored'"></i>
      </div>
      <p class="text-sm p-4">{{ data.description }}</p>
      <span>
        <button v-if="data.url" @click="redirect(data.url)" class="p-2 bg-sky-500 text-white rounded-lg cursor-pointer m-2 hover:opacity-70 transition delay-50">
          <i class="bi bi-box-arrow-up-right"></i>
          Visit
        </button>
        <button @click="redirect(data.github)" class="p-2 bg-black text-white rounded-lg cursor-pointer m-2 hover:opacity-70 transition delay-50">
          <i class="bi bi-github"></i>
          GitHub
        </button>
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object
  },
  imageUrl: {
    type: String
  },
  index: {
    type: Number
  }
})

const imageUrl = () => {
  return new URL(`../../assets/images/${props.data.image}`, import.meta.url).href
}

function redirect(url) {
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