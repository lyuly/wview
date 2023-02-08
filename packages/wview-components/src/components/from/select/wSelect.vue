<template>
  <div></div>
</template>

<script lang="ts">
import '@/styles/components/button.scss'
import { defineComponent } from 'vue'
import { selectProps } from './types'

export default defineComponent({
  name: 'w-Select',
  props: selectProps
})
</script>
