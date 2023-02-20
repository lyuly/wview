<!-- html -->
<template>
  <Input v-model="myvalue" leftIcon="jiahao"></Input>
  <br />
  <Input v-model="value2" rightIcon="cuowu"></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wviewui'
import { ref } from 'vue'
const myvalue = ref('')
const value2 = ref('')
</script>
