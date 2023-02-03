<script setup lang="ts">
import Button from './components/button'
import IconSystem from './components/icons'
</script>

<template>
  <div>这里是wview组件库</div>
  <Button class="btn"></Button>
  <div>Iconfont</div>
  <!-- <IconSystem name="jiahao" dot /> -->
  <!-- <IconSystem name="jiahao1" dot badge="1" /> -->
  <IconSystem name="jianhao" />
  <IconSystem name="system" />
  <IconSystem name="system_complete_fill" />
  <IconSystem name="system_expired_fill" />
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
