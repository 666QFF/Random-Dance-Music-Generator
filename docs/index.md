---
layout: home

hero:
  name: RandomDanceGen
  text: 随机舞蹈音视频生成器
  tagline: 下载 → 裁剪 → 拼接，一键产出可直接上台的 MP3 / MP4
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 常见问题
      link: /reference/faq
    - theme: alt
      text: 源码仓库
      link: https://github.com/666QFF/Random-Dance-Music-Generator

features:
  - icon: 📥
    title: 素材自动化
    details: 从 歌单自动下载、按时间裁剪、按顺序拼接，输出 MP4 / MP3。
  - icon: 🎚️
    title: 音频处理
    details: 音量均衡（-14 LUFS）、增益调节、在线歌词烧录，成片音量统一。
  - icon: ⏱️
    title: 曲间效果
    details: 倒计时、聚焦预告，让随舞衔接更顺滑，少一次冷场。
---

## 它解决什么问题

一场随机舞蹈，本质是「几十首歌 + 每首只取一小段 + 无缝连播」。手工做要下载几十个视频、逐首剪辑、再拼到一起 —— 繁琐、耗时、还容易错。

随舞音频生成器把这条链路压成一次操作：**喂一份歌单，拿一个成品**。


## 三步上手

1. **[下载并运行](/guide/getting-started)** —— 发布版是**自包含压缩包**，解压即用，无需安装 .NET；
2. **[准备歌单](/guide/songlist)** —— 一个三列的 Excel，可从这里下载 <a href="./songlist-template.xlsx" download>随舞歌单模板.xlsx</a>；
3. **[点开始生成](/guide/usage)** —— 成品落在程序目录的 `output\`。

## 下载

发布版已做**代码混淆**（符号重命名 + 字符串加密 + 控制流混淆），大幅提升反编译难度。

- 💾 [下载 · 解压即用](https://github.com/666QFF/Random-Dance-Music-Generator/releases)
- 解压后得到 `随机舞蹈音频视频生成器.exe` + 运行库 + `assets\`，双击 exe 即可运行，**无需安装 .NET**。

::: warning 混淆
混淆只是提高逆向门槛，软件启动与每次生成前仍会向服务器校验本机授权状态，被停用的设备会被拒绝。请勿传播绕过校验的版本。
:::

## 功能一览

| 环节 | 能力 |
| --- | --- |
| 素材 | 视频下载、按起止时间裁剪、片段拼接输出（MP4 / MP3） |
| 音频 | 音量均衡（-14 LUFS）、增益 −12 ~ +12 dB |
| 歌词 | 在线歌词库：视频模式烧录进画面，音频模式另出同名 `.lrc` |
| 曲间 | 音频倒计时、视频倒计时、聚焦预告（**输出格式随模式**：音频倒计时 ⇒ MP3，其余 ⇒ MP4） |
| 效率 | 增量生成复用片段、歌单加载 / 重新加载 / 随机打乱 / 拖拽排序 |
| 其它 | 扫码登录、在线检查更新、随机动图背景（热加载、不落盘） |

## 成品与溯源

溯源信息（开发人 / 工具 / 序列号 / 生成时间）写在**文件元数据**里，可用配套的 `RDG验真` 工具校验

---

::: tip 文档导航
- [快速开始](/guide/getting-started)：从下载到第一份成品
- [歌单格式](/guide/songlist)：Excel 三列到底怎么写
- [使用教程](/guide/usage)：音频、曲间、歌单操作与生成流程
- [常见问题](/reference/faq)：画质、歌单、报错
- [溯源验真](/reference/verify)：元数据四字段与验真工具
:::
