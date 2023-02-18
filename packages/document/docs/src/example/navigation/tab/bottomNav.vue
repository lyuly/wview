<template>
  <Tab name="tabMenu" default="用户配置" position="bottom">
    <TabPanel name="用户配置" tab="用户配置"> 用户配置 </TabPanel>
    <TabPanel name="角色配置" tab="角色配置"> 角色配置 </TabPanel>
    <TabPanel name="管理配置" tab="管理配置"> 管理配置 </TabPanel>
    <TabPanel name="岗位需求管理" tab="岗位需求管理"> 岗位需求管理 </TabPanel>
  </Tab>
</template>

<script lang="ts" setup>
import { Tab, TabPanel } from 'wview'
</script>
