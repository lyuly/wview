<template>
  <div>
    <Button type="primary" @click="state.isShow = true">自定义</Button>
    <Modal v-model:show="state.isShow" title="请输入您的账号密码">
      账号：<Input v-model="myvalue" placeholder="请输入"></Input> <br />
      密码：<Input v-model="password" type="password" showPassword placeholder="请输入密码"></Input>

      <template #footer>
        <Button type="primary" @click="state.isShow = false">确认</Button>
        <Button type="default" @click="state.isShow = false">取消</Button>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { Button, Modal, Input } from 'wviewui'
import { reactive, ref } from 'vue'
const state = reactive({
  isShow: false
})
const myvalue = ref('')
const password = ref('')
</script>

<style land="scss" scoped>
input {
  border: 1px solid rgb(73, 70, 70);
}
</style>
