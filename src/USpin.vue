<script setup lang="ts">
import Icon from './Icon.vue'
const props = defineProps<{
  bgColor?: string
  size?: string
  logoColor?: string
}>()

const bgColor = props.bgColor || 'gray'
const size = props.size || '5em'
const logoColor = props.logoColor || '#294973'

</script>

<template>
  <div
    class="u-spin-core"
    :style="
      'background-color:' + bgColor + ';' +
        'font-size:' + size + ';'
    "
  >
    <Icon :color="logoColor" />
  </div>
</template>

<style>
.u-spin-core {
  font-size: 5em;
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
