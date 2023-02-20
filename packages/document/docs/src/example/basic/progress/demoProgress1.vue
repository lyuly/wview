<template>
  <h3>loading</h3>
  <Progress type="loading" />
  <h3>error</h3>
  <Progress type="error" />
  <h3>step</h3>
  <Progress type="step" />
</template>

<script lang="ts" setup>
import { Progress } from 'wviewui'
</script>
