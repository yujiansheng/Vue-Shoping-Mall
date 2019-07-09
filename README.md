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

<<<<<<< HEAD
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
=======
###测试
>>>>>>> 94c80baed485ac87393fb76ac4ffedd5e22bb654
