<script lang="ts" setup>
import { Button } from 'wviewui'
</script>

<template>
  <div class="box">
    <div class="btn">
      <Button type="default" size="large">默认</Button>
      <Button type="primary" size="large">主要</Button>
      <Button type="success" size="large">成功</Button>
      <Button type="info" size="large">信息</Button>
      <Button type="warning" size="large">警告</Button>
      <Button type="danger" size="large">危险</Button>
    </div>

    <div class="btn">
      <Button type="default" plain size="small">默认</Button>
      <Button type="primary" plain size="small">主要</Button>
      <Button type="success" plain size="small">成功</Button>
      <Button type="info" plain size="small">信息</Button>
      <Button type="warning" plain size="small">警告</Button>
      <Button type="danger" plain size="small">危险</Button>
    </div>

    <div class="btn">
      <Button type="default" round size="mini">默认</Button>
      <Button type="primary" round size="mini">主要</Button>
      <Button type="success" round size="mini">成功</Button>
      <Button type="info" round size="mini">信息</Button>
      <Button type="warning" round size="mini">警告</Button>
      <Button type="danger" round size="mini">危险</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'styles/index.scss';
</style>
