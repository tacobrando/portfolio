<script setup lang="ts">
import { useRouter } from 'vue-router';
import Arrow from '../components/Navigation/Arrows/Arrow.vue'
import { inject, onMounted, ref, watchEffect, Ref } from 'vue';

const router = useRouter()
function navigateTo(slug: string) {
  router.push(`/${slug}`)
}

const isRouteChange = ref(false);
const firstLoad = inject<Ref<boolean>>('firstLoad');

onMounted(() => {
  if(firstLoad) {
    if (firstLoad.value) {
    setTimeout(() => {
      firstLoad.value = false;
    }, 4000);
  }
  }
});

watchEffect(() => {
  const currentRoute = router.currentRoute.value;
  if (currentRoute.path === '/') {
    isRouteChange.value = true;
    setTimeout(() => {
      isRouteChange.value = false;
    }, 1000);
  }
});
</script>


<template>
  <div
    id="landing-page" 
    :class="[
      'animate__animated',
      isRouteChange ? 'fade-in' : '',
      'landing-page',
      'grid',
      'grid-rows-3',
      'grid-cols-3',
      'text-2xl'
    ]
    "
  >
    <div v-for="count in 3" :key="count"></div>
    <Arrow @route-handler="navigateTo($event)" direction="rotate-180" title="About" slug="about" :load="firstLoad" />
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
        <h1 :class="firstLoad ? 'fade-in' : ''">Hello!</h1>
      </li>
      <li>
        <h1 :class="firstLoad ? 'fade-in' : ''">My name is Matthew Yiew-Tung Lee</h1>
      </li>
      <li>
        <h1 :class="firstLoad ? 'fade-in' : ''">Software Engineer</h1>
      </li>
    </ul>
    <Arrow @route-handler="navigateTo($event)" title="Portfolio" slug="portfolio" :load="firstLoad" />
    <div></div>
    <Arrow @route-handler="navigateTo($event)" direction="rotate-90" title="Contact" slug="contact" :load="firstLoad" />
    <div></div>
  </div>
</template>

