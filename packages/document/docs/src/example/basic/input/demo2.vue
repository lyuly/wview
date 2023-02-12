<!-- html -->
<template>
  <Input v-model="value1" disabled placeholder="禁用状态"></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wview'
import { ref } from 'vue'
const value1 = ref('')
</script>
