---
outline: deep
---

# Input 输入框

 数据输入框类型，通过键盘输入字符。


## 基本使用

input 的基本使用。
<script  lang="ts"  setup>
import demo1 from '@/example/basic/input/demoInput1.vue'
import demo2 from '@/example/basic/input/demoInput2.vue'
import demo3 from '@/example/basic/input/demoInput3.vue'
import demo4 from '@/example/basic/input/demoInput4.vue'
import demo5 from '@/example/basic/input/demoInput5.vue'
import demo6 from '@/example/basic/input/demoInput6.vue'
import demo7 from '@/example/basic/input/demoInput7.vue'
import demo8 from '@/example/basic/input/demoInput8.vue'
</script>

<ClientOnly>
  <demo1 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demoInput1.vue
:::

## 禁用状态

通过 `disabled` 属性限制输入及操作。

<ClientOnly>
  <demo2 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demoInput2.vue
:::

## 可清空数据

通过 `clearable` 属性启用，可快速清除数据。


<ClientOnly>
  <demo3 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demoInput3.vue
:::

## 带图标

可使用 `leftIcon` 或者 `rightIcon` 来定义显示图标并确定显示的位置。
**注意:如定义了右侧显示图标，那 `clearable` 将不再起作用**


<ClientOnly>
  <demo4 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demoInput4.vue
:::

## 不同大小

通过设置 `size` 属性来适应不同大小。


<ClientOnly>
  <demo5 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demoInput5.vue
:::

## 组合输入

可通过插槽进行组合输入。

<ClientOnly>
  <demo6 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demoInput6.vue
:::

## 密码类型

密码类型的输入框。

<ClientOnly>
  <demo7 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demoInput7.vue
:::

## 自定义 Focus 颜色

通过 `focusColor` 属性自定义在获取焦点后的颜色。

<ClientOnly>
  <demo8 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demoInput8.vue
:::
