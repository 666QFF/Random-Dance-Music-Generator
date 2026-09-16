<!--
  极光背景层（纯装饰）
  只负责 DOM 结构，全部视觉规则集中在 theme/style.css 的「极光背景」小节，
  相当于把客户端 Theme.cs 的设计集中思路搬到文档站。
-->
<template>
  <div class="rdg-aurora" aria-hidden="true">
    <div class="rdg-aurora__field">
      <span class="rdg-blob rdg-blob--1"></span>
      <span class="rdg-blob rdg-blob--2"></span>
      <span class="rdg-blob rdg-blob--3"></span>
      <span class="rdg-blob rdg-blob--4"></span>
      <span class="rdg-blob rdg-blob--5"></span>
      <span class="rdg-blob rdg-blob--6"></span>
    </div>
    <div class="rdg-aurora__veil"></div>
    <div class="rdg-aurora__grain"></div>
  </div>
</template>
