<script lang="ts">
import '@/styles/components/alert.scss'
import { computed, defineComponent, ref, useSlots } from 'vue'
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

    const isShow = ref(true)

    const close = () => {
      isShow.value = false
    }

    return {
      styleClass,
      isShow,
      close,
      slots
    }
  }
})
</script>

<template>
  <div class="w-alert" :class="styleClass" role="alert" v-if="isShow">
    <span v-if="slots.default"><slot /></span>
    <button @click="close" class="w-alert--btn">
      <svg
        style="width: 1.25rem; height: 1.25rem"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
