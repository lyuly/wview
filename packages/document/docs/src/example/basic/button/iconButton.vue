<script setup lang="ts">
import { Button } from 'wviewui'
</script>

<template>
  <div class="box">
    <div class="btn">
      <Button icon="jiahao" type="primary">加号</Button>
      <Button icon="jianhao" type="success" plain>减号</Button>
      <Button icon="loading" type="warning"></Button>
      <Button icon="xiaoxi-zhihui" icon-position="right" type="danger" round>小米</Button>
      <Button icon="jurassic_info" icon-position="left">通知</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'styles/index.scss';
</style>
