<template>
<div class="cmt-container">
    <h3>发表评论</h3><hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>
    <mt-button type='primary' size='large'>发表评论</mt-button>
    <!-- 评论区 -->
    <div class="cmt-list">
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:00:12
            </div>
            <div class="cmt-body">
                第一次看到以亿为单位的收听量
            </div>
        </div>
    </div>
        <div class="cmt-list">
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:00:12
            </div>
            <div class="cmt-body">
                第一次看到以亿为单位的收听量
            </div>
        </div>
    </div>
        <div class="cmt-list">
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:00:12
            </div>
            <div class="cmt-body">
                第一次看到以亿为单位的收听量
            </div>
        </div>
    </div>
        <div class="cmt-list">
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:00:12
            </div>
            <div class="cmt-body">
                第一次看到以亿为单位的收听量
            </div>
        </div>
    </div>
        <div class="cmt-list">
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:00:12
            </div>
            <div class="cmt-body">
                第一次看到以亿为单位的收听量
            </div>
        </div>
    </div>
    <mt-button type='danger' size='large' plain>加载更多</mt-button>
</div>
</template>
<script>
export default {
  name: "comment",
  data () {
    return {
    };
  }
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