# 使用 vue-cli 脚手架创建项目

## 关于 vue-cli
* Vue 提供了一个[官方的 CLI](https://cli.vuejs.org/)，为单页面应用快速搭建 (SPA) 繁杂的脚手架。它为现代前端工作流提供了 batteries-included 的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。
* 使用 vue-cli 可以快速创建 vue 项目.

## 安装 vue-cli

1. 安装 vue-cli

	```
	npm install vue-cli -g
	```

2. 查看 vue-cli 是否安装成功

	```
	vue -V
	```

## 使用 vue-cli 创建一个 vue 项目
1. 使用 vue 初始化基于 webpack 的新项目
	
	```
	vue init webpack vue-cat-eye  // vue-cat-eye 是项目名称
	```
	
	或使用
	
	```
	vue init webpack-simple vue-cat-eye
	```
	
	运行初始化命令的时候回让用户输入几个基本的选项，如项目名称，描述，作者等信息，如果不想填直接回车默认就好。

2. 项目根目录下，安装依赖，现在

	```
	npm install
	```

3. 启动项目

	```
	npm run dev
	```