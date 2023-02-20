<script lang="ts" setup>
import { Button } from 'wviewui'
</script>

<template>
  <div class="box">
    <div class="btn">
      <Button type="default">默认</Button>
      <Button type="primary">主要</Button>
      <Button type="success">成功</Button>
      <Button type="info">信息</Button>
      <Button type="warning">警告</Button>
      <Button type="danger">危险</Button>
    </div>

    <div class="btn">
      <Button type="default" plain>默认</Button>
      <Button type="primary" plain>主要</Button>
      <Button type="success" plain>成功</Button>
      <Button type="info" plain>信息</Button>
      <Button type="warning" plain>警告</Button>
      <Button type="danger" plain>危险</Button>
    </div>

    <div class="btn">
      <Button type="default" round>默认</Button>
      <Button type="primary" round>主要</Button>
      <Button type="success" round>成功</Button>
      <Button type="info" round>信息</Button>
      <Button type="warning" round>警告</Button>
      <Button type="danger" round>危险</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'styles/index.scss';
</style>
