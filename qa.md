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

## vue-router 参数传递
* `props: true` 模式
	
	如果 props 被设置为 true，route.params 将会被设置为组件属性
	
	适合 `path: '/user/:id'`
	
* `props: Object` 模式
	
	如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。
	
	```
	{
	    path: '/movie',
	    name: 'movie',
	    props: {
	    	title: '电影'
	    },
	    component: () => import(/* webpackChunkName: "movie-view" */ '../pages/movie/movie.vue')
	}
	```
	
* `props: function` 模式
	
	当路由方式为 `/user?id=123` 时，如果希望将链接里面的 `query` 对应到组件内部定义的属性上面，可以使用这种模式	
	
	```
	const parseRoute = (route) => {
	  const keys = Object.keys(route.query)
	  if (keys && keys.length > 0) {
	    return route.query
	  }
	  return route.params
	}
	
	{
	    path: '/movie',
	    name: 'movie',
	    props: parseRoute,
	    component: () => import(/* webpackChunkName: "movie-view" */ '../pages/movie/movie.vue')
	}
	```	