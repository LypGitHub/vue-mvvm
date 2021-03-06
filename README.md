# vue-mvvm

> A Vue.js project

需要构建移动端项目时 将index.js里面的`import '../../../static/flexible.min'`代码注释去掉
所有的构建命令加`-app`

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev(-app)

# build for production with minification
npm run build(-app)

# build for test with minification
npm run build-test(-app)

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

#### mvvm
- 写viewModel层的只需要关注视图和返回的数据，所有的数据在service层请求，把逻辑放在action里面处理
- 在service层做数据校验，不管view层传入的数据如何，service层只获取需要的和正确的
- 在请求那边并没有做统一的异常捕获，针对不同的接口处理不同，只做一个全局的vue的errorHandle

#### multiPage
- 多页入口
- 针对不同的业务场景，选择是否服务端渲染
- 提交代码检查
- 路由进入检查 提供公用校验类
- 提供移动端构建高清方案pxtorem，默认750px

#### todo
- 同构
- 解决同构解析性能问题
- 单元测试
- 常用组件的开发
- electron打包

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
