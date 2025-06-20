<template>
  <div
    id="about"
    class="about animate__animated animate__slideInLeft text-center overflow-auto px-4 py-6"
  >
    <div class="pointer next-btn flex flex-row-reverse w-full items-center p-2">
      <svg
        id="back-btn"
        @click="navigateBack"
        class="w-12 cursor-pointer transform hover:text-gray-500 transition delay-75 duration-200 ease-in-out"
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
        ></path>
      </svg>
      <p class="hide">Back</p>
    </div>

    <h3
      class="text-3xl font-bold text-center mb-8 animate__animated animate__fadeInDown"
    >
      About Me
    </h3>

    <div
      class="about-card bg-neutral-900 text-gray-200 max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-[1.02] animate__animated animate__fadeInUp"
    >
      <div class="flex-shrink-0 w-full lg:w-1/3 flex justify-center">
        <img
          src="../assets/images/profile.webp"
          alt="profile"
          class="rounded-lg object-cover h-80 w-full max-w-xs animate__animated animate__zoomIn"
        />
      </div>

      <div
        class="w-full lg:w-2/3 flex flex-col justify-between gap-4 text-left"
      >
        <p>
          My name is <strong>Matthew Yiew-Tung Lee</strong>, and I am a recent
          graduate from Oxford Brookes University with a Bachelor of Science in
          Anthropology. I also completed an Integrated Foundation Degree from
          Goldsmiths, University of London, and an International Baccalaureate
          (IB) Diploma from Renaissance College in Hong Kong.
        </p>
        <p>
          As for my skills, I have experience in web development, full-stack
          development, and programming languages such as JavaScript, Python, and
          HTML/CSS. I've also completed the CS50 Introduction to Computer
          Science course through HarvardX, earning a certificate in December
          2022. My technical skills include Vue.js, React.js, Git, HTML5 & CSS,
          Tailwind, Bootstrap, Django, Flask, and Adonis.
        </p>
        <p>
          In addition, I've had the opportunity to travel to different places,
          including Hong Kong, London, and Canada. I’m currently looking forward
          to new opportunities where I can continue growing as a developer and
          contributing to impactful projects.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function navigateBack() {
  const page = document.getElementById("about");
  if (page) {
    page.classList.remove("animate__slideInLeft");
    page.classList.add("animate__slideOutLeft");
    page.style.overflow = "hidden";
    setTimeout(() => {
      router.push({ path: "/", query: { from: "about" } });
    }, 600);
  }
}
</script>

<style scoped lang="scss">
@media (max-width: 1024px) {
  .about-card {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 75%;
      height: auto;
    }
  }
}
</style>
