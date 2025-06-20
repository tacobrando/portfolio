<template>
  <div
    id="landing-page"
    :class="[
      'landing-page',
      'grid',
      'grid-rows-3',
      'grid-cols-3',
      'text-2xl',
      'animate__animated',
      isLeaving ? `animate__${animationDirection}` : enterAnimation,
    ]"
  >
    <div v-for="count in 3" :key="count"></div>

    <div
      class="flex justify-center items-center cursor-pointer animate__animated animate__fadeInLeft animate__delay-0.3s"
      @click="navigateTo('about')"
    >
      <ArrowIcon rotation="rotate-180" title="About" />
    </div>

    <ul
      class="font-light text-center flex flex-col items-center justify-center"
    >
      <li>
        <h1 class="animate__animated animate__fadeInDown animate__delay-0.2s">
          Hello!
        </h1>
      </li>
      <li>
        <h1 class="animate__animated animate__fadeInDown animate__delay-0.4s">
          My name is Matthew Yiew-Tung Lee
        </h1>
      </li>
      <li>
        <h1 class="animate__animated animate__fadeInDown animate__delay-0.6s">
          Software Engineer
        </h1>
      </li>
    </ul>

    <div
      class="flex justify-center items-center cursor-pointer animate__animated animate__fadeInRight animate__delay-0.5s"
      @click="navigateTo('portfolio')"
    >
      <ArrowIcon title="Portfolio" />
    </div>

    <div></div>

    <div
      class="flex justify-center items-center cursor-pointer animate__animated animate__fadeInUp animate__delay-0.7s"
      @click="navigateTo('contact')"
    >
      <ArrowIcon rotation="rotate-90" title="Contact" />
    </div>

    <div></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import ArrowIcon from "@/components/Arrow.vue";

const router = useRouter();
const route = useRoute();

const isLeaving = ref(false);
const animationDirection = ref("");
const enterAnimation = ref("");

onMounted(() => {
  const from = route.query.from;
  if (from === "about") {
    enterAnimation.value = "animate__slideInRight";
  } else if (from === "portfolio") {
    enterAnimation.value = "animate__slideInLeft";
  } else if (from === "contact") {
    enterAnimation.value = "animate__slideInUp";
  } else {
    enterAnimation.value = "animate__fadeIn";
  }
});

function navigateTo(slug: string) {
  if (slug === "about") animationDirection.value = "slideOutRight";
  if (slug === "portfolio") animationDirection.value = "slideOutLeft";
  if (slug === "contact") animationDirection.value = "slideOutUp";

  isLeaving.value = true;

  setTimeout(() => {
    router.push({ path: `/${slug}`, query: { from: "landing" } });
  }, 600);
}
</script>
