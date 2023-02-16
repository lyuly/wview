<script setup lang="ts">
import Button from './components/button'
import Icon from './components/icons'
import Select from './components/from/select'
import Input from './components/input'
import Upload from './components/upload'
import Tab from './components/tab'
import TabPanel from './components/tab/src/wTabPanel.vue'
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
  <Tab name="123" default="tab1">
    <TabPanel name="tab1" tab="tab1"> 111 </TabPanel>
    <TabPanel name="tab2" tab="tab2"> 222 </TabPanel>
    <TabPanel name="tab3" tab="tab3"> 333 </TabPanel>
  </Tab>

  <div>Select 组件</div>
  <Select />
</template>

<style lang="scss" scoped></style>
