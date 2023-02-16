<template>
  <div :class="[`w-group-input-${size}`]" :style="{ 'min-width': 'auto' }">
    <div :class="isClass" :style="isStyle" style="">
      <wIcon
        :name="leftIcon"
        :class="['left-icon', 'iconfont', leftIcon]"
        v-if="!showPassword && leftIcon != ''"
      ></wIcon>
      <input
        :type="inptype"
        @focus="focus"
        @blur="blur"
        :value="modelValue"
        @input="iptChange"
        :disabled="disabled"
        @change="change"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :readonly="readonly"
        :form="form"
      />
      <transition name="slide-fade">
        <!-- <wIcon :name="cuowu" class="clearable-icon iconfont cuowu" v-if="!showPassword&&clearable&&modelValue!=''" @click="clear"></wIcon> -->
        <wIcon
          name="cuowu"
          :class="['clearable-icon', 'iconfont', 'cuowu']"
          v-if="!showPassword && clearable && modelValue != ''"
          @click="clear"
        ></wIcon>
      </transition>
      <wIcon
        :name="rightIcon"
        :class="['right-icon', 'iconfont', rightIcon]"
        v-if="!showPassword && rightIcon != ''"
      ></wIcon>
      <wIcon
        :name="iconName"
        v-if="showPassword"
        :class="['password-icon', 'iconfont w-icon-browse']"
        @click="showPwd(type)"
      ></wIcon>
    </div>
    <div class="slot">
      <slot class="slot-item" name="btn" />
    </div>
  </div>
</template>
<script>
import wIcon from '../icons'
import '@/styles/components/input.scss'
import { defineComponent, ref, computed, useSlots } from 'vue'
export default defineComponent({
  name: 'w-input',
  components: { wIcon }
})
</script>
<script setup>
const emit = defineEmits(['update:modelValue', 'clear', 'focus', 'blur', 'input', 'change'])
const props = defineProps({
  // eslint-disable-next-line vue/require-prop-type-constructor
  modelValue: String | Number,
  // eslint-disable-next-line vue/require-prop-type-constructor
  iconName: String | Number,
  disabled: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  type: String,
  size: {
    type: String,
    default: 'default'
  },
  leftIcon: {
    type: String,
    default: ''
  },
  rightIcon: {
    type: String,
    default: ''
  },
  placeholder: String,
  // 当页面加载时 <input> 元素自动获得焦点
  autofocus: Boolean,
  focusColor: {
    type: String,
    default: '#0e80eb'
  },
  readonly: Boolean,
  form: String
})
const slot = useSlots()
const isStyle = ref({})
const leftIcon = ref(props.leftIcon)
const rightIcon = ref(props.rightIcon)
const iconName = ref(props.iconName)
const inptype = ref(props.type)
const focusStyle = {
  width: slot.btn ? 'auto' : '100%',
  float: slot.btn ? 'left' : 'auto',
  'border-radius': slot.btn ? '4px 0 0 4px' : '4px',
  'border-color': '#dcdfe6f6'
}
isStyle.value = focusStyle
const focus = (e) => {
  focusStyle['border-color'] = '#0e80eb'
  isStyle.value = {
    width: slot.btn ? 'auto' : '100%',
    float: slot.btn ? 'left' : 'auto',
    'border-radius': slot.btn ? '4px 0 0 4px' : '4px',
    'border-color': props.focusColor
  }
  emit('focus', e)
}
const blur = (e) => {
  isStyle.value = {
    width: slot.btn ? 'auto' : '100%',
    float: slot.btn ? 'left' : 'auto',
    'border-radius': slot.btn ? '4px 0 0 4px' : '4px'
  }
  emit('blur', e)
}
const iptChange = (e) => {
  emit('update:modelValue', e.target.value)
  emit('input', e.target.value)
}
const change = (e) => {
  emit('change', e)
}
const clear = (e) => {
  emit('update:modelValue', '')
  emit('clear')
}
// 显示密码
const showPwd = (e) => {
  // eslint-disable-next-line eqeqeq
  if (inptype.value == 'text') {
    inptype.value = 'password'
  } else {
    inptype.value = 'text'
  }
  console.log(e)
}
const isClass = computed(() => {
  return [
    // eslint-disable-next-line eqeqeq
    props.clearable
      ? 'w-input-clearable'
      : props.size === 'default'
        ? 'w-input-default'
        : `w-input-${props.size}`,
    // eslint-disable-next-line eqeqeq
    props.leftIcon !== ''
      ? `w-input-left-icon-${props.size}`
      : !props.clearable
          ? props.rightIcon !== ''
            ? `w-input-right-icon-${props.size}`
            : ''
          : '',
    props.disabled ? 'w-input-disabled' : '',
    // eslint-disable-next-line eqeqeq
    props.type == 'password'
      ? props.showPassword
        ? `w-input-password-showpassword-${props.size}`
        : `w-input-password-${props.size}`
      : ''
  ]
})
</script>

<style lang="scss" scoped></style>
