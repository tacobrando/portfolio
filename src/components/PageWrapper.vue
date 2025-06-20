<template>
  <div
    :id="id"
    :class="[
      'animate__animated',
      enterAnimation,
      isLeaving ? leaveAnimation : '',
      customClasses
    ]"
    @animationend="handleAnimationEnd"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  id: string
  enterAnimation?: string
  leaveAnimation?: string
  customClasses?: string
}>()

const emit = defineEmits(['leave-finish'])

const isLeaving = ref(false)

function triggerLeave() {
  isLeaving.value = true
}

function handleAnimationEnd() {
  if (isLeaving.value) {
    emit('leave-finish')
  }
}

defineExpose({ triggerLeave })
</script>
