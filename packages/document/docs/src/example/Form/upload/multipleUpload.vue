<template>
  <div class="box">
    <Upload :multiple="true">
      <Button type="primary" size="large">文件上传</Button>
    </Upload>
  </div>
</template>

<script lang="ts" setup>
import { Upload } from 'wview'
</script>

<style lang="less" scoped></style>
