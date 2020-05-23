### React+React-Router
项目架构设计
- 前后端完全分离
- 单页应用(SPA)
- 模块化开发
- 分层架构：工具层，服务层(对接后端数据)，逻辑层(提供页面的逻辑)


#### 页面加载过程
加载资源过程
- URL解析：协议+域名+端口+路径+参数+hash

- DNS查询
```javascript
// dns-prefetch, 预解析的时候加载cdn资源，提升页面性能
<link rel="dns-prefetch" href="//cdn.bootcss.com">
```

- 资源请求

- 浏览器解析


#### ES6常用语法

#### 浏览器本地存储
1.Cookie
- 用户端保存请求信息的机制
- 分号分隔的多个key-value值
- 存储在本地的加密文件里
- 有域名和路径的限制
- name: cookie名称
- domain: cookie生效的域名
- path: cookie生效的路径
- expires: cookie过期时间
- HttpOnly: 用户端不可更改

2.session
- 服务端保存请求信息的机制
- sessionid通常放在cookie里
- 会话由浏览器控制，会话结束，session失效

3.localStorage
- 有域名限制，不存在作用域概念
- 只有key-value
- 没有过期时间

4.sessionStorage
- 浏览器关闭后消失

#### 框架解决的问题
1.代码层面的问题
- 缺少规划，代码混乱(结构化开发)
- 缺少限制，容易冲突(独立文件，独立作用域)
- 缺少支撑，能力要求高

2.效率问题

3.多页应用的问题
- 路由体验
- 页面切换效果


框架开发的不足
- 兼容性问题，SEO不友好
- 有场景要求，开发自由度度
- 黑盒开发，框架本身有风险
- 有学习成本


**框架对比**
- React自由度最大，Vue其次
- React上手难度相对大一些


#### React生命周期
1.挂载阶段

2.运行时阶段

3.卸载阶段

4.错误处理

#### React-Router
路由的种类

1.页面Router
- window.location-href
- history.back()

2.Hash Router
- window.onhashchage

3.History Router
- history.pushState("test", "Title" , "/user/index")
- history.replaceState("test", null, "/home/index")
- window.onpopstate


**React-Router**

- <BrowserRouter>: history rotuer
- <HashRouter>: hash router
- <Route>: 路由规则
- <Switch>: 路由选项
- <Link>
- <NavLink>
- <Redirect>: 自动跳转

#### React数据管理
