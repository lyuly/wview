<template>
  <div class="wview-icon icon icon-loading" v-if="loading">
    <svg class="icon" aria-hidden="true" :style="iconColor">
      <use :xlink:href="iconName"></use>
    </svg>
    <div v-if="dot" class="wview-info" :class="styleDot">{{ badge }}</div>
  </div>
  <div class="wview-icon icon" v-if="!loading">
    <svg class="icon" aria-hidden="true" :style="iconColor">
      <use :xlink:href="iconName"></use>
    </svg>
    <div v-if="dot" class="wview-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>

<script lang="ts">
import '@/styles/components/icon.scss'
import { defineComponent, computed, onMounted } from 'vue'
import { iconProps } from './type'

export default defineComponent({
  name: 'w-icon',
  props: iconProps,
  setup (props) {
    onMounted(() => {
      import('./font/arrow.js' as any)
      import('./font/system.js' as any)
      import('./font/edit.js' as any)
      import('./font/media.js' as any)
      import('./font/traffic.js' as any)
      import('./font/weather.js' as any)
      import('./font/other.js' as any)
      import('./font/food.js' as any)
      import('./font/goods.js' as any)
    })
    const iconName = computed(() => {
      return `#wview-${props.name}`
    })
    const styleDot = computed(() => {
      return {
        'wview-dot': props.dot && !props.badge
      }
    })
    const badge = computed(() => {
      return props.badge
    })
    const iconColor = computed(() => {
      return {
        color: props.color
      }
    })
    const iconSize = computed(() => {
      return `${props.size}`
    })
    return {
      iconName,
      styleDot,
      badge,
      iconColor,
      iconSize
    }
  }
})
</script>
