<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import './style/index.scss'
import { defineComponent, computed } from 'vue'
import { iconProps } from './type'
export default defineComponent({
  name: 'w-icon',
  props: iconProps,
  setup (props) {
    const iconName = computed(() => {
      return `#wview-${props.name}`
    })
    // TODO:颜色和大小
    // const iconColor = computed(() => {
    //   return `${props.color}`
    // })
    // const iconSize = computed(() => {
    //   return `${props.size}`
    // })
    return {
      iconName
      // iconColor,
      // iconSize
    }
  }
})
</script>
