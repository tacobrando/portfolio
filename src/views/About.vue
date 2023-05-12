<template>
  <div class="about animate__animated text-center overflow-auto" id="about">
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
    <p class="hide">Back</p>
    </div>
    <span class="w-full text-center text-3xl pb-2 fade-in">
      <h3 class="text-3xl fade-in p-2">About Me</h3>
    </span>
    <div class="about-container flex flex-col items-center justify-center h-5/6 m-5 text-start">
      <span class="profile-image
        about-card 
        m-5
        text-black 
        flex
        flex-row
        justify-start
        rounded
        fade-in
      ">
          <img src="../assets/images/profile.png" alt="profile" 
          class="rounded h-80 lg:hover:shadow-2xl
          lg:hover:-translate-y-3 transition ease-in-out duration-200 delay-75 transform"
          >
          <span class="bg-white lg:ml-5 rounded p-5 lg:hover:shadow-2xl flex flex-col justify-between
          lg:hover:-translate-y-3 transition ease-in-out duration-200 delay-75 transform">
            <p class="mb-3">
              My name is Matthew Yiew-Tung Lee, and I am a recent graduate from Oxford Brookes University with a Bachelor of Science in Anthropology. I also completed an Integrated Foundation Degree from Goldsmiths, University of London, and an International Baccalaureate (IB) Diploma from Renaissance College in Hong Kong.
            </p>
            <p class="mb-3">
              As for my skills, I have experience in web development, full-stack development, and programming languages such as JavaScript, Python, and HTML/CSS. I've also completed the CS50 Introduction to Computer Science course through HarvardX, earning a certificate in December 2022. My technical skills include Vue.js, React.js, Git, HTML5 & CSS, Tailwind, Bootstrap, Django, Flask, and Adonis.
            </p>
            <p class="mb-5"> 
              In addition, I've had the opportunity to travel to different places, including Hong Kong, London, and Canada, where I currently reside. Overall, I am seeking an opportunity as a Junior Software Engineer or Web Developer to apply my technical knowledge and grow as an experienced software engineer.
            </p>
          </span>
        </span>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function navigateBack() {
  const about = document.getElementById("about")
  about.classList.add("animate__fadeOutLeftBig")
  about.style.overflow = 'hidden'
  setTimeout(() => {
    router.push("/")
  }, 600)
}
</script>
<style scoped lang="scss">
@media only screen and (max-width: 1000px) {
  .about-container {
    height: auto;
  }
  .about-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      height: 50%;
      width: 50%;
      margin-bottom: 20px;
    }
  }
}
</style>