<script setup lang="ts">
import Button from './components/button'
import Icon from './components/icons'
import Select from './components/from/select'
import Input from './components/input'
import Upload from './components/upload'
import Tab from './components/tab'
import TabPanel from './components/tab/wTabPanel.vue'
import Switch from './components/switch'
</script>

<template>
  <div>这里是wview组件库</div>
  <div>
    <Upload :multiple="true" accept="image/*">
      <Button type="primary" size="small">文件上传</Button>
    </Upload>
    <Upload drag></Upload>
    <hr />
  </div>
  <Button type="primary">默 认</Button>
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
