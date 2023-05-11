<script setup>
import { useRouter } from 'vue-router';
import Arrow from '../components/Navigation/Arrows/Arrow.vue'

const router = useRouter()

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
      grid-rows-3
      grid-cols-3
      text-2xl
    "
  >
    <div></div>
    <div>
      <!-- <Arrow @route-handler="navigateTo($event)" direction="-rotate-90" title="About" slug="about" /> -->
    </div>
    <div></div>
    <Arrow @route-handler="navigateTo($event)" direction="rotate-180" title="About" slug="about" />
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
    <Arrow @route-handler="navigateTo($event)" title="Portfolio" slug="portfolio" />
    <div></div>
    <Arrow @route-handler="navigateTo($event)" direction="rotate-90" title="Contact" slug="contact" />
    <div></div>
  </div>
</template>

