<script setup lang="ts">
import { Button } from 'wview'
</script>

<template>
  <div class="box">
    <div class="btn">
      <Button icon="jiahao">加号</Button>
      <Button icon="jianhao">减号</Button>
      <Button icon="loading"></Button>
      <Button icon="xiaoxi-zhihui" icon-position="right">小米</Button>
      <Button icon="jurassic_info" icon-position="left">通知</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'styles/index.scss';
</style>
