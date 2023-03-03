<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from 'wviewui'

const fruit = ref([
  { label: '🍎', checked: false },
  { label: '🍋', checked: false },
  { label: '🍇', checked: false }
])
</script>

<template>
  <div>
    <Checkbox v-for="(item, index) in fruit" :key="index" :label="item.label" />
  </div>
</template>

<style scoped></style>
