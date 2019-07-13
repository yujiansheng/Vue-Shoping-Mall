<template>
  <div class="goodsinfo-container">
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-if="ballFlag" ref="ball"></div>
      </transition>
    <!-- 商品轮播区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <swiper :lunbotulist="list" :isfull='false'></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p class="price">
                市场价: <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;
                销售价: <span class="now_price">￥{{goodsinfo.sell_price}}</span>
            </p>
            <p>购买数量: <numbox @getcount='getSelectedCount' :max='goodsinfo.stock_quantity'></numbox></p>
            <p>
                <mt-button type='primary' size='small'>立即购买</mt-button>
                <mt-button type='danger' size='small' @click="addToShopCar">加入购物车</mt-button>
            </p>
        </div>
      </div>
    </div>
    <!-- 商品详情区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p>商品货号:{{goodsinfo.goods_no}}</p>
            <p>库存情况:{{goodsinfo.stock_quantity}}个</p>
            <p>上架时间:{{goodsinfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
          <mt-button type='primary' size='large' plain @click="goodsdesc(id)">图文详情</mt-button>
          <mt-button type='danger' size='large' plain @click='gocomment(id)'>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from '../subcompontents/swiper.vue'
import numbox from '../subcompontents/goodsinfo_numbox.vue'
export default {
  data() {
    return {
        id:this.$route.params.ID,
        list:[],
        goodsinfo:{},
        ballFlag:false,//控制小球隐藏和显示
        selectedcount:1//购买数量默认为1
    };
  },
  components:{swiper,numbox},
  created() {
      this.getLunBoTu();
      this.getGoodsInfo();
  },
  methods: {
      getLunBoTu(){
          this.$http.get('api/getthumbimages/'+this.id).then(result=>{
              if(result.body.status===0){
                  this.list = result.body.message;
              }else{
                  Toast('获取商品轮播图失败')
              }
          },result=>{
             //  Toast('获取商品轮播图，网络请求失败');
               this.list=[{url:12,img:'http://img14.360buyimg.com/n1/s450x450_jfs/t30844/352/184888909/271400/2e654ec0/5bea36fcN60094750.jpg'},
            {url:13,img:'http://img14.360buyimg.com/n1/s450x450_jfs/t18928/51/14749798/124270/4ffeab2d/5a578a60N66363680.jpg'},
            {url:14,img:'http://img14.360buyimg.com/n1/s450x450_jfs/t18025/239/17853309/181729/a6fb5046/5a578a72Nb653733c.jpg'},
            {url:15,img:'http://img14.360buyimg.com/n1/s450x450_jfs/t19060/53/14045672/33701/4d6c6adb/5a578a72N7ca305e8.jpg'}]
          })
      },
      getGoodsInfo(){
          this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
              if(result.body.status===0){
                  this.goodsinfo = result.body.message;
              }else{
                  Toast('获取商品详情失败')
              }
          },result=>{
               //Toast('获取商品详情,网络请求失败');
               this.goodsinfo={
                   id:80,
                   add_time:'2019-04-19T17:23:40.000Z',
                   goods_no:"SD235645792312",
                   market_price:6399,
                   sell_price:5199,
                   stock_quantity:18,
                   title:'Hasee/神舟 战神Z6/Z7M/G7M 英特尔九代酷睿i7/i5 GTX1650独显游戏本 15.6吋窄边'
               }
          })
      },
      goodsdesc(id){
        this.$router.push({name:'goodsdesc',params:{ID:id}})
      },
      gocomment(id){
        this.$router.push({name:'goodscomment',params:{ID:id}})
      },
      addToShopCar(){
          this.ballFlag=!this.ballFlag;
          setTimeout(() => { 
          var goodsinfo = {id:this.id,count:this.selectedcount,price:this.goodsinfo.sell_price,selected:false}
          this.$store.commit('addToCar',goodsinfo);
          }, 600);
      },
      beforeEnter(el){
          el.style.transform = 'translate(0,0)'
      },
      enter(el,done){
          el.offsetWidth;

          //小球优化思路：
          //1.先分析 动画不准确 本质原因：小球位移的位置被固定了
          //2.分辨率 和 位置不一样的时候就会有问题
          //3.如果能够根据不同情况计算坐标
          //4.解决：得到 徽标的 xy坐标 和 小球的开始的xy坐标 然后 xy分别求差 就是小球位移的xy距离
          
          //获取小球在页面的初始位置--（计数盒子的正中间）
          //小球的位置 
          let ballPosition = this.$refs.ball.getBoundingClientRect();
         // let ballStartPosition = document.getElementById('numberbox').getBoundingClientRect();
          let ballEndPosition = document.getElementById('badge').getBoundingClientRect();
          
          let xDist = ballEndPosition.left - ballPosition.left;
          let yDist = ballEndPosition.top - ballPosition.top;

          el.style.transform = `translate(${xDist}px, ${yDist}px)`;
          el.style.transition = 'all 0.6s cubic-bezier(.44,-0.26,.76,.82)';
          done();
      },
      afterEnter(el){
          this.ballFlag=!this.ballFlag;
      },
      getSelectedCount(count){
          this.selectedcount = count;
          //console.log(`父组件拿到的数量：${this.selectedcount}`);
      }
  }
};
</script>
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #ccc;
    overflow: hidden;
    .now_price{
        font-size: 16px;
        color: red;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin:10px 0;
        }
    }
    .ball{
        background-color: red;
        width:15px;
        height: 15px;
        border-radius: 50%;
        position:absolute;
        z-index: 99;
        top:409px;
        left:142px;
    }
}
</style>