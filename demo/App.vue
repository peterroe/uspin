<script setup lang="ts">
import { ref } from 'vue'
import { hide, show } from '../src/main'

const targetRef = ref<HTMLElement | undefined>(undefined)
</script>

<template>
  <div ref="targetRef" class="demo">
    <p>💻 A front end developer.</p>
    <p>🥉 Working Rss-Reader based on tauri-app.</p>
    <p>🦄 Enjoy JavaScript,VueJs and NodeJs.</p>
    <p>🍉 Hobby maybe blogging and write open source tools.</p>
    <p>💨 Visit peterroe.icu for more information.</p>
  </div>
  <div class="demoButton">
    <button @click="show(targetRef)">show</button>
    <button @click="hide(targetRef)">hide</button>
  </div>
</template>

<style>
body {
  padding: 50px;
}
.demo {
  text-align: center;
  padding: 20px;
  height: 200px;
  background-color: skyblue;
}
.demoButton {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}
</style>
