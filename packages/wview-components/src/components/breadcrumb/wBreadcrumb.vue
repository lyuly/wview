<script lang="ts">
import { defineComponent } from 'vue'
import { breadcrumbProps } from './types'

export default defineComponent({
  name: 'w-breadcrumb',
  props: breadcrumbProps,
  setup (props) {
    return props.options
  }
})
</script>

<template>
  <nav aria-label="breadcrumb" style="width: 100%; border-radius: 0.375rem">
    <ol class="breadcrumb" style="display: flex; list-style: none; margin: 0; padding: 0">
      <li class="breadcrumb-item" v-for="(crumb, index) in options" :key="index">
        <a v-if="crumb.to" :href="crumb.to">{{ crumb.label }}</a>
        <span v-else>{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped></style>
