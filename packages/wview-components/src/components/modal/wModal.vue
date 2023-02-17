<template>
  <div class="w-modal" v-if="show">
    <div class="wrap" :style="{ width }">
      <div class="header">
        <strong class="modal-title">{{ title }}</strong>
        <!-- <IconSystem v-if="showClose" type="icon-close" class="mfont pointer" @click="handleClose" /> -->
      </div>
      <div class="line"></div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="line"></div>
      <div class="footer">
        <slot name="footer" class="footer-child"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import IconSystem from '../icons'
import '@/styles/components/modal.scss'
import { type } from 'os'
export interface Props {
  show: boolean
  title?: string
  width?: string
  showClose?: boolean
  beforeClose?: Function
}
const props = withDefaults(defineProps<Props>(), {
  show: false,
  title: '弹框',
  width: '500px',
  showClose: true
})

const emits = defineEmits(['update:show'])
const handleClose = () => {
  if (props.beforeClose) {
    props.beforeClose()
  } else {
    emits('update:show')
  }
}
</script>

<style scoped lang="scss"></style>
