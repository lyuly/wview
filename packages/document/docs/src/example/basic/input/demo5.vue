<!-- html -->
<template>
    <Input v-model="value1"  placeholder="默认大小"></Input>
    <br/>
    <Input v-model="value2"  placeholder="小的" size="small"></Input>
    <br/>
    <Input v-model="value3"  placeholder="更小的" size="mini"></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wview'
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>
