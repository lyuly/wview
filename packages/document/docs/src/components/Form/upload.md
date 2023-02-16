---
outline: deep
---

# Upload 文件上传

上传组件建议拖拽或复制出实例使用。

## 基础用法

通过`slot`你可以传入自定义的上传按钮类型和文字提示，点击按钮即可完成单个文件的上传。

<script lang="ts" setup>
import basicUpload from '@/example/Form/upload/basicUpload.vue'
import acceptUpload from '@/example/Form/upload/acceptUpload.vue'
import multipleUpload from '@/example/Form/upload/multipleUpload.vue'
import dragUpload from '@/example/Form/upload/dragUpload.vue'
</script>

<ClientOnly>
  <basicUpload />
</ClientOnly>

:::details 展开代码
<<< @/example/Form/upload/basicUpload.vue
:::

## 文件多选

通过`multiple`你可以指定是否允许一次性选择并上传多个文件。

<ClientOnly>
  <multipleUpload />
</ClientOnly>

:::details 展开代码
<<< @/example/Form/upload/multipleUpload.vue
:::


## 类型限定

通过`accept`你可以对上传的文件类型进行指定，仅允许上传指定类型的文件。此处传入了`image/*`,即仅允许上传图片。有关限制可接受的文件类型的更多说明，详见<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%8F%AF%E6%8E%A5%E5%8F%97%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B">这里</a>。

<ClientOnly>
  <acceptUpload />
</ClientOnly>

:::details 展开代码
<<< @/example/Form/upload/acceptUpload.vue
:::


## 拖拽上传

通过`drag`你可以对上传文件的方式进行指定，当值为`true`时切换为拖拽上传，你可以将文件拖拽到特定区域以进行上传。

<ClientOnly>
  <dragUpload />
</ClientOnly>

:::details 展开代码
<<< @/example/Form/upload/dragUpload.vue
:::

