<template>
<div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
            <img :src='item.img'>
        </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist">
             <img src="../../images/menu1.png" alt="" srcset="">
             <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/photolist">
                <img src="../../images/menu2.png" alt="" srcset="">
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <img src="../../images/menu3.png" alt="" srcset="">
                 <div class="mui-media-body">商品购买</div>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <img src="../../images/menu4.png" alt="" srcset="">
                 <div class="mui-media-body">留言反馈</div>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <img src="../../images/menu5.png" alt="" srcset="">
                 <div class="mui-media-body">视频专区</div>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <img src="../../images/menu6.png" alt="" srcset="">
                 <div class="mui-media-body">联系我们</div> 
        </li>
    </ul>
</div>
</template>
<script>
export default {
  name: "home",
  data () {
    return {
        lunbotulist:[
            {url:12,img:'https://7n.w3cschool.cn/attachments/knowledge/201904/86459.png'},
            {url:13,img:'https://7n.w3cschool.cn/attachments/knowledge/201906/69680.png'},
            {url:14,img:'https://7n.w3cschool.cn/attachments/knowledge/201901/42502.png'}

        ]//保存轮播图的数据
    };
  },
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
.mint-swipe{
    height:200px;
    .mint-swipe-item{
        // &:nth-child(1){//&是交集选择器的意思
        //     background-color:yellowgreen;
        // }
        //    &:nth-child(2){//&是交集选择器的意思
        //     background-color:violet;
        // }
        //    &:nth-child(3){//&是交集选择器的意思
        //     background-color:yellow;
        // }
        img{
            width:100%;
            height:100%;
        }
    }
}

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