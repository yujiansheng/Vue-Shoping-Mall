<template>
<div>
    <swiper :lunbotulist="lunbotulist" :isfull='true'></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist">
             <img src="../../images/7-140126204109.jpg" alt="" srcset="">
             <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/photolist">
                <img src="../../images/212054F21-12.jpg" alt="" srcset="">
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/goodslist">
                 <img src="../../images/212054ME-1.jpg" alt="" srcset="">
                 <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <img src="../../images/7-140126204122.jpg" alt="" srcset="">
                 <div class="mui-media-body">留言反馈</div>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <img src="../../images/2120543X2-4.jpg" alt="" srcset="">
                 <div class="mui-media-body">视频专区</div>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <img src="../../images/7-140126204138.jpg" alt="" srcset="">
                 <div class="mui-media-body">联系我们</div> 
        </li>
    </ul>
</div>
</template>
<script>
import swiper from '../subcompontents/swiper.vue'
export default {
  data () {
    return {
        lunbotulist:[
            {url:12,img:'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/06/08/ChMkJ1ZXvYuIBgwTAAS3zVB-lRIAAFZcgEg_uUABLfl181.jpg'},
            {url:13,img:'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/06/08/ChMkJlZXvYqIPy0OAAJWwmQJENgAAFZcgC8OioAAlba296.jpg'},
            {url:14,img:'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=ea8aabe1a40f4bfb98dd960662261395/5ab5c9ea15ce36d3bdb1474e3af33a87e950b113.jpg'},
            {url:15,img:'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/06/08/ChMkJ1ZXvY2IB6zUAAWs1p-R0l8AAFZcgIrkVsABazu054.jpg'}

        ]//保存轮播图的数据
    };
  },
  components:{swiper},
  created() {
      //this.getLunbotu();
  },
  methods: {
      getLunbotu(){
          this.$http.get('api/getlunbo').then(result=>{
             if(result.body.status===0){
                 //成功
                this.lunbotulist = result.body.message;
             }else{
                 //失败
                Toast('加载轮播图失败...')
             }
          },(respones)=>{
              Toast('请求失败...')
          })
      }
  },
}
</script>
<style lang="scss" scoped>

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border:none;
    img{
        width:60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    background-color: #fff;
    border:none;
}
</style>