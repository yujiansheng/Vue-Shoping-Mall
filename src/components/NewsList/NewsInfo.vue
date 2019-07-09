<template>
<div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{newsinfo.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
        <span>发表时间:{{newsinfo.add_time|dateFormat}}</span>
        <span>点击:{{newsinfo.click}}次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content" >&nbsp;&nbsp;&nbsp;&nbsp;{{newsinfo.content+newsinfo.content}}</div>
    
    <!-- 评论区域 -->
    <comment-box :id='this.id'></comment-box>
</div>
</template>
<script>
import comment from '../subcompontents/comment.vue'
export default {
  name: "newsinfo",
  data () {
    return {
        id:this.$route.params.ID,//将url传过来的id值挂载在data上面
        newsinfo:{
            id:14,
            title:'第一次看到以亿为单位的收听量',
            click:3,
            add_time:'2019-06-09T13:50:56.000Z',
            content:'少一些抱怨吧，珍惜你所拥有的，不要在以后的某个日子，你怀揣歉意对自己说，假如重新来过，我一定不会怎样怎样。可是我想说，假如真的给你一次重新来过的机会，又有多少人能够百分百活成你说的样子……你没见过，物似人非的样子？'
        }
    };
  },
  methods: {
      getNewsInfo(){
          this.$http.get('api/getnews/'+this.id).then(result=>{
              if(result.body.status===0){
                  this.newsinfo =result.body.message[0];
              }else{
                  Toast('获取新闻内容失败')
              }
          },result=>{
              Toast('获取新闻内容,网络请求失败')
          })
      }
  },
  components:{//用来注册子组件
      'comment-box':comment
  }
}
</script>
<style lang="scss" scoped>
.newsinfo-container{
    padding:0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin:15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display: flex;
        justify-content:space-between;
    }
    .content{
        img{
            width: 100%
        }
    }
}
</style>