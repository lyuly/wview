---
outline: deep
---

# Table 表格

用于展示多层次结构的数据，可自定义并保持高度灵活


## 基本使用

table 表格基本使用示例,需要一个主要的 `options` 参数。
<script  lang="ts"  setup>

</script>

<ClientOnly>
  <demo1 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/table/demo1.vue
:::

## 不同大小

根据需要自定义表格的插槽内容，插槽接受需要定义表格列的 _field_ 并返回当前行的数据 _rowItem_ ，如果是定义表头，需要在插槽名加上 _head-_ 前缀作为识别符.

<ClientOnly>
  <demo2 />
</ClientOnly>

:::details 展开代码
<<< @/example/basic/table/demo2.vue
:::

## 自定义插槽内容

