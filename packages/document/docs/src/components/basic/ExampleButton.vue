<script lang="ts" setup>
import { wButton } from 'wview'
</script>

<template>
  <div>
    <wButton type="primary">默 认</wButton>
    <wButton type="success">成 功</wButton>
    <wButton type="info">通 知</wButton>
    <wButton type="warning">警 告</wButton>
    <wButton type="danger">危 险</wButton>
    <wButton type="text">文 本</wButton>
  </div>

  <div>
    <wButton type="primary" size="mini">最小</wButton>
    <wButton type="success" size="small">小</wButton>
    <wButton type="info" size="medium">大</wButton>
  </div>

  <div>
    <wButton type="primary" :plain="true">朴素</wButton>
    <wButton type="primary" :disabled="true">禁用</wButton>
  </div>
</template>
