<template>
<div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
            <img :src='item.img'>
        </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu1.png" alt="" srcset="">
                <div class="mui-media-body">新闻资讯</div></a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt="" srcset="">
                <div class="mui-media-body">图片分享</div></a></li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                 <img src="../../images/menu3.png" alt="" srcset="">
                <div class="mui-media-body">商品购买</div></a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                 <img src="../../images/menu4.png" alt="" srcset="">
                <div class="mui-media-body">留言反馈</div></a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                 <img src="../../images/menu5.png" alt="" srcset="">
                <div class="mui-media-body">视频专区</div></a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                 <img src="../../images/menu6.png" alt="" srcset="">
                <div class="mui-media-body">联系我们</div></a> 
        </li>
    </ul>
</div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  name: "home",
  data () {
    return {
        lunbotulist:[
            {url:12,img:'http://sinastorage.com/storage.zone.photo.sina.com.cn/focus/201906/3dff551f890f292b7d262c2198d55247.jpg?&ssig=eVpJMY16Vo&KID=sina,slidenews&Expires=1562236055'},
            {url:13,img:'http://sinastorage.com/storage.zone.photo.sina.com.cn/focus/201906/fd857e57d203dedef25cf00ee089a9f1.jpg?&ssig=ZrfTfGtGTA&KID=sina,slidenews&Expires=1562236055'},
            {url:14,img:'http://s.img.mix.sina.com.cn/auto/resize?size=328_218&img=http%3A%2F%2Fsinastorage.com%2Fstorage.zone.photo.sina.com.cn%2Fzone%2Fimg%2F20190510%2F1d8a20e0899d483f6a04c73e95e17f37.jpg%3F%26ssig%3D4WetwrCAy0%26KID%3Dsina%2Cslidenews%26Expires%3D1562231462'}

        ]//保存轮播图的数据
    };
  },
  created() {
     // this.getLunbotu();
  },
  methods: {
      getLunbotu(){
          this.$http.get('http://vue.studyit.io/api/getlunbo').then(result=>{
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