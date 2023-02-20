<!-- html -->
<template>
  <Input
    v-model="myvalue"
    type="text"
    placeholder="自定义你喜欢的选中颜色"
    focusColor="orange"
  ></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wviewui'
import { ref } from 'vue'
const myvalue = ref('')
</script>
