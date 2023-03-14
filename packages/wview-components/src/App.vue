<script setup lang="ts">
import wBreadcrumb from './components/breadcrumb'
import { reactive } from 'vue'

const options = reactive([
  {
    label: 'Home',
    to: '/',
    active: true
  },
  {
    label: 'Category',
    to: '/category',
    active: false
  },
  {
    label: 'food',
    to: 'https://www.google.com',
    active: false
  }
])
</script>

<template>
  <div>
    <wBreadcrumb :options="options" />
  </div>
</template>

<style scoped></style>
