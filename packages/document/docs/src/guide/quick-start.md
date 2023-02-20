# 快速开始

本节将介绍如何在项目中使用 wview

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import { createApp } from 'vue'
import wview from 'wviewui'
import 'wviewui/dist/styles.css'
import App from './App.vue'

const app = createApp(App)

app.use(wview)
app.mount('#app')
```

### 按需导入

```ts
// main.ts
import { createApp } from 'vue'
import { Button } from 'wviewui'
import 'wviewui/dist/styles.css'
import App from './App.vue'

const app = createApp(App)

app.use(Button)
app.mount('#app')
```