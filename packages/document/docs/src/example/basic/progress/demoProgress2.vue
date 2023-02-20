<template>
  <Progress type="step" :val="0" />
  <Progress type="step" :val="20" />
  <Progress type="step" :val="40" />
  <Progress type="step" :val="60" />
  <Progress type="step" :val="80" />
  <Progress type="step" :val="100" />
</template>

<script lang="ts" setup>
import { Progress } from 'wviewui'
</script>
