<!-- html -->
<template>
  <Input v-model="myvalue" clearable>
    <template #btn>
      <w-button>搜索</w-button>
    </template>
  </Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wview'
import { ref } from 'vue'
const myvalue = ref('')
</script>
