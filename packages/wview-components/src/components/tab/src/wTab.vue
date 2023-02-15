<!-- Tab选项卡 -->
<template>
  <div>
    <renderTabBar></renderTabBar>
    <renderContent></renderContent>
  </div>
</template>

<script setup lang="ts" name="wTabs">
import { useSlots, ref, h } from 'vue'
// name：tab的名称，default：默认显示那个
type Props = {
  name: string
  default?: string
}
const emit = defineEmits(['change-tab'])
const props = withDefaults(defineProps<Props>(), {
  default: ''
})

const slots = useSlots() // 拿到 TabPane的 slot

const currentTab = ref<string>(props.default)
// tab按钮组件
const renderOneButten = (name: string, tab: string, index: number) =>
  h(
    'label',
    {
      class: {
        'mx-2 px-2 cursor-pointer hover:text-teal-600': true,
        'border-b-2': currentTab.value === name || (index === 0 && !currentTab.value)
      }
    },
    [
      h(
        'input',
        {
          name: props.name,
          value: name,
          type: 'radio',
          class: 'display-none',
          onclick: () => {
            currentTab.value = name
            emit('change-tab', currentTab.value)
          }
        },
        {}
      ),
      tab
    ]
  )
// 上方的切换按钮 div相关样式 与 tab组件渲染
const renderTabBar = () =>
  h(
    'div',
    {
      class: 'flex flex-nowrap overflow-x-scroll',
      style: {
        overflowY: 'hidden',
        overflowX: 'auto'
      }
    },
    slots.default &&
      slots.default().map((item, idx) => {
        return renderOneButten(item.props?.name, item.props?.tab, idx)
      })
  )

// 渲染的下方 插槽的相关数据
const renderContent = () => {
  return (
    slots.default &&
    slots.default().find((item) => {
      if (currentTab.value === '') {
        return true
      }
      return item.props?.name === currentTab.value
    })
  )
}
</script>
<style lang="scss" scoped>
/* 滚动条的样式 */
div::-webkit-scrollbar {
  height: 2px;
}
div::-webkit-scrollbar-track {
  background: transparent;
}
div::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}
</style>
