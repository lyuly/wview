<script lang="ts" setup>
import { wButton } from 'wview'
</script>

<template>
  <div class="box">
    <div class="btn">
      <wButton type="default">默认</wButton>
      <wButton type="primary">主要</wButton>
      <wButton type="success">成功</wButton>
      <wButton type="info">信息</wButton>
      <wButton type="warning">警告</wButton>
      <wButton type="danger">危险</wButton>
    </div>

    <div class="btn">
      <wButton type="default" plain>默认</wButton>
      <wButton type="primary" plain>主要</wButton>
      <wButton type="success" plain>成功</wButton>
      <wButton type="info" plain>信息</wButton>
      <wButton type="warning" plain>警告</wButton>
      <wButton type="danger" plain>危险</wButton>
    </div>

    <div class="btn">
      <wButton type="default" round>默认</wButton>
      <wButton type="primary" round>主要</wButton>
      <wButton type="success" round>成功</wButton>
      <wButton type="info" round>信息</wButton>
      <wButton type="warning" round>警告</wButton>
      <wButton type="danger" round>危险</wButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  box-sizing: border-box;
  position: relative;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background-color: var(--vp-c-bg-mute);

  .btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 6px 16px;
    gap: 4px;
  }
}
</style>
