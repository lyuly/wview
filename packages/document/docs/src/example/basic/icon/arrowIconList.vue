<template>
  <div class="box">
    <Icon class="icon" name="system_sort_ascending_line" />
    <Icon class="icon" name="system_arrow_right_line" />
  </div>
</template>

<script lang="ts" setup>
import { Icon } from 'wview'
</script>

<style lang="scss" scoped>
.icon {
  width: 1.5em;
  height: 1.5em;
  color: #303133;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
