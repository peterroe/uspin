## uspin

A vue3 component that spins on load

## Install

```shell
$ npm install uspin
```

## Usage

```html
<script setup lang="ts">
  import { ref } from 'vue'
  import { hide, show } from 'uspin' // import uspin

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
    <!-- invoke method -->
    <button @click="show(targetRef)">show</button>
    <button @click="hide(targetRef)">hide</button>
  </div>
</template>
```

## Config

```ts
export interface SpinConfig {
  logoColor?: string // default: '#fff'
  size?: string // default: '5em'
  bgColor?: string // default: '#ddd'
  opacity?: number // default: 0.5
}

export declare function show(targetRef: Ref<Element>, config?: SpinConfig): void

export declare function hide(targetRef: Ref<Element>): void
```

## Preview

![img](https://img-blog.csdnimg.cn/9fa98b82a0f445a39d869fce28cd65cc.gif)
