# Jiansheng YU

## 这是最新尝试的Vue项目

### 纪录本身 即是反抗 

#### [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

## 用传统方式（命令行）将修改后的代码上传到Github
1. git add .
2. git commit -m '提示信息'
3. git push   

## 制作首页APP组件
1. 完成 Header 区域，使用的是 Mint-UI 中的 Header 组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
  + 在制作 购物车 小图标时，还有一些前置操作
  + 先拷 扩展图标的 css 样式（icons-extra.css），到项目中
  + 再拷 扩展字体的 ttf 文件（mui-icons-extra.ttf），到项目中
  + 购物车的小图标 样式为 'mui-icon-extra mui-icon-extra-cart'
3. 要在中间区域防止一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 使用 vue-resource 获取数据
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到数据后，保存到data身上的数据中
4. 使用 v-for 循环渲染到每个 item 项

## 改造 九宫格 区域样式