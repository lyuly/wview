<!-- TabPane -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="wTabPanel">
import {} from 'vue'
type Props = {
  name: string
  tab: string
}
defineProps<Props>()
</script>
<style lang="scss" scoped></style>
