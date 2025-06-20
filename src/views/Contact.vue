<template>
  <div
    class="social animate__animated animate__slideInUp overflow-auto min-h-screen relative"
    id="social"
  >
    <!-- Back Button (top center) -->
    <div
      class="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center"
    >
      <svg
        id="back-btn"
        @click="navigateBack"
        class="-rotate-90 w-12 cursor-pointer transform hover:text-gray-500 transition delay-75 duration-200 ease-in-out"
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
        />
      </svg>
      <p class="hide">Back</p>
    </div>

    <!-- Centered Card Container -->
    <div class="flex items-center justify-center min-h-screen px-4">
      <div
        class="w-full max-w-3xl bg-neutral-900 text-gray-200 flex flex-col items-center gap-6 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-[1.02] animate__animated animate__fadeInUp"
      >
        <!-- Title -->
        <h3 class="text-3xl font-bold text-center">Contact & Socials</h3>

        <!-- Icons -->
        <div class="flex justify-center text-4xl gap-6">
          <a
            href="https://www.linkedin.com/in/matthew-lee-b9583b199/"
            target="_blank"
            class="hover:text-gray-500 transform hover:-translate-y-2 transition duration-200 ease-in-out"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/tacobrando"
            target="_blank"
            class="hover:text-gray-500 transform hover:-translate-y-2 transition duration-200 ease-in-out"
          >
            <i class="bi bi-github"></i>
          </a>
          <a
            href="mailto:matthewytlee2@gmail.com"
            class="hover:text-gray-500 transform hover:-translate-y-2 transition duration-200 ease-in-out"
          >
            <i class="bi bi-envelope"></i>
          </a>
        </div>

        <!-- Resume Download -->
        <div class="text-center">
          <h4 class="text-xl mb-2">Resume / CV</h4>
          <a
            :href="resume"
            class="inline-block bg-red-500 text-white px-4 py-2 rounded-md hover:opacity-80 transition"
          >
            <i class="bi bi-cloud-download"></i> Download
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import resume from "@/assets/cv/Matthew Lee Junior Software Engineer.pdf";

const router = useRouter();

function navigateBack() {
  const social = document.getElementById("social");
  if (social) {
    social.classList.remove("animate__slideInUp");
    social.classList.add("animate__slideOutDown");
    social.style.overflow = "hidden";
    setTimeout(() => {
      router.push({ path: "/", query: { from: "contact" } });
    }, 600);
  }
}
</script>
