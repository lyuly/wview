---
outline: deep
---

# progress 进度条

用于展示任务处理的速度或工作完成的进度

## progress的使用

<script  lang="ts"  setup>
import demo1 from '@/example/basic/progress/demoProgress1.vue'
import demo2 from '@/example/basic/progress/demoProgress2.vue'
import demo3 from '@/example/basic/progress/demoProgress3.vue'
import demo4 from '@/example/basic/progress/demoProgress4.vue'
import demo5 from '@/example/basic/progress/demoProgress5.vue'
</script>

#### 基本使用

使用`type`来选择进度条

<ClientOnly>
  <demo1 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/progress/demoProgress1.vue
:::

#### 进度条长度

通过`val`属性控制进度条百分比

<ClientOnly>
  <demo2 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/progress/demoProgress2.vue
:::

#### 文字显示

通过`show-text`属性选择是否显示数值

<ClientOnly>
  <demo3 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/progress/demoProgress3.vue
:::

#### 进度条长度

通过`width`属性控制进度条长度

<ClientOnly>
  <demo4 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/progress/demoProgress4.vue
:::

#### 动画进度条

可以使用定时器来实现

<ClientOnly>
  <demo5 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/progress/demoProgress5.vue
:::