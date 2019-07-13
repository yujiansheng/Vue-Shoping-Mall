<template>
<div class="shopcar-container">
  <!-- 商品列表区域 -->
  <div class="goodslist">
<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img src="http://img14.360buyimg.com/n1/s450x450_jfs/t30844/352/184888909/271400/2e654ec0/5bea36fcN60094750.jpg" alt="">
            <div class="info">
              <h1>Hasee/神舟 战神Z6/Z7M/G7M 英特尔九代酷睿i7/i5 GTX1650独显游戏本 15.6吋窄边</h1>
              <p>
                <span class="price">￥5199</span>
                <numbox></numbox>
                <a href="#" id="">删除</a>
              </p>
            </div>
					</div>
				</div>
			</div>
  </div>
<!-- 结算区域 -->
       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
</div>
</template>
<script>
import numbox from '../subcompontents/shopcar_numbox.vue'
export default {
  data () {
    return {
    };
  },
  components:{
    numbox
  }
}
</script>
<style lang="scss" scoped>
.shopcar-container{
  background-color: #eee;
  overflow: hidden;
  .goodslist{
    img{
      width: 60px;
      height: 60px;
    }
    h1{
      font-size: 13px;
    }
    .info{
      display: flex;
      flex-direction: column;//flex 纵向布局
      justify-content:space-between;
      .price{
        color: red;
      }
      p{
        margin:0;
      }
    }
    .mui-card-content-inner{
      display: flex;//flex布局 是内部元素横向排列
      align-items: center; //纵向居中
    }
  }
}
</style>