# Nuxt course

![GitHub dependabot](https://img.shields.io/badge/dependabot-enabled-025e8c?logo=Dependabot)
![node](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/beatrizsmerino/nuxt-course/master/package.json&query=$.engines.node&label=node&logo=node.js&color=339933)
![npm](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/beatrizsmerino/nuxt-course/master/package.json&query=$.engines.npm&label=npm&logo=npm&color=CB3837)  
![GitHub last commit](https://img.shields.io/github/last-commit/beatrizsmerino/nuxt-course)
![GitHub issues](https://img.shields.io/github/issues/beatrizsmerino/nuxt-course)
![GitHub forks](https://img.shields.io/github/forks/beatrizsmerino/nuxt-course)
![GitHub stars](https://img.shields.io/github/stars/beatrizsmerino/nuxt-course)
![GitHub watchers](https://img.shields.io/github/watchers/beatrizsmerino/nuxt-course)

## 🎯 Description

This repository serves as a complete learning and practice platform for mastering `Nuxt 2`, building on the knowledge gained in the Udemy course ["Nuxt.js 2 - Vue.js on Steroids"](https://www.udemy.com/course/nuxtjs-vuejs-on-steroids/learn/lecture/9172330#overview) taught by [Maximilian Schwarzmüller](https://www.udemy.com/user/academind/).

Designed for both beginners and seasoned developers alike, the course provides an in-depth exploration of `Nuxt 2`, enhancing the capabilities of `Vue.js` through practical, real-world applications. This repository contains my personal coding exercises, project work, and key learnings, reflecting my journey through the course and my progression in mastering the powerful features of `Nuxt 2`.

## ⚙️ Configuration

The exercise `Blog` uses `Firebase` so needs have in the `.env` file the `FIREBASE_API_KEY` enviroment variable with the value of the `API Key`.

You can found the `API Key` [here](https://console.firebase.google.com/project/nuxt-course-6e533/settings/general):

- In the `console.firebase.google.com`, select your project.
- Go to the left menu and click on the `⚙️` icon, next to `Project Overview`.
- Select the `Project Settings` option.
- Go to `General`/`Your project`/`Web API Key`.

## 🚀 Commands

### Install dependencies

```bash
npm install
```

### Launch the development server with hot reload

```bash
npm run dev
```

### Build project and start server for production

```bash
npm run build
npm run start
```

### Generate static project

```bash
npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## 📁 Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

## 🔗 References

- Udemy: ["Nuxt.js 2 - Vue.js on Steroids" by Maximilian Schwarzmüller](https://www.udemy.com/course/nuxtjs-vuejs-on-steroids/learn/lecture/9172330#overview)
