<script lang="ts">
import { defineComponent } from 'vue'
import { breadcrumbProps } from './types'

export default defineComponent({
  name: 'w-breadcrumb',
  props: breadcrumbProps,
  setup (props) {}
})
</script>

<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/category">Category</router-link>
  </div>
</template>

<style scoped></style>
