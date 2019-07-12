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
    <div class="content" v-html="newsinfo.content"></div>
    
    <!-- 评论区域 -->
    <comment-box :id='this.id'></comment-box>
</div>
</template>
<script>
import comment from '../subcompontents/comment.vue'
export default {
  data () {
    return {
        id:this.$route.params.ID,//将url传过来的id值挂载在data上面
        newsinfo:{
            id:14,
            title:'科比-天才之所以伟大源于学习',
            click:3,
            add_time:'2019-06-09T13:50:56.000Z',
            content:'<p style="text-indent:2em;">科比堪称NBA最勤奋的球员，他的人生信条就是：篮球就是生命。科比的天赋也许不是联盟中最顶级的，'
            +'但所有人都听说他的洛杉矶凌晨四点太阳的故事，科比正是通过不断的练习，将自己训练成一部篮球机器，不断学习和完善自己的篮球技巧，终于修炼成一代篮球大神。'
            +'</p><img style="width:100%" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3314342572,928780460&fm=173&s=0370588748D289ED5ED5CC9D03004083&w=600&h=295&img.JPEG"/>'
            +'<img style="width:100%" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3344292755,3771886723&fm=173&s=92D3E32589529ED8141C759703007082&w=599&h=297&img.JPEG"/>'
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
              //Toast('获取新闻内容,网络请求失败')
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