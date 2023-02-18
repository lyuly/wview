<script lang="ts">
import '@/styles/components/button.scss'
import { defineComponent, computed, useSlots } from 'vue'
import { buttonProps } from './types'
import wIcon from '../icons'

export default defineComponent({
  name: 'w-button',
  props: buttonProps,
  components: { wIcon },
  setup (props) {
    const styleClass = computed(() => {
      return {
        [`w-button--${props.type}`]: props.type,
        isPlain: props.plain,
        isRound: props.round,
        isCircle: props.circle,
        isDisabled: props.disabled,
        [`w-button--${props.size}`]: props.size
      }
    })

    const iconFont = computed(() => {
      const iconName = props.icon
      const position = props.iconPosition
      return {
        iconName,
        position
      }
    })

    const slots = useSlots()

    return {
      styleClass,
      wIcon,
      iconFont,
      slots
    }
  }
})
</script>

<template>
  <div>
    <button class="w-button" :class="styleClass">
      <wIcon
        v-if="iconFont.iconName && iconFont.position !== 'right'"
        :name="iconFont.iconName"
        :loading="loading"
      />
      <span class="w-button-text" v-if="slots.default">
        <slot />
      </span>
      <wIcon
        v-if="iconFont.position === 'right' && iconFont.iconName"
        :name="iconFont.iconName"
        :loading="loading"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
