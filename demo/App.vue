<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { hidden, show } from '../src/main'

const targetRef = ref<Element>(null)

onMounted(() => {
  show(targetRef.value)
})

setTimeout(() => {
  hidden(targetRef.value)
}, 3000)

</script>

<template>
  <div ref="targetRef" class="demo">
    hello
  </div>
  <div class="demoButton">
    <button @click="show(targetRef)">show</button>
    <button @click="hidden(targetRef)">hidden</button>
  </div>
</template>

<style>
.demo {
  text-align: center;
  height: 200px;
  background-color: skyblue
}
.demoButton {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}
</style>
