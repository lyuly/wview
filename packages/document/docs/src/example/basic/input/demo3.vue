<!-- html -->
<template>
  <Input v-model="value1" clearable @clear="clear" placeholder="可清空"></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wview'
import { ref } from 'vue'
const value1 = ref('')
const clear = () => {
  console.info('清空')
}
</script>
