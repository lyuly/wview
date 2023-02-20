<script lang="ts" setup>
import { Button } from 'wviewui'
</script>

<template>
  <div class="box">
    <div class="btn">
      <Button type="default" disabled>默认</Button>
      <Button type="primary" disabled>主要</Button>
      <Button type="success" disabled>成功</Button>
      <Button type="info" disabled>信息</Button>
      <Button type="warning" disabled>警告</Button>
      <Button type="danger" disabled>危险</Button>
    </div>

    <div class="btn">
      <Button type="default" plain disabled>默认</Button>
      <Button type="primary" plain disabled>主要</Button>
      <Button type="success" plain disabled>成功</Button>
      <Button type="info" plain disabled>信息</Button>
      <Button type="warning" plain disabled>警告</Button>
      <Button type="danger" plain disabled>危险</Button>
    </div>

    <div class="btn">
      <Button type="default" round disabled>默认</Button>
      <Button type="primary" round disabled>主要</Button>
      <Button type="success" round disabled>成功</Button>
      <Button type="info" round disabled>信息</Button>
      <Button type="warning" round disabled>警告</Button>
      <Button type="danger" round disabled>危险</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'styles/index.scss';
</style>
