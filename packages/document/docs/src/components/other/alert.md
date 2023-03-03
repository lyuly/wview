---
outline: deep
---

# Alert 警告提示

常用的警告提示。

## 基础用法

使用 `type` 来定义提示的样式。

<script lang="ts" setup>
import exampleAlert from '@/example/other/alert/exampleAlert.vue'
import sizeAlert from '@/example/other/alert/sizeAlert.vue'
</script>

<ClientOnly>
  <exampleAlert />
</ClientOnly>

:::details 展开代码
<<< @/example/other/alert/exampleAlert.vue
:::

## 调整尺寸

使用 `size` 属性配置尺寸，可使用 `large` 、 `small` 和 `mini` 三种值

<ClientOnly>
  <sizeAlert />
</ClientOnly>

:::details 展开代码
<<< @/example/other/alert/sizeAlert.vue
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
     <td>type</td>
     <td>类型</td>
     <td>string</td>
     <td>success / info / warning / danger</td>
     <td>—</td>
    </tr>
    <tr>
     <td>size</td>
     <td>尺寸</td>
     <td>string</td>
     <td>large / small / mini</td>
     <td>—</td>
    </tr>
   </tbody>
  </table>
 </body>
</html>