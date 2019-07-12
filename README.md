# 纪录本身 即是反抗 

## 移动端应用尝试

#### [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

### 用传统方式（命令行）将修改后的代码上传到Github
1. git add .
2. git commit -m '提示信息'
3. git push   

### 制作首页APP组件
1. 完成 Header 区域，使用的是 Mint-UI 中的 Header 组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
   + 在制作 购物车 小图标时，还有一些前置操作
   + 先拷 扩展图标的 css 样式（icons-extra.css），到项目中
   + 再拷 扩展字体的 ttf 文件（mui-icons-extra.ttf），到项目中
   + 购物车的小图标 样式为 'mui-icon-extra mui-icon-extra-cart'
3. 要在中间区域防止一个 router-view 来展示路由匹配到的组件

### 改造 tabbar 为 router-link

### 设置路由高亮

### 点击 tabbar 中的路由链接，展示对应的路由组件

### 制作首页轮播图布局

### 加载首页轮播图数据
1. 使用 vue-resource 获取数据
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到数据后，保存到data身上的数据中
4. 使用 v-for 循环渲染到每个 item 项

### 改造 九宫格 区域样式

### 改造 新闻资讯 路由链接

### 新闻资讯 页面制作
1. 绘制界面，使用 MUI 中的 media-list.html
2. 使用 vue-resource 获取数据
3. 渲染真实数据

### 实现 新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link, 同时在跳转的时候提供唯一的Id标识符
2. 创建新闻详情组件页面 NewsInfo
3. 在路由模块中，将 新闻详情的 路由地址和组件页面 对应起来

### 实现 新闻页面 布局和获取数据

### 单独封装一个 comment.vue 评论子组件
1. 先创建一个 单独的 commont.vue 组件模板
2. 在需要使用 commont 组件的 页面中，先手动导入 commont 组件
 + `import comment form './comment.vue'`
3. 在父组件中，使用 `component` 属性，将刚才导入 commrnt 组件，注册为自己的组件
4. 将注册子组件时候的 注册名称 以标签形式 在页面中 引用即可

### 获取所有放入评论数据显示到页面中

### 实现点击 加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让 pageIdex++,然后重新调用 this.getComments() 方法重新获取最新一页的数据
3. 为了防止 新数据 覆盖老数据的情况，我们在 点击加载更多的时候，每当获取到新数据，是 老数据调用 concat 的方式 拼接新数据

### 发表评论
1. 把文本框做双向数据绑定
2. 为发表评论按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则Toast提示用户 评论内容不能为空
4. 通过 vue-resource 发送一个请求，把评论内容提交给到 服务器
5. 当发表评论OK后，重新刷新列表，以查看最新的评论
  + 如果调用 getComments 方法重新刷新评论列表的话，可能只能得到 最后一项的评论，前几页的评论获取不到
  + 换一种方式: 当评论成功后，在客户端，手动拼接出一个 最新的评论对象 然后调用 数组的 unshift 方法,追加到 data 中 comments 的开头；这样就能完美实现刷新评论列表的需求 

### 改造图片分析 按钮为 路由的链接并显示对应的组件页面

### 绘制 图片列表 组件页面并美华样式
1. 制作 顶部的滑动条
2. 制作 底部的图片列表

### 使用 MUI 的顶部滑动块的坑
1. 滑动块无法正常触发滑动，通过检查官方文档，发现这个是JS组件，需要被初始化一下：
  + 导入 mui.js
  + 调用官方的 方式 初始化:
  ```
  mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  ```
2. 在初始化 滑动条 的时候，导入的 mui.js 但是控制报错:
    `Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`
    + 推测原因: 可能是mui.js中用到了 'caller' 'callee' and 'arguments' ,但是 webpack 打包好的 bundle.js中，默认是启用严格模式的，所以这两者冲突了
    + 解决方案: 1. 把mui.js中非严格代码修改掉(不现实) 2. 把webpack打包的严格模式移除
    + 最终 选择 移除严格模式：使用插件 [babel-plugin-transform-remove-strict-mode](https://github.com/yujiansheng/babel-plugin-transform-remove-strict-mode)

3. 刚进入 图片分享页面的时候，滑动条无法正常工作，经过分析发现，如果要初始化滑动条，必须等到 DOM 元素加载完毕，所以我们把滑动条的代码搬到了 mounted 生命周期函数中；
4. 当滑动条调试好后，发现 tabbar 无法正常工作，这时候我们需要把每个 tabbar 按钮的央视中 `mui-tab-item` 重新改一下名字
5. 获取所有分类，并渲染 分类列表

### 制作图片列表区域
1. 图片列表使用懒加载，使用 Mint-UI 的组件`lazy-load`
2. 导入并使用 `lazy-load` 
3. 渲染图片数据

### 实现了 图片列表的 懒加载改造和样式美化
1. 在改造 li 成 router-link 的时候，需要使用 tag 属性指定要渲染为 那种元素
 
### 实现 详情页面的布局和美化，同时获取数据渲染页面

### 尝试在手机上 去进行项目的预览和测试
1. 要保证自己的手机可以正常使用
2. 要保证 手机 和 PC 在同一 WIFI 中
3. 在项目 package.json 中添加 --hoost 指令 把当前 PC 的ip设为 --host的值