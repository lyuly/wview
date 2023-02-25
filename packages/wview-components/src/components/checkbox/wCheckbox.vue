<template>
  <label class="w-checkbox" :class="classList">
    <span class="w-checkbox__input">
      <input
        ref="inputRef"
        v-model="model"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        @change="handleChange"
      />
    </span>

    <span v-if="$slots.default || label" class="w-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts" setup>
import '@/styles/components/checkbox.scss'
import { computed, onMounted, watch, ref } from 'vue'
import { checkboxEmits, checkboxProps } from './checkbox'
const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const model = computed<any>({
  get () {
    return props.modelValue
  },
  set (val) {
    return emit('update:modelValue', val)
  }
})
const inputRef = ref<HTMLInputElement>()

function indeterminate (val: boolean) {
  inputRef.value!.indeterminate = val
}
function handleChange (e: Event) {
  const target = e.target as HTMLInputElement
  const value = !!target.checked
  emit('change', value)
}

watch(() => props.indeterminate, indeterminate)

onMounted(() => {
  indeterminate(props.indeterminate)
})

const classList = computed(() => {
  const { disabled, isChecked } = props
  return [
    {
      'is-disabled': disabled,
      'is-checked': isChecked
    }
  ]
})
</script>
