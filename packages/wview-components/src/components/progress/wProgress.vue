<template>
  <div :class="['w-progress', { mr: showText }]">
    <div class="container" :style="{ width }">
      <div :class="type" :style="{ width: `${val}%` }"></div>
    </div>

    <span v-if="showText" class="text" :style="{ left: `${val}%` }">
      {{ `${val}%` }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import '@/styles/components/progress.scss'
export interface Props {
  type?: 'loading' | 'step' | 'error'
  width?: string
  val?: number
  showText?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'loading',
  width: '100%',
  val: 50,
  showText: false
})
</script>

<style scoped lang="scss"></style>
