<template>
  <div class="w-select">
    <wInput leftIcon="search" placeholder="请选择" readonly></wInput>
    <wIcon name="system_arrow_down_line" class="arrow" />
  </div>
</template>

<script>
import wInput from '../../input'
import wIcon from '../../icons'
import { defineComponent } from 'vue'
import { selectProps } from './types'
export default defineComponent({
  name: 'w-select',
  props: selectProps,
  components: { wInput, wIcon }
})
</script>

<script setup></script>
<style lang="scss" scoped>
.w-select {
  position: relative;

  wInput {
    user-select: none;
  }

  .arrow {
    position: absolute;
    top: 12px;
    right: 14px;
  }
}
</style>
