<script setup lang="ts">
import Button from './components/button'
</script>

<template>
  <div>这里是wview组件库</div>

  <Button class="btn normal"></Button>
  <Button class="btn warn"></Button>
  <Button class="btn error"></Button>
  <!-- TODO：鼠标悬浮时显示禁用原因(可自定义) -->
  <Button class="btn disabled" disabled></Button>
</template>

<style lang="scss">
.btn {
  text-align: center;
  border: none;
  padding: 0.5em 1em;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  color: grey;
  margin-left: 20px;
  transition: all 0.2s;
}

.normal {
  background-color: $white-6;
  border: 3px solid rgb(183, 112, 183);
}

.normal:hover {
  color: $purple;
  background-color: rgb(225, 170, 225);
}

.normal:active {
  border: 3px solid rgb(81, 0, 81);
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
