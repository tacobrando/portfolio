<script setup>
import Arrow from '../components/Navigation/Arrows/Arrow.vue'
import router from '../router';

function navigateTo(slug) {
  router.push(`/${slug}`)
}
</script>

<template>
  <div
    id="landing-page" 
    class="
      animate__animated
      landing-page 
      grid 
      grid-cols-3
      text-2xl
    "
  >
    <Arrow @route-handler="navigateTo($event)" direction="left" title="About" slug="about" />
    <ul class="
      font-light 
      text-center 
      flex 
      flex-col 
      items-center 
      justify-center
    "
    >
      <li>
        <h1 class="fade-in">Hello!</h1>
      </li>
      <li>
        <h1 class="fade-in">My name is Matthew Yiew-Tung Lee</h1>
      </li>
      <li>
        <h1 class="fade-in">Software Engineer</h1>
      </li>
    </ul>
    <Arrow @route-handler="navigateTo($event)" direction="right" title="Portfolio" slug="portfolio" />
  </div>
</template>

