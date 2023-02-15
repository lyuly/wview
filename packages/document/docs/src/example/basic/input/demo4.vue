<!-- html -->
<template>
    <Input v-model="value1" leftIcon="jiahao"></Input>
    <br/>
    <Input v-model="value2" rightIcon="jiahao"></Input>
</template>

<!-- js -->
<script setup>
import { Input } from 'wview'
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
</script>
