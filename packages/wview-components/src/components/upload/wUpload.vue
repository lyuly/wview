<!-- eslint-disable import/first/export -->
<template>
  <div class="w-upload">
    <input
      type="file"
      :multiple="props.multiple"
      :accept="props.accept"
      ref="wIpt"
      @change="getFiles"
      v-show="false"
    />
    <!-- 点击上传 -->
    <div @click="fileUpload" v-if="!props.drag">
      <slot />
    </div>
    <Dragger v-else @getFilesList="getFilesList" @fileUpload="fileUpload" />
    <div class="w-upload-list">
      <div class="w-upload-list_item" v-for="(item, index) in filesList" :key="index">
        <div class="w-upload-list_item-name">
          <Icon name="shiyongwendang" />
          {{ item.name }}
        </div>
        <div class="w-upload-list_item-status-label">
          <Icon name="cuowu" @click="delFile(index)" />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script lang="ts">
export default {
  name: 'w-upload'
}
</script> -->

<script setup lang="ts" name="w-upload">
import '@/styles/components/upload/index.scss'
import { ref } from 'vue'
import Icon from '../icons/wIcon.vue'
import Dragger from './wDragger.vue'
// 传入参数props
type UploadType = {
  multiple?: boolean
  accept?: string
  drag?: boolean
}
const props = defineProps<UploadType>()

// emits事件
const emits = defineEmits(['getFilesList'])

// 获取dom元素
const wIpt = ref()

// 获取文件列表
const filesList = ref<File[]>([])
const fileUpload = () => {
  // 触发input点击事件
  wIpt.value.click()
}

const getFiles = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (!files) return
  filesList.value.push(...Array.from(files))

  // 将文件列表传给父组件
  emits('getFilesList', filesList.value)
}

const delFile = (index: number) => {
  filesList.value.splice(index, 1)
  emits('getFilesList', filesList.value)
}

const getFilesList = (file: File[]) => {
  filesList.value = file
  emits('getFilesList', file)
}
</script>

<style lang="scss" scoped></style>
