<script lang="ts">
import '@/styles/components/alert.scss'
import { computed, defineComponent, useSlots } from 'vue'
import { alertProps } from './types'

export default defineComponent({
  name: 'w-alert',
  props: alertProps,
  setup (props) {
    const styleClass = computed(() => {
      return {
        [`w-alert--${props.type}`]: props.type,
        [`w-alert--${props.size}`]: props.size
      }
    })

    const slots = useSlots()

    return {
      styleClass,
      slots
    }
  }
})
</script>

<template>
  <div class="w-alert" :class="styleClass" role="alert">
    <span v-if="slots.default">
      <slot />
    </span>
  </div>
</template>

<style scoped></style>
