<template>
  <div
    class="w-upload-dragger"
    :class="{ ['w-upload-draggerenter']: isEnter }"
    ref="fileArea"
    @click="emits('fileUpload')"
  >
    <div class="w-upload-content">
      <Icon class="w-upload-icon" name="sucai" />
      <div class="w-upload-dragger-text">将文件拖到此处或<em>点击上传</em></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/styles/components/upload/dragger.scss'
import { ref, onMounted } from 'vue'
import Icon from '../icons/wIcon.vue'
const emits = defineEmits(['getFilesList', 'fileUpload'])
const fileArea = ref()
const isEnter = ref(false)
const timer = ref<null | number>(null)
const filesList = ref<File[]>([])

onMounted(() => {
  fileArea.value.addEventListener(
    'drop',
    (e: any) => {
      e.preventDefault()
      filesList.value.push(...Array.from(e.dataTransfer.files as FileList))
      emits('getFilesList', filesList.value)
    },
    false
  )
  fileArea.value.addEventListener('dragover', onDragover, false)
})

const onDragover = (e: Event) => {
  isEnter.value = true
  // dragover+防抖代替dragenter和dragleave，因为dragleave进入子元素也会触发
  if (timer.value !== null) {
    clearTimeout(timer.value)
  }
  timer.value = window.setTimeout(() => {
    isEnter.value = false
    timer.value = null
  }, 100)

  e.stopPropagation()
  e.preventDefault()
}
</script>
