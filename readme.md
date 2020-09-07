<p align="center">
  <img src="media/modal.png" width="600" />
</p>

[![](https://img.shields.io/npm/v/tv-modal.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/tv-modal)
[![](https://img.shields.io/badge/nuxt.js-module-04C690.svg?style=flat-square)](https://nuxtjs.org)
![Test Javascript](https://github.com/acidjazz/tv-modal/workflows/Test%20Javascript/badge.svg)
[![](https://img.shields.io/npm/dt/tv-modal.svg?style=flat-square)](https://www.npmjs.com/package/tv-modal)
[![](https://img.shields.io/github/license/acidjazz/tv-modal?style=flat-square)](https://www.npmjs.com/package-tv-modal)
<!-- [![](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord&style=flat-square)](https://discord.gg/enn4S6) -->

> This requires [Nuxt.js](https://nuxtjs.org) with the [Tailwind CSS](https://tailwindcss.nuxtjs.org) module

## Quick Setup
1. Add the `nuxt-tailvue` dependency to your Nuxt.js project
```bash
npm install nuxt-tailvue
# OR
yarn add nuxt-tailvue
```

2. Add `nuxt-tailvue` to the `modules` section of `nuxt.config.js`
```js
{
  modules: [
    ['nuxt-tailvue', {modal: true}],
  ]
}
```

3. If you're using [Purge](https://tailwindcss.com/docs/controlling-file-size), add this module to the content section of `tailwind.config.js`

```js
module.exports = {
    content: [
      './node_modules/tv-modal/**/*.vue'
  }
```
