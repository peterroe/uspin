## uspin

A vue3 component that spins on load

## Install

```shell
$ npm install uspin
```

## Usage

```html
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { hidden, show } from 'uspin'

const targetRef = ref<Element>(null)
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
```

## Preview

![img](https://img-blog.csdnimg.cn/26076d097a1849dab693afed311faf33.gif)