<!-- html -->
<template>
  <Input v-model="myvalue" clearable @clear="clear" placeholder="可清空"></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wviewui'
import { ref } from 'vue'
const myvalue = ref('')
const clear = () => {
  console.info('清空')
}
</script>
