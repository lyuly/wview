<template>
  <div>
    <Button type="primary" @click="state.isShow = true">打开模态框</Button>
    <Modal v-model:show="state.isShow" title="模态框标题">
      内容区域
      <template #footer>
        <Button type="primary" @click="state.isShow = false">确认</Button>
        <Button type="default" @click="state.isShow = false">取消</Button>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { Button, Modal } from 'wviewui'
import { reactive } from 'vue'
const state = reactive({
  isShow: false
})
</script>

<style scoped></style>
