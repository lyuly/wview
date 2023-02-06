<script lang="ts" setup>
import { wButton } from 'wview'
</script>

<template>
  <div class="box">
    <div class="btn">
      <wButton type="default" disabled>默认</wButton>
      <wButton type="primary" disabled>主要</wButton>
      <wButton type="success" disabled>成功</wButton>
      <wButton type="info" disabled>信息</wButton>
      <wButton type="warning" disabled>警告</wButton>
      <wButton type="danger" disabled>危险</wButton>
    </div>

    <div class="btn">
      <wButton type="default" plain disabled>默认</wButton>
      <wButton type="primary" plain disabled>主要</wButton>
      <wButton type="success" plain disabled>成功</wButton>
      <wButton type="info" plain disabled>信息</wButton>
      <wButton type="warning" plain disabled>警告</wButton>
      <wButton type="danger" plain disabled>危险</wButton>
    </div>

    <div class="btn">
      <wButton type="default" round disabled>默认</wButton>
      <wButton type="primary" round disabled>主要</wButton>
      <wButton type="success" round disabled>成功</wButton>
      <wButton type="info" round disabled>信息</wButton>
      <wButton type="warning" round disabled>警告</wButton>
      <wButton type="danger" round disabled>危险</wButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  box-sizing: border-box;

  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #ffffff;

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
