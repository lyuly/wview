<!-- html -->
<template>
  <Input v-model="password" type="password" showPassword placeholder="请输入密码"></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wviewui'
import { ref } from 'vue'
const password = ref('')
</script>
