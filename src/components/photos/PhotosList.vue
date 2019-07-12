<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key='item.id' :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class='info'>
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
//1.导入mui的js文件
import mui from "../../lib/mui/js/mui";

export default {
  data() {
    return {
      cates:[//所有分类列表
        {title:"全部",id:0},
        {title:"都市",id:1},
        {title:"剧情",id:2},
        {title:"神话",id:3},
        {title:"科幻",id:4},
        {title:"动漫",id:5},
        {title:"纪录",id:6}
      ],
      list:[]//图片列表的数组
    };
  },
  mounted() {
    //当组件中的dom结构被渲染好并放到页面中，会执行这个 钩子函数
    //如果要操作元素，最好在 mounted 里面，因为，这个时候的DOM元素是最新的
    //2.初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  methods: {
   getAllCategory(){
      this.$http.get('api/getimgcategory').then(result=>{
        if(result.body.status===0){
          this.cates = req.body.message;
        }else{
          Toast('获取图片分类失败');
        }
      },result=>{
        //Toast('获取图片分类,网络请求失败');
      })
   },
   getPhotoListByCateId(cateid){
     //根据 分类id 获取图片列表
     this.$http.get('api/getimgcategory/'+cateid).then(result=>{
       if(result.body.status===0){
         this.list = result.body.message;
       }else{
         Toast('获取图片列表失败')
       }
     },result=>{
       //Toast('获取图片列表,网络请求失败');
       switch(cateid){
         case 0:
           this.list = [{id:30,title:'蜘蛛侠：英雄远征',img_url:'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=e4ea978ec2bf6c81e33a24badd57da50/c9fcc3cec3fdfc03ea2d905eda3f8794a5c226fa.jpg',zhaiyao:'最受关注嘅漫威超级英雄大片《蠄蟧侠：英雄远征》依旧由导演乔·沃茨执导，阿Tom·赫兰德继续饰演蠄蟧侠彼得·帕克。此次蠄蟧侠将前往欧洲展开新嘅征程，并将对抗由杰克·吉伦哈尔加盟饰演嘅大反派神秘客，赞达亚、雅各布·巴特朗、托尼·雷沃罗利等原班人马都将悉数回归。本片将于2019年7月5日北美上画，经历咗第一部嘅成长经历后，蠄蟧侠又会面临点嘅危机？敬请等咗好耐。'},
                        {id:31,title:'千与千寻',img_url:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2585813656,2994285865&fm=58&s=C5649A468F378ECC266911AC03008012',zhaiyao:'千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。千寻仓皇逃出，一个叫...'},
                        {id:32,title:'恶人传',img_url:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4062515309,1310512656&fm=58&s=60D339C44EA3A4D618C8B1130300F09A',zhaiyao:'该片讲述了嫉恶如仇，不择手段而被称为“疯狗”的重案组刑警与险遭连环杀手毒手的犯罪组织头目联手追捕连环杀手的故事...'},
                        {id:33,title:'阿拉丁',img_url:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1347801052,1056178250&fm=58&s=DE1E0CC7CC0AC6DC5E8AE5A90300301B',zhaiyao:'该片根据1992年的同名动画片改编，讲述了善良的穷小子阿拉丁和勇敢的茉莉公主浪漫邂逅，在可以满足主人三个愿望的神灯精灵帮助下，共同踏上寻找真爱和自我的魔幻冒险故事'},
                        {id:34,title:'绝杀慕尼黑',img_url:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1275041366,3629931729&fm=58&s=D7C504E642B3A7D65060D3A90300F005',zhaiyao:'该片讲述了发生在1972年慕尼黑奥运会的篮球锦标赛的决赛中，苏联篮球队打败了保持了36年全胜纪录的美国队的故事。'},
                        {id:35,title:'复仇者联盟4：终局之战',img_url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',zhaiyao:'在《复仇者联盟3：无限战争》的毁灭性事件过后，宇宙由于灭霸的行动而变得满目疮痍。无论前方将遭遇怎样的后果，复仇者联盟都必须在剩余盟友的帮助下再一次集结，以逆转灭霸的所作所为，彻底恢复宇宙的秩序'}]
           break;
           case 2:
             this.list = [{id:30,title:'快楽写真館 ~エロスは暗室の中に~',img_url:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1597241927,1689713474&fm=58&s=D686DEA6D64245FD64AB5DF90300F01A',zhaiyao:'Hideo Hamada是一家旧照相馆的店主，一位中日中人来到这里开发。 “我想你会对这张照片感到惊讶，请不要说任何话。”男人一直这样说并离开。 Hamada对完成的图片感到惊讶。出乎意料的是，这个世界上有一个美丽的年轻女子的裸体。 Hamada在图片中瞬间被抢走了一名女子...'},
                        {id:31,title:'千与千寻',img_url:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2585813656,2994285865&fm=58&s=C5649A468F378ECC266911AC03008012',zhaiyao:'千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。千寻仓皇逃出，一个叫...'}]
           break;
           case 1:
             this.list = [{id:32,title:'恶人传',img_url:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4062515309,1310512656&fm=58&s=60D339C44EA3A4D618C8B1130300F09A',zhaiyao:'该片讲述了嫉恶如仇，不择手段而被称为“疯狗”的重案组刑警与险遭连环杀手毒手的犯罪组织头目联手追捕连环杀手的故事...'},
                        {id:33,title:'阿拉丁',img_url:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1347801052,1056178250&fm=58&s=DE1E0CC7CC0AC6DC5E8AE5A90300301B',zhaiyao:'该片根据1992年的同名动画片改编，讲述了善良的穷小子阿拉丁和勇敢的茉莉公主浪漫邂逅，在可以满足主人三个愿望的神灯精灵帮助下，共同踏上寻找真爱和自我的魔幻冒险故事'}]
             break;
           default:
             this.list = [];     
       }
     })
   }
  }
};
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list{
  list-style: none;
  margin:0;
  padding:10px;
  padding-bottom:0;
  li{
    background-color: #ccc;
    text-align: center;
    margin-bottom:10px;
    box-shadow: 0 0 8px #999;
    position: relative;
    img{
      width:100%;
      vertical-align: top;
    }
    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      color:white;
      text-align: left;
      position:absolute;
      bottom:0;
      background-color: rgba(0, 0, 0,0.4);
      max-height: 85px;
      .info-title{
        font-size: 14px;
      }
      .info-body{
        font-size: 13px;
      }
    }
  }
}
</style>