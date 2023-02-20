<!-- html -->
<template>
  <Input v-model="myvalue" disabled placeholder="禁用状态"></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wviewui'
import { ref } from 'vue'
const myvalue = ref('')
</script>
