<template>
  <div class="w-select">
    <input type="text" readonly />
    <div class="w-displayFrame">
      <!-- <li v-for="item in items">2333</li> -->
    </div>
  </div>
</template>

<script lang="ts">
import '@/styles/components/button.scss'
import { defineComponent } from 'vue'
import { selectProps } from './types'

export default defineComponent({
  name: 'w-select',
  props: selectProps
})
</script>

<style lang="scss" scoped>
.w-select {
  display: inline-block;
  height: 40px;
  position: relative;

  input {
    border: 1px solid $border-color-darker;
    padding: 8px 10px;
    outline: none;
  }

  .w-displayFrame {
    width: 100%;
    height: 200px;
    border: 1px solid $border-color-darker;
    position: absolute;
    // overflow: hidden;
    top: 40px;

    li {
      list-style: none;
      height: 40px;
    }
  }
}
</style>
