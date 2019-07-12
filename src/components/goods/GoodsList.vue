<template>
<div class="goods-list">
   <!-- <router-link :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in goodslist" :key="item.addtime" tag="div">
       <img :src="item.img_url" alt="" srcset="">
       <h1 class="title">{{item.title}}</h1>
       <div class="info">
           <p class="price">
               <span class="now">¥{{item.sell_price}}.00</span>
               <span class="old">¥{{item.market_price}}.00</span>
           </p>
           <p class="sell">
               <span>热卖中</span>
               <span>{{item.stock_quantity}}</span>
           </p>
       </div>
   </router-link> -->

    <!-- 在网页中有两种跳转方式，1.使用a标签跳转 2.使用 windos.loction.href 的形式，叫做 编程式导航-->
   <div class="goods-item" v-for="item in goodslist" :key="item.addtime" @click="goDetail(item.id)"> 
       <img :src="item.img_url" alt="" srcset="">
       <h1 class="title">{{item.title}}</h1>
       <div class="info">
           <p class="price">
               <span class="now">¥{{item.sell_price}}.00</span>
               <span class="old">¥{{item.market_price}}.00</span>
           </p>
           <p class="sell">
               <span>热卖中</span>
               <span>{{item.stock_quantity}}</span>
           </p>
       </div>
   </div>

    <mt-button type='danger' size='large' @click="getMore">加载更多</mt-button>
</div>
</template>
<script>
export default {
  data () {
    return {
        pageindex:1,//分页页数
        goodslist:[]//存放商品的数组
    }; 
  },
  created() {
      this.getGoodsList();
  },
  methods: {
      getGoodsList(){
          this.$http.get('api/getgoods?adgeindex='+this.pageindex).then(result=>{
              if(result.body.status===0){
                  this.goodslist = this.goodslist.concat(result.body.message);
              }else{
                  Toast('获取商品列表失败')
              }
          },result=>{
             // Toast('获取商品列表,网络请求失败')
             this.goodslist = this.goodslist.concat([{id:60,
             title:'Hasee/神舟 战神Z6/Z7M/G7M 英特尔九代酷睿i7/i5 GTX1650独显游戏本 15.6吋窄边',
             add_time:new Date(),
             zhaiyao:"Hasee/神舟 战神Z6/Z7M/G7M 英特尔九代酷睿i7/i5 GTX1650独显游戏本 15.6吋窄边",
             click:1,
             img_url:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/255921860/O1CN01YWBy0y1PbvDxwlbcY_!!0-item_pic.jpg_250x250.jpg_.webp',
             sell_price:4699,
             market_price:5599,
             stock_quantity:60},
             {id:61,
             title:'ThinkPad E490 20N8002UCD 英特尔酷睿i5 14英寸 轻薄固态硬盘窄边框便携商务办公 手提笔记本电脑2019新款',
             add_time:new Date(),
             zhaiyao:"ThinkPad E490 20N8002UCD 英特尔酷睿i5 14英寸 轻薄固态硬盘窄边框便携商务办公 手提笔记本电脑2019新款",
             click:1,
             img_url:'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2955374408/O1CN01MbWNE91iQuOuEb55H_!!0-item_pic.jpg_250x250.jpg_.webp',
             sell_price:5299,
             market_price:6999,
             stock_quantity:160},
             {id:62,
             title:'【下单立减600元】Apple/苹果 MacBook Air 13.3英寸128G 笔记本手提电脑 轻薄便携商务办公QD32',
             add_time:new Date(),
             zhaiyao:"【下单立减600元】Apple/苹果 MacBook Air 13.3英寸128G 笔记本手提电脑 轻薄便携商务办公QD32",
             click:1,
             img_url:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2616970884/O1CN01RUJNn51IOufIxsgZS_!!0-item_pic.jpg_250x250.jpg_.webp',
             sell_price:6188,
             market_price:6188,
             stock_quantity:100}])
          })
      },
      getMore(){
          this.pageindex++;
          this.getGoodsList();
      },
      goDetail(id){
          //使用js形式进行路由导航

          //区分 this.$route 和 this.$router 这两个对象
          // this.$route 是路由【参数对象】，所有路由中的参数，params，query都属于它
          // this.$router 是路由【导航对象】， 用它方便使用 JS 代码实现路由的前后跳转
          this.$router.push({name:'goodsinfo',params:{ID:id}});
      }
  },
}
</script>
<style lang="scss" scoped>
.goods-list{
    display:flex;
    flex-wrap:wrap;
    padding:7px;
    justify-content:space-between;
    .goods-item{
         width:49%;
         border: 1px solid #ccc;
         box-shadow: 0 0 2px #ccc;
         margin:4px 0;
         padding: 2px;
         display: flex;
         flex-direction: column;
         justify-content:space-between;
         min-height: 293px;
         img{
             width:100%
         }
         .title{
             font-size: 14px;
             max-height: 56px;
             overflow: hidden;
         }
         .info{
             background-color: #eee;
             p{
                 margin:0;
                 padding:5px;
             }
             .price{
                 .now{
                     color: red;
                     font-size: bold;
                     font-size: 16px;
                 }
                 .old{
                     text-decoration: line-through;
                     font-size: 12px;
                     margin-left: 10px;
                 }
             }
             .sell{
                  display:flex;
                  justify-content:space-between;
                  font-size: 13px;
             }
         }
    }
}
</style>