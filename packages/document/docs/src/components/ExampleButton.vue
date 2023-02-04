<script setup lang="ts">
import { Button } from 'wview-components'
</script>

<template>
  <div>
    <Button type="primary">默 认</Button>
    <Button type="success">成 功</Button>
    <Button type="info">通 知</Button>
    <Button type="warning">警 告</Button>
    <Button type="danger">危 险</Button>
    <Button type="text">文 本</Button>
  </div>

  <div>
    <Button type="primary" size="mini">最小</Button>
    <Button type="success" size="small">小</Button>
    <Button type="info" size="medium">大</Button>
  </div>

  <div>
    <Button type="primary" :plain="true">朴素</Button>
    <Button type="primary" :disabled="true">禁用</Button>
  </div>
</template>
