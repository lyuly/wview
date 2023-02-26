<script setup lang="ts">
import { Alert } from 'wviewui'
</script>

<template>
  <Alert>默认警告</Alert>
  <Alert type="success">成功警告</Alert>
  <Alert type="warning" size="mini">严重警告</Alert>
  <Alert type="info" size="small">通知警告</Alert>
  <Alert type="danger" size="large">危险警告</Alert>
</template>

<style scoped></style>
