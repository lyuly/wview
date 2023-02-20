<template>
  <Progress type="loading" :val="state.val" :show-text="true" />
  <Progress type="error" :val="state.val" :show-text="true" />
  <Progress type="step" :val="state.val" :show-text="true" />
</template>

<script lang="ts" setup>
import { Progress } from 'wviewui'
import { reactive } from 'vue'
const state = reactive({
  val: 0
})
setInterval(() => {
  if (state.val < 100) state.val += 10
}, 2000)
</script>

<style lang="scss" scoped></style>
