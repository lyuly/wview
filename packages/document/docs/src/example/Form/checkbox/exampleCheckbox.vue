<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from 'wviewui'

const checked1 = ref(false)
const checked2 = ref(true)
const checked3 = ref(true)
</script>

<template>
  <div>
    <Checkbox v-model="checked1" label="🍎" />
    <Checkbox v-model="checked2" label="🍐" />
    <Checkbox v-model="checked3" label="🍊" disabled />
  </div>
</template>

<style scoped></style>
