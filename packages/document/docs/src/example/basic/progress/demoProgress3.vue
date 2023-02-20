<template>
  <Progress type="step" :val="0" :show-text="true" />
  <Progress type="step" :val="5" :show-text="true" />
  <Progress type="step" :val="20" :show-text="true" />
  <Progress type="step" :val="50" :show-text="true" />
  <Progress type="step" :val="80" :show-text="true" />
  <Progress type="step" :val="100" :show-text="true" />
</template>

<script lang="ts" setup>
import { Progress } from 'wviewui'
</script>
