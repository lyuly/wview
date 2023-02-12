<script setup lang="ts">
import Button from './components/button'
import Icon from './components/icons'
import Select from './components/from/select'
import Input from './components/from/input'

</script>

<template>
  <div>这里是wview组件库</div>
  <Button type="primary">默 认</Button>
  <Input placeholder="默 认"></Input>
  <div>IconFont</div>
  <Icon name="system" />
  <Icon name="system_sort_ascending_line" />
  <Icon name="system_arrow_right_line" />
  <div>Select 组件</div>
  <Select />
</template>

<style lang="scss" scoped></style>
