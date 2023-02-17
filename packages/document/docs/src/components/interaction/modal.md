---
outline: deep
---

# modal 弹窗

模态对话框

<script lang="ts" setup>
import demo1 from '@/example/interaction/modal/demo1.vue'
import demo2 from '@/example/interaction/modal/demo2.vue'

</script>

## 基本使用

Modal 组件基本使用示例。

<ClientOnly>
  <demo1 />
</ClientOnly>

:::details 展开代码
<<< @/example/interaction/modal/demo1.vue
:::

## 使用具名插槽自定义
使用具名插槽  #content 、#footer 可对模态框整体根据需要自定义。

<ClientOnly>
  <demo2 />
</ClientOnly>

:::details 展开代码
<<< @/example/interaction/modal/demo2.vue
:::