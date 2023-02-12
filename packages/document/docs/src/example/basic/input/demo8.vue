<!-- html -->
<template>
  <Input v-model="value1" type="text" placeholder="自定义你喜欢的选中颜色" focusColor="orange"></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wview'
import { ref } from 'vue'
const value1 = ref('')
</script>
