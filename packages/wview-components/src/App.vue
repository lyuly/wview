<script setup lang="ts">
import Button from './components/button'
</script>

<template>
  <div>这里是wview组件库</div>
  <Button class="btn"></Button>
</template>

<style lang="scss">
.btn {
  background: $danger;
  color: $white-6;
  text-align: center;
  border: none;
  padding: 0.5em 1em;
  display: inline-block;
  font-size: 16px;
  border-radius: 6px;
}
</style>
