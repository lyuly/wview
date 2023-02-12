---
outline: deep
---

# Input 输入框

#### 数据输入框类型，通过键盘输入字符


## 基本使用

#### input 的基本使用
<script  lang="ts"  setup>
import demo1 from '@/example/basic/input/demo1.vue'
import demo2 from '@/example/basic/input/demo2.vue'
import demo3 from '@/example/basic/input/demo3.vue'
import demo4 from '@/example/basic/input/demo4.vue'
import demo5 from '@/example/basic/input/demo5.vue'
import demo6 from '@/example/basic/input/demo6.vue'
import demo7 from '@/example/basic/input/demo7.vue'
import demo8 from '@/example/basic/input/demo8.vue'
</script>

<ClientOnly>
  <demo1 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demo1.vue
:::

## 禁用状态

#### input 的禁用状态，通过 _disabled_ 属性限制输入及操作

<ClientOnly>
  <demo2 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demo2.vue
:::

## 可清空数据

#### input 的 value 可快捷清空，通过 _clearable_ 属性启用


<ClientOnly>
  <demo3 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demo3.vue
:::

## 带图标

#### 可使用 _leftIcon_ 或者 _rightIcon_ 来定义显示图标并确定显示的位置。需要注意的是如果定义了右侧显示图标，那 _clearable_ 将不再起作用


<ClientOnly>
  <demo4 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demo4.vue
:::

## 不同大小

#### 通过设置 _size_ 属性来适应不同大小


<ClientOnly>
  <demo5 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demo5.vue
:::

## 组合输入

#### 可通过插槽完成组合输入，插槽名默认为 _btn_

<ClientOnly>
  <demo6 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demo6.vue
:::

## 密码类型

#### 密码类型的输入框，可通过 _showPassword_ 来启用是否开启显示密码

<ClientOnly>
  <demo7 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demo7.vue
:::

## 自定义 Focus 颜色

#### 通过 _focusColor_ 属性自定义 input 在获取焦点后的颜色

<ClientOnly>
  <demo8 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/input/demo8.vue
:::
