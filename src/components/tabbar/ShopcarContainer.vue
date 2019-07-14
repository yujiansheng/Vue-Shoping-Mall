<template>
<div class="shopcar-container">
  <!-- 商品列表区域 -->
  <div class="goodslist">
<div class="mui-card" v-for="(item,index) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thumb_path" alt="" />
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initcount='$store.getters.getGoodsCount[item.id]' :goodsid='item.id'></numbox>
                <a href="#" @click.prevent="remove(item.id,index)">删除</a>
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
       goodslist:[]//购物车中所有商品的数据
    };
  },
  components:{
    numbox
  },
  created() {
    this.getGoodsList();
  },
  methods:{
    getGoodsList(){
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      if(idArr.length==0) return ;
      this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result=>{
        if(result.body.status===0){
             this.goodslist = result.body.message;
        }else{
          Toast('获取购物车商品列表失败')
        }
      },result=>{
        //Toast('获取购物车商品列表,网络请求失败');
      })
    },
    remove(id,i){
       this.goodslist.splice(i,1);
       this.$store.commit('removeFromCar',id);
    }
  }
}
</script>
<style lang="scss" scoped>
.shopcar-container{
  background-color: #eee;
  overflow: hidden;
  .goodslist{
    .mui-card-content-inner{
      display: flex;//flex布局 是内部元素横向排列
      align-items: center; //纵向居中
      img{
        width: 60px;
        height: 60px;
        flex-shrink:0;
      }
      .info{
        display: flex;
        flex-direction: column;//flex 纵向布局
        justify-content:space-between;
        h1{
          font-size: 13px;
        }
        .price{
          color: red;
        }
        p{
          margin:0;
        }
      }
    }
  }
}
</style>