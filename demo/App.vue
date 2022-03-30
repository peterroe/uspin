<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { hide, show } from '../src/main'

const targetRef = ref<HTMLElement | undefined>(undefined)

onMounted(() => {
  show(targetRef.value)
})

setTimeout(() => {
  hide(targetRef.value)
}, 3000)
</script>

<template>
  <div ref="targetRef" class="demo">hello</div>
  <div class="demoButton">
    <button @click="show(targetRef)">show</button>
    <button @click="hide(targetRef)">hide</button>
  </div>
</template>

<style>
.demo {
  text-align: center;
  height: 200px;
  background-color: skyblue;
}
.demoButton {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}
</style>
