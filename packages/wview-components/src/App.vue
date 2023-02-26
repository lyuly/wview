<script setup lang="ts">
import Button from './components/button'
import Icon from './components/icons'
import Select from './components/from/select'
import Input from './components/input'
import Upload from './components/upload'
import Tab from './components/tab'
import TabPanel from './components/tab/wTabPanel.vue'
import Switch from './components/switch'
import Checkbox from './components/checkbox/wCheckbox.vue'
import { ref } from 'vue'
import Alert from './components/alert'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
</script>

<template>
  <div>这里是wview组件库</div>
  <div>
    <Alert>默认警告</Alert>
    <Alert type="success">成功警告</Alert>
    <Alert type="warning" size="mini">严重警告</Alert>
    <Alert type="info" size="small">通知警告</Alert>
    <Alert type="danger" size="large">危险警告</Alert>
  </div>
  <div>
    <Checkbox v-model="checked1" label="苹果" />
    <Checkbox v-model="checked2" label="香蕉" />
    <Checkbox v-model="checked3" label="梨子" disabled />
  </div>
  <div>
    <Upload :multiple="true" accept="image/*">
      <Button type="primary" size="small">文件上传</Button>
    </Upload>
    <Upload drag></Upload>
    <hr />
  </div>
  <div style="display: flex">
    <Button type="primary">主要</Button>
    <Button type="default">默认</Button>
    <Button type="warning">警告</Button>
    <Button type="danger" size="large">危险</Button>
    <Button type="info">通知</Button>
    <Button type="success" plain>成功</Button>
    <Button type="default" disabled>默认</Button>
  </div>
  <Input placeholder="默 认"></Input>
  <div>IconFont</div>
  <Icon name="system" />
  <Icon name="system_sort_line" />
  <Icon name="sucai" />
  <Icon name="zhaopian" />
  <Icon name="weibiaoti-3" />
  <Icon name="weather_dongxue" />
  <Icon name="cup" />
  <Icon name="shoubiao" />
  <Icon name="chrome-fill" />
  <Tab name="123" default="用户配置" style="width: 600px">
    <TabPanel name="用户配置" tab="用户配置"> 用户配置 </TabPanel>
    <TabPanel name="角色配置" tab="角色配置"> 角色配置 </TabPanel>
    <TabPanel name="管理配置" tab="管理配置"> 管理配置 </TabPanel>
    <TabPanel name="岗位需求管理" tab="岗位需求管理"> 岗位需求管理 </TabPanel>
  </Tab>

  <Switch />
  <div>Select 组件</div>
  <Select></Select>
</template>

<style lang="scss" scoped></style>
