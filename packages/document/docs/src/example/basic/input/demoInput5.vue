<!-- html -->
<template>
  <Input v-model="myvalue" placeholder="默认大小"></Input>
  <br />
  <Input v-model="value2" placeholder="小的" size="small"></Input>
  <br />
  <Input v-model="value3" placeholder="更小的" size="mini"></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wviewui'
import { ref } from 'vue'
const myvalue = ref('')
const value2 = ref('')
const value3 = ref('')
</script>
