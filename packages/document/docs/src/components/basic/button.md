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
import loadingButton from '@/example/basic/button/loadingButton.vue'
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

## 图标按钮
带图标的按钮可增强按钮的可玩性和欣赏性（有无文字均可）

<ClientOnly>
  <iconButton/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/button/iconButton.vue
:::

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<ClientOnly>
  <loadingButton/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/button/loadingButton.vue
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

## Attributes

<html>
 <head></head>
 <body>
  <table>
   <thead>
    <tr>
     <th>参数</th>
     <th>说明</th>
     <th>类型</th>
     <th>可选值</th>
     <th>默认值</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>size</td>
     <td>尺寸</td>
     <td>string</td>
     <td>large / small / mini</td>
     <td>—</td>
    </tr>
    <tr>
     <td>type</td>
     <td>类型</td>
     <td>string</td>
     <td>primary / success / warning / danger / info / default</td>
     <td>—</td>
    </tr>
    <tr>
     <td>plain</td>
     <td>是否朴素按钮</td>
     <td>boolean</td>
     <td>—</td>
     <td>false</td>
    </tr>
    <tr>
     <td>round</td>
     <td>是否圆角按钮</td>
     <td>boolean</td>
     <td>—</td>
     <td>false</td>
    </tr>
    <tr>
     <td>circle</td>
     <td>是否圆形按钮</td>
     <td>boolean</td>
     <td>—</td>
     <td>false</td>
    </tr>
    <tr>
     <td>loading</td>
     <td>是否加载中状态</td>
     <td>boolean</td>
     <td>—</td>
     <td>false</td>
    </tr>
    <tr>
     <td>disabled</td>
     <td>是否禁用状态</td>
     <td>boolean</td>
     <td>—</td>
     <td>false</td>
    </tr>
    <tr>
     <td>icon</td>
     <td>图标类名</td>
     <td>string</td>
     <td>—</td>
     <td>—</td>
    </tr>
    <tr>
     <td>autofocus</td>
     <td>是否默认聚焦</td>
     <td>boolean</td>
     <td>—</td>
     <td>false</td>
    </tr>
    <tr>
     <td>native-type</td>
     <td>原生 type 属性</td>
     <td>string</td>
     <td>button / submit / reset</td>
     <td>button</td>
    </tr>
   </tbody>
  </table>
 </body>
</html>