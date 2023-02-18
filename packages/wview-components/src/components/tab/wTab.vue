<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :class="{ 'border-card': borderCard }">
    <wRenderTab></wRenderTab>
  </div>
</template>

<script setup lang="ts" name="WTabs">
import '@/styles/components/tab/tab.scss'
import { h, onMounted, ref, useSlots } from 'vue'
// name：tab的名称，default：默认显示那个
type Props = {
  name: string
  default?: string
  position?: string
  card?: boolean
  borderCard?: boolean
}
const emit = defineEmits(['change-tab'])
const props = withDefaults(defineProps<Props>(), {
  default: '',
  position: 'top',
  card: false,
  borderCard: false
})

const slots = useSlots() // 拿到 TabPanel 的 slot
const currentTab = ref<string>(props.default)
const tabPosition = ref<string>(props.position)
const card = ref<boolean>(props.card)
const borderCard = ref<boolean>(props.borderCard)

// tab按钮组件
const renderOneButten = (name: string, tab: string, index: number) =>
  h(
    'div',
    {
      class: {
        'w-tab__default': !card.value && !borderCard.value,
        'w-tab__card': card.value,
        'w-tab__border-card': borderCard.value,
        'is-active': currentTab.value === name || (index === 0 && !currentTab.value)
      }
    },
    [
      h(
        'label',
        {
          class: {
            'w-tab-nav': true,
            'is-active': currentTab.value === name || (index === 0 && !currentTab.value)
          }
        },
        [
          h(
            'input',
            {
              name: props.name,
              value: name,
              type: 'radio',
              style: 'display: none;',
              onclick: (e: any) => {
                currentTab.value = name
                emit('change-tab', currentTab.value)
                if (!card.value && !borderCard.value) {
                  scrollToActive(e)
                }
              }
            },
            {}
          ),
          tab
        ]
      )
    ]
  )

// 上方的切换按钮 div相关样式 与 tab组件渲染
const renderTabBar = () =>
  h(
    'div',
    {
      class: {
        'w-tab-wrap': true,
        'is-top': tabPosition.value === 'top',
        'is-bottom': tabPosition.value === 'bottom',
        'is-left': tabPosition.value === 'left',
        'is-right': tabPosition.value === 'right',
        'is-default': !card.value && !borderCard.value,
        'is-card': card.value,
        'is-border-card': borderCard.value
      }
    },
    h(
      'div',
      {
        class: 'w-tab__nav_wrap'
      },
      [
        h(
          'div',
          {
            class: 'w-tab__list'
          },
          [
            card.value || borderCard.value ? null : h('div', { class: 'w-tab__active' }, {}),
            slots.default &&
              slots.default().map((item, idx) => {
                return renderOneButten(item.props?.name, item.props?.tab, idx)
              })
          ]
        )
      ]
    )
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

// 根据位置属性渲染导航栏位置
const wRenderTab = () => {
  return props.position === 'bottom'
    ? [renderContent(), renderTabBar()]
    : [renderTabBar(), renderContent()]
}

// 默认标签下，高亮提示移动逻辑
// eslint-disable-next-line space-before-function-paren
function scrollToActive(e?: any) {
  const activeEleWidth = e ? e.target.labels[0].clientWidth : 56
  const offset = e ? e.target.labels[0].offsetLeft : 0

  const activeBar: any = document.querySelector('.w-tab__active')
  if (activeBar) {
    activeBar.style.width = activeEleWidth + 'px'
    activeBar.style.transform = `translate(${offset}px)`
  }
}

onMounted(() => {
  scrollToActive()
})
</script>
