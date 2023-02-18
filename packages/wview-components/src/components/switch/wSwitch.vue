<template>
  <div class="w-switch">
    <div class="switch-core">
      <div class="switch-button"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { switchProps } from './type'
import { defineComponent, ref } from 'vue'
import '@/styles/components/switch.scss'

export default defineComponent({
  name: 'w-switch',
  props: switchProps,
  setup (props) {
    const active = ref(true)
    return { active }
  }
})
</script>

<style lang="scss" scoped></style>
