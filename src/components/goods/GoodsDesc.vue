<template>
<div class="goodsdesc-container">
    <h3>{{info.title}}</h3>
    <hr>
    <p v-html="info.content"></p>
</div>
</template>
<script>
export default {
  data () {
    return {
        id:this.$route.params.ID,
        info:{}
    };
  },
  created() {
      this.getGoodsDesc();
  },
  methods: {
    getGoodsDesc(){
        this.$http.get('api/goods/getdesc/'+this.id)
        .then(result=>{
            if(result.body.staus===0){
                this.info = result.body.message[0];
            }else{
                Toast('获取商品图文详情失败')
            }
        },result=>{
            //Toast('获取商品图文详情,网络请求失败');
            this.info = {
                title:'科比·布莱恩特',
                content:'<p style="text-indent:2em">4点的洛杉矶是什么样子，科比就自问自答：“满天星星，寥落的灯光，行人很少。究竟是什么样子，我也不太清楚。但这没有关系，你说是吗?每天早上4点，洛'
                +'杉矶仍然在黑暗中，我就起床行走在黑暗的洛杉矶街道上……”科比讲到这里，我终于意识到清晨4点为什么跟科比的成功有关系，身为一名篮球运动员，他坚持每天清晨4点就起床，除了去做体能训练和投'
                +'篮练习，还能做什么?据科比自己讲，他这样坚持了一天又一天，洛杉矶清晨4点的黑暗始终没有改变，而他却逐渐发生了变化，就好像光明一点一点地来到他的人生里，让他从一个默默无闻的人变成一个'
                +'万众瞩目的明星。“10多年过去了，洛杉矶早晨4点的黑暗仍然没有改变，但我已变成了肌肉强健、有体能、有力量、有着很高投篮命中率的运动员。”科比说。</p>'
                +'<img style="width:100%" src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=33599b701fce36d3b6098b625b9a51e2/9e3df8dcd100baa1a5fd20114d10b912c9fc2e42.jpg">'
                +'<img style="width:100%" src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=1083a105d90735fa85fd46ebff3864d6/b219ebc4b74543a939bdf9d213178a82b901140d.jpg">'
                +'<img style="width:100%" src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7167721b3d4e251ff6faecaac6efa272/6f061d950a7b02084ba7efc06fd9f2d3572cc8a1.jpg">'
                +'<img style="width:100%" src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=8db87421df1b0ef478e5900cbcad3abf/08f790529822720e2589def576cb0a46f21fab7d.jpg">'
                +'<img style="width:100%" src="https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7852a142728b4710da22f59ea2a7a898/622762d0f703918f621f64a9513d269758eec483.jpg">'
                +'<img style="width:100%" src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=9f52057df636afc31a013737d27080a1/9f2f070828381f307539c514a8014c086e06f06f.jpg">'
            }
        })
    }
  },
}
</script>
<style lang="scss" scoped>
.goodsdesc-container{
    padding:4px;
    h3{
        color:#226aff;
        font-size: 16px;
        text-align: center;
        margin:15px 0;
    }
}
</style>