<!-- TabPanel -->
<template>
  <div class="w-panel">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="WTabPane">
import '@/styles/components/tab/tab-panel.scss'
import {} from 'vue'

type Props = {
  name: string
  tab: string
}
defineProps<Props>()
</script>
