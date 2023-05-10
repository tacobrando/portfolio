<template>
  <div class="
      project-card 
      fade-in
      bg-white 
      text-black 
      transform
      justify-start
      my-5
      delay-75 
      duration-200 
      ease-in-out
      items-center
      hover:shadow-2xl
      hover:-translate-y-3 
      transition
      rounded-lg
      border
      h-fit
      image-container
    "
  >
    <img id="project-img" class="rounded-t-lg image" :src="imageUrl()">
    <div class="middle flex justify-center items-center">
      <button class="p-2 bg-black text-white rounded-lg cursor-pointer m-2 hover:opacity-70 transition delay-50" @click="redirect(data.github)">
        <i class="bi bi-github"></i>
        GitHub
      </button>
      <button v-if="data.url" class="p-2 bg-sky-500 text-white rounded-lg cursor-pointer m-2 hover:opacity-70 transition delay-50" @click="redirect(data.url)">
        <i class="bi bi-box-arrow-up-right"></i>
        Visit
      </button>
    </div>
    <div class="project-info flex flex-col justify-center items-center">
      <h1 class="p-2 text-xl font-bold">{{ data.title.toUpperCase() }}</h1>
      <div>
        <i class="p-1 text-xl" v-for="(type, index) in data.types" :key="index" :class="'devicon-' + type + '-plain colored'"></i>
      </div>
      <p class="text-sm p-4">{{ data.description }}</p>
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
  position: relative;
  width: 40%
}

.image {
  opacity: 1;
  display: block;
  height: 300px;
  width: 100%;
  transition: .5s ease;
  backface-visibility: hidden;
}

@media only screen and (max-width: 1000px) {
  .image-container {
    position: relative;
    width: 90%;
  }
  .image {
    height: 70%;
  }
}

@media only screen and (max-width: 600px) {
  .image-container {
    position: relative;
    width: 90%;
  }
  .image {
    height: 45%;
  }
}

.middle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color:rgba(0,0,0,0.4);
  border-radius: 8px;
}

.image-container:hover .image {
  opacity: 0.3;
}

.image-container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #04AA6D;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>