<!-- html -->
<template>
  <Input v-model="value1" clearable>
    <template #btn>
      <w-button type="primary" leftIcon="m-icon-search">搜索</w-button>
    </template>
  </Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wview'
import { ref } from 'vue'
const value1 = ref('')
</script>
