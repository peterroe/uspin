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

const targetRef = ref(null)
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

## Config

```ts
export interface SpinConfig {
  logoColor?: string // default: '#294973'
  size?: string // default: '5em'
  bgColor?: string // default: 'gray'
}

export declare function show(
  targetRef: Ref<Element>,
  config?: SpinConfig
): void

export declare function hidden(
  targetRef: Ref<Element>
): void
```

## Preview

![img](https://img-blog.csdnimg.cn/db951889fe19472db1a48fa22ab64d18.gif)