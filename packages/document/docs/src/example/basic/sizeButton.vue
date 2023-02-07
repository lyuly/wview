<script lang="ts" setup>
import { wButton } from 'wview'
</script>

<template>
  <div class="box">
    <div class="btn">
      <wButton type="default" size="large">默认</wButton>
      <wButton type="primary" size="large">主要</wButton>
      <wButton type="success" size="large">成功</wButton>
      <wButton type="info" size="large">信息</wButton>
      <wButton type="warning" size="large">警告</wButton>
      <wButton type="danger" size="large">危险</wButton>
    </div>

    <div class="btn">
      <wButton type="default" plain size="small">默认</wButton>
      <wButton type="primary" plain size="small">主要</wButton>
      <wButton type="success" plain size="small">成功</wButton>
      <wButton type="info" plain size="small">信息</wButton>
      <wButton type="warning" plain size="small">警告</wButton>
      <wButton type="danger" plain size="small">危险</wButton>
    </div>

    <div class="btn">
      <wButton type="default" round size="mini">默认</wButton>
      <wButton type="primary" round size="mini">主要</wButton>
      <wButton type="success" round size="mini">成功</wButton>
      <wButton type="info" round size="mini">信息</wButton>
      <wButton type="warning" round size="mini">警告</wButton>
      <wButton type="danger" round size="mini">危险</wButton>
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
