<script setup lang="ts">
import Icon from './Icon.vue'
import { ref } from 'vue'
const props = defineProps<{
  bgColor?: string
  size?: string
  logoColor?: string
  opacity?: number
}>()

const bgColor = props.bgColor || '#000'
const opacity = props.opacity || 0.5
const size = props.size || '5em'
const logoColor = props.logoColor || '#fff'

const style = ref({
  display: 'flex',
  color: 'red',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: bgColor,
  opacity: opacity,
  fontSize: size,
})
</script>

<template>
  <div class="u-spin-core" :style="style">
    <Icon :color="logoColor" />
  </div>
</template>
