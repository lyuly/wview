<script lang="ts" setup>
import { WButton } from 'wview-components'
</script>

<template>
  <div>
    <WButton type="primary">默 认</WButton>
    <WButton type="success">成 功</WButton>
    <WButton type="info">通 知</WButton>
    <WButton type="warning">警 告</WButton>
    <WButton type="danger">危 险</WButton>
    <WButton type="text">文 本</WButton>
  </div>

  <div>
    <WButton type="primary" size="mini">最小</WButton>
    <WButton type="success" size="small">小</WButton>
    <WButton type="info" size="medium">大</WButton>
  </div>

  <div>
    <WButton type="primary" :plain="true">朴素</WButton>
    <WButton type="primary" :disabled="true">禁用</WButton>
  </div>
</template>
