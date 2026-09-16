<!--
  自定义布局：在默认主题之上叠一层极光背景，并给首页 Hero 换上一个「光晕图标」。
  除这两处外，其余一切沿用 VitePress 默认主题。
-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { withBase } from 'vitepress'
import Aurora from './Aurora.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <!-- 极光背景：fixed 定位，不参与文档流 -->
    <template #layout-top>
      <Aurora />
    </template>

    <!-- 首页 Hero 右侧装饰：应用图标 + 呼吸光晕 -->
    <template #home-hero-image>
      <div class="rdg-orb">
        <span class="rdg-orb__halo"></span>
        <span class="rdg-orb__ring"></span>
        <span class="rdg-orb__ring rdg-orb__ring--delay"></span>
        <img class="rdg-orb__logo" :src="withBase('/logo.png')" alt="RandomDanceGen" width="128" height="128" />
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
