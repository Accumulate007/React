### React Hook

#### react-script
1.eject
```javascript
npm run eject
```

#### reacj新特性
1.Context

能够让数据在组件树中传递而不必一级一级手动传递

2.ContextType

3.lazy

4.Suspense

5.memo

#### react hook
1.类组件的缺陷
- 状态逻辑难以复用
- 趋向复杂难以维护
- this指向困扰

2.hook的使用法则
- 只在函数的顶层调用hook函数
- 只在函数组件，或者是自定义hook中调用hook函数


3.hook的常见问题


#### Redux


#### PWA(progressive web app)
PWA组成技术
- Service worker
- Promise
- Fetch
- cache API
- Notification API


workbox实现PWA


#### 代码规范格式化
1、使用ESLint-fix实现代码的自动格式化

2、使用prettier实现代码自动格式化


使用第三方插件配置git hook
```javascript
npm i husky lint-staged -D
```


#### 性能与部署
1、使用插件webpack-bundle-analyzer分析每个模块的大小
