---
outline: deep
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用`type`、`plain`、`round`来定义按钮的样式。

<script lang="ts" setup>
import basicButton from '@/components/basic/basicButton.vue'
import disabledButton from '@/components/basic/disabledButton.vue'
</script>

<ClientOnly>
  <basicButton />
</ClientOnly>

:::details 展开代码
<<< @/components/basic/basicButton.vue
:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用

使用 `disabled` 属性来控制按钮是否为禁用状态。该属性同时接受一个 `Boolean` 类型的值

<ClientOnly>
  <disabledButton />
</ClientOnly>

:::details 展开代码
<<< @/components/basic/disabledButton.vue
>>>>>>> upstream/main
:::