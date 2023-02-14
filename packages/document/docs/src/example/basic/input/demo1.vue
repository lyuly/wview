<!-- html -->
<template>
  <Input v-model="value1" placeholder="请输入"></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wview'
import { ref } from 'vue'
const value1 = ref('')
</script>
