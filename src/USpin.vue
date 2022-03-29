<script setup lang="ts">
import { ref } from 'vue'
import Icon from './Icon.vue'
const props = defineProps<{ bg?: string }>()

const bg = props.bg || 'gray'

</script>

<template>
  <div class="u-spin-core" :style="'background-color:' + bg">
    <Icon color="#294973" />
  </div>
</template>

<style>
.u-spin-core {
  font-size: 60px;
  display: flex;
  color: red;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
