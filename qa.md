## vue 常见问题

### static 与 assets 文件夹的区别


## ESLint 检查
* `Too many blank lines at the end of file. Max of 0 allowed` 或者
  `Expected indentation of 4 spaces but found 8` 可以在 **.eslintrc.js** 文件关闭该项检查 
  
  ```
  "no-tabs": "off"
  ```
或者使用终极奥义，在 config 文件夹下的 index.js 文件将 ESLint 检查关闭

	```
	useEslint: false,
	```
