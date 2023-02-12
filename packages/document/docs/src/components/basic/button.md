---
outline: deep
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用`type`、`plain`、`round`来定义按钮的样式。

<script lang="ts" setup>
import basicButton from '@/example/basic/button/basicButton.vue'
import disabledButton from '@/example/basic/button/disabledButton.vue'
import sizeButton from '@/example/basic/button/sizeButton.vue'
import iconButton from '@/example/basic/button/iconButton.vue'
</script>

<ClientOnly>
  <basicButton />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/button/basicButton.vue
:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用

使用 `disabled` 属性来控制按钮是否为禁用状态。该属性同时接受一个 `Boolean` 类型的值

<ClientOnly>
  <disabledButton />
</ClientOnly>

:::details 展开代码

<<< @/example/basic/button/disabledButton.vue
:::

## 调整尺寸

出了默认的大小，按钮组件还提供了额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large` 、`small` 和 `mini` 三种值。

<ClientOnly>
  <sizeButton />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/button/sizeButton.vue
:::

## 图标按钮
带图标的按钮可增强按钮的可玩性和欣赏性（有无文字均可）

<ClientOnly>
  <iconButton/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/button/iconButton.vue
:::