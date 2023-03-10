---
outline: deep
---

# Icon 图标

wview 提供了一套常用的图标集合。

## 使用图标

如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

## 安装

### 使用包管理器

```shell  
# 选择一个你喜欢的包管理器

# NPM
$ npm install @element-plus/icons-vue
# Yarn
$ yarn add @element-plus/icons-vue
# pnpm
$ pnpm install @element-plus/icons-vue
```

## 注册所有图标

您需要从 @wview/icons 中导入所有图标并进行全局注册

```shell
// main.ts

// 如果您正在使用CDN引入，请删除下面一行。
import * as wview from '@wview/icons'

const app = createApp(App)
for (const [key, component] of Object.entries(wview)) {
  app.component(key, component)
}
```

## 基础用法

### 图标集合

::: tip
这是一个提示
:::

#### System 系统

<script lang="ts" setup>
  import systemIconList from '@/example/basic/icon/systemIconList.vue'
  import arrowIconList from '@/example/basic/icon/arrowIconList.vue'
  import editIconList from '@/example/basic/icon/editIconList.vue'
  import foodIconList from '@/example/basic/icon/foodIconList.vue'
  import goodsIconList from '@/example/basic/icon/goodsIconList.vue'
  import mediaIconList from '@/example/basic/icon/mediaIconList.vue'
  import trafficIconList from '@/example/basic/icon/trafficIconList.vue'
  import weatherIconList from '@/example/basic/icon/weatherIconList.vue'
  import otherIconList from '@/example/basic/icon/otherIconList.vue'
</script>

<ClientOnly>
  <systemIconList/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/icon/systemIconList.vue
:::

#### Arrow 方向箭头

<ClientOnly>
  <arrowIconList/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/icon/arrowIconList.vue
:::

#### DocumentEditing 文档编辑

<ClientOnly>
  <editIconList/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/icon/editIconList.vue
:::

#### Media 多媒体

<ClientOnly>
  <mediaIconList/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/icon/mediaIconList.vue
:::

#### ConstructionTraffic 建筑交通

<ClientOnly>
  <trafficIconList/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/icon/trafficIconList.vue
:::

#### Food 食物

<ClientOnly>
  <foodIconList/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/icon/foodIconList.vue
:::

#### Goods 物品

<ClientOnly>
  <goodsIconList/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/icon/goodsIconList.vue
:::

#### Weather 天气

<ClientOnly>
  <weatherIconList/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/icon/weatherIconList.vue
:::

#### Other 其他

<ClientOnly>
  <otherIconList/>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/icon/otherIconList.vue
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
     <td>name</td>
     <td>图标名</td>
     <td>string</td>
     <td>—</td>
     <td>—</td>
    </tr>
    <tr>
     <td>color</td>
     <td>颜色</td>
     <td>string</td>
     <td>—</td>
     <td>#303133</td>
    </tr>
   </tbody>
  </table>
 </body>
</html>