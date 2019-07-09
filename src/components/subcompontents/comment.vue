<template>
<div class="cmt-container">
    <h3>发表评论</h3><hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>
    <mt-button type='primary' size='large'>发表评论</mt-button>
    <!-- 评论区 -->
    <div class="cmt-list">
        <div class="cmt-item" v-for="(item, i) in comments" :key="i">
            <div class="cmt-title">
                第{{i+1}}楼&nbsp;&nbsp;用户 : {{item.user_name}}&nbsp;&nbsp;发表时间 : {{item.add_time | dateFormat}}
            </div>
            <div class="cmt-body">
               {{item.content||'此用户很懒，没有留下评论'}}
            </div>
        </div>
    <mt-button type='danger' size='large' plain @click='getMore'>加载更多</mt-button>
    </div>
</div>
</template>
<script>
export default {
  name: "comment",
  data () {
    return {
        pageIndex:1,//默认展示第一页数据
        comments:[
            {user_name:'匿名用户',add_time:'2016-02-15T10:19:03.000Z',content:'我来踩一下！'},
            {user_name:'小明同学',add_time:'2015-04-19T22:19:30.000Z',content:null},
            {user_name:'Tom Ming',add_time:'2015-04-19T20:09:30.000Z',content:'这个网站是真的吊！'}
            ]
    };
  },
  created() {
    //  this.getComments();
  },
  methods: {
      getComments(){//获取评论
          this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(result=>{
              if(result.body.status===0){
                  //每当获取新数据时，应当使用老数据拼接老数据，而不是直接覆盖
                  this.comments=this.comments.concat(result.body.message) ;
              }else{
                  Toast('获取评论失败')
              }
          },result=>{
               Toast('获取评论,网络请求失败');
               this.comments=this.comments.concat(this.comments) ;
          })
      },
      getMore(){
          this.pageIndex++;
          this.getComments();

      }
  },
  props:['id']//接收父组件的传值
} 
</script>
<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin:0;
    }
    .cmt-list{
        margin:5px 0;
        .cmt-item{
            font-size: 13px;
          .cmt-title{
            background-color: #ccc;
            line-height: 30px;
          }  
          .cmt-body{
            text-indent: 2em;
            line-height: 35px;
          }
        }
    }
}
</style>