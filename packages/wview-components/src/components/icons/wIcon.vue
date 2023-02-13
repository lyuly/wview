<template>
  <div class="wview-icon">
    <svg class="icon" aria-hidden="true" :style="iconColor">
      <use :xlink:href="iconName"></use>
    </svg>
    <div v-if="dot" class="wview-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>

<script lang="ts">
import './style/index.scss'
import { defineComponent, computed, onMounted } from 'vue'
import { iconProps } from './type'
export default defineComponent({
  name: 'w-icon',
  props: iconProps,
  setup (props) {
    onMounted(() => {
      import('./font/iconfont.js' as any)
      import('./font/iconfont_arrow.js' as any)
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
    // TODO:颜色和大小
    // const iconColor = computed(() => {
    //   return `${props.color}`
    // })
    // const iconSize = computed(() => {
    //   return `${props.size}`
    // })
    return {
      iconName,
      styleDot,
      badge,
      iconColor
      // iconColor,
      // iconSize
    }
  }
})
</script>
