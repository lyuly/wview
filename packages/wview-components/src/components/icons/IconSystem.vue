<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
  <div v-if="dot" class="wview-info" :class="styleDot">{{ badge }}</div>
</template>

<script lang="ts">
import './font/iconfont-system.js'
import './style/index.scss'
import { defineComponent, computed } from 'vue'
import { iconProps } from './types/type'

export default defineComponent({
  props: iconProps,
  setup (props) {
    const iconName = computed(() => {
      return `#system-${props.name}`
    })
    // const styleDot = computed(() => {
    //   return {
    //     [`wview-dot`]: props.dot && !props.badge
    //   }
    // })

    // const badge = computed(() => {
    //   return props.badge
    // })

    return {
      iconName
      // styleDot,
      // badge
    }
  }
})
</script>
