<script setup lang="ts">
import wButton from './components/button'
</script>

<template>
  <div>这里是wview组件库</div>

  <wButton type="default" class="btn">默认</wButton>
  <wButton type="primary" class="btn">主要</wButton>
  <wButton type="warn" class="btn">警告</wButton>
  <wButton type="error" class="btn">错误</wButton>
  <!-- TODO：鼠标悬浮时显示禁用原因(可自定义) -->
  <wButton disabled="true" class="btn">禁用</wButton>
</template>

<style lang="scss">
.btn {
  text-align: center;
  border: none;
  padding: 0.5em 1em;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  color: grey;
  margin-left: 20px;
  transition: all 0.2s;
}

.default {
  background-color: $white-6;
  border: 3px solid rgb(183, 112, 183);
}

.default:hover {
  color: $purple;
  background-color: rgb(225, 170, 225);
}

.default:active {
  border: 3px solid rgb(81, 0, 81);
}

.primary {
  background-color: $blue;
  color: $white;
}

.primary:hover {
  opacity: 0.8;
}

.primary:active {
  opacity: 1;
}

.warn {
  background-color: $orange;
  color: $white;
}

.warn:hover {
  background-color: rgb(249, 152, 117);
}

.warn:active {
  background-color: rgb(182, 67, 26);
}

.error {
  background-color: $red;
  color: $white;
}

.error:hover {
  background-color: #f47882;
}

.error:active {
  background-color: #aa0e1b;
}

.disabled {
  background-color: $white-6;
  border: 3px solid rgb(183, 112, 183);
  cursor: not-allowed;
}
</style>
