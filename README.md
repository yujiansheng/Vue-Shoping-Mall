# Jiansheng YU

## 这是最新尝试的Vue项目

### 纪录本身 即是反抗 

#### [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

## 用传统方式（命令行）将修改后的代码上传到Github
1. git add .
2. git commit -m '提示信息'
3. git push   

## 制作首页APP组件
1.完成 Header 区域，使用的是 Mint-UI 中的 Header 组件
2.制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
  + 在制作 购物车 小图标时，还有一些前置操作
  + 先拷 扩展图标的 css 样式（icons-extra.css），到项目中
  + 再拷 扩展字体的 ttf 文件（mui-icons-extra.ttf），到项目中
  + 购物车的小图标 样式为 'mui-icon-extra mui-icon-extra-cart'
3.要在中间区域防止一个 router-view 来展示路由匹配到的组件