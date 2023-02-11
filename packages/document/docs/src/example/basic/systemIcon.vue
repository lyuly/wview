<template>
  <div class="box">
    <wIcon class="icon" name="system" />
    <wIcon class="icon" name="system_role" />
  </div>
</template>

<script lang="ts" setup>
import { wIcon } from 'wview'
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
