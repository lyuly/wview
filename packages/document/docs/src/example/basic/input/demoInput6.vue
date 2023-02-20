<!-- html -->
<template>
  <Input v-model="myvalue" clearable>
    <template #btn>
      <Button>搜索</Button>
    </template>
  </Input>
</template>

<!-- js -->
<script setup>
import { Input, Button } from 'wviewui'
import { ref } from 'vue'
const myvalue = ref('')
</script>
