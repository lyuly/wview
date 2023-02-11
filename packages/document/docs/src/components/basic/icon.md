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

<script lang='ts'>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted() {
    import ('../../example/basic/ExampleIcon.vue').then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>

<ClientOnly>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</ClientOnly>

:::details 展开代码
<<< @/example/basic/ExampleIcon.vue

::: tip
这是一个提示
:::

#### System 系统

<script lang="ts" setup>
  import systemIconList from '@/example/basic/icon/systemIconList.vue'
  import arrowIconList from '@/example/basic/icon/arrowIconList.vue'

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

#### Media 多媒体

#### ConstructionTraffic 建筑交通

#### Food 食物

#### Goods 物品

#### Weather 天气

#### Other 其他