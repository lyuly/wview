<script setup lang="ts">
import Button from './components/button'
import Icon from './components/icons'
import Select from './components/from/select'
import Input from './components/input'
import Upload from './components/upload'
</script>

<template>
  <div>这里是wview组件库</div>
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
  <div>Select 组件</div>
  <Select />
  <div>
    <Upload></Upload>
  </div>
</template>

<style lang="scss" scoped></style>
