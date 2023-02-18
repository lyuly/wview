---
outline: deep
---
# Tab 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

基础的、简洁的标签页。

<script lang="ts" setup>
import defaultTab from '@/example/navigation/tab/defaultTab.vue'
import cardTab from '@/example/navigation/tab/cardTab.vue'
import borderTab from '@/example/navigation/tab/borderTab.vue'
import bottomNav from '@/example/navigation/tab/bottomNav.vue'
</script>

<ClientOnly>
  <div style="border: 1px solid #ebebeb; border-radius: 3px; padding: 24px">
    <defaultTab />
  </div>
</ClientOnly>

:::details 展开代码
<<< @/example/navigation/tab/defaultTab.vue
:::

## 选项卡样式

选项卡样式的标签页。

<ClientOnly>
  <div style="border: 1px solid #ebebeb; border-radius: 3px; padding: 24px">
    <cardTab />
  </div>
</ClientOnly>

:::details 展开代码
<<< @/example/navigation/tab/cardTab.vue
:::

## 卡片化

卡片化的标签页。

<ClientOnly>
  <div style="border: 1px solid #ebebeb; border-radius: 3px; padding: 24px">
    <borderTab />
  </div>
</ClientOnly>

:::details 展开代码
<<< @/example/navigation/tab/borderTab.vue
:::

## 位置

可以通过 `position` 设置标签的位置

当前版本仅支持`top`与`bottom`两个位置

<ClientOnly>
  <div style="border: 1px solid #ebebeb; border-radius: 3px; padding: 24px">
    <bottomNav />
  </div>
</ClientOnly>

:::details 展开代码
<<< @/example/navigation/tab/bottomNav.vue
:::
