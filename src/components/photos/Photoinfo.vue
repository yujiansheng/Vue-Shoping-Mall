<template>
  <div class="photoinfo-container">
    <h3 class="title">{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{photoinfo.add_time}}</span>
      <span>点击: {{photoinfo.click}}次</span>
    </p>
    <hr />
    <!-- 缩略图区域 -->
    <vue-preview :slides="slide1" class="preview"></vue-preview>
    <!-- 图片详情区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 评论区域 -->
    <comment-box :id="id"></comment-box>
  </div>
</template>
<script>
//导入评论组件
import comment from "../subcompontents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.ID,
      photoinfo: {},
      slide1: []
    };
  },
  components: {
    "comment-box": comment
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageinfo/" + this.id).then(
        result => {
          if (result.body.status === 0) {
            this.photoinfo = result.body.message[0];
          } else {
            Toast("获取图片详情失败");
          }
        },
        result => {
          //Toast("获取图片详情，网络请求失败");
          this.photoinfo = {
            title: "科比·布莱恩特 （美国篮球运动员）",
            add_time: "2019-06-09 13:50:56",
            click: 2,
            content:
              "<p style='text-indent:2em;'>科比分享了一个关于他和O.J.梅奥的小故事，2007年O.J.梅奥是全美高中第一篮球运动员，当时他参加了科比举办的篮球学院，有一次O.J.梅奥问科比可不可以和他一起训练，科比最后同意了，科比说：“是的，我明天三点钟过来接你。”第二天下午三点过后，O.J.梅奥并没有等来科比，科比回复他说：“我说的三点，是凌晨三点。”"
              +'克里斯波什和德维恩韦德上ESPN节目分享了一个故事，2008年奥运会的时候，当所有人都在睡觉的时候，科比每天早上在凌敏破晓时刻就起床训练。波什说：“当时我们在拉斯维加斯集训的时候，早上八点钟训练营的球员们刚准备早餐，我看到科比走进来，运动服被汗水湿透了，膝盖上覆辙冰块，手里拿着教练的战术板，我不知道他是几点起床，并且已经训练了几个小时。”韦德补充说：“所有人刚刚睡醒，都在打着哈欠，科比已经训练了超过3个小时，我看到他一整天都在练习。”</p>'
          };
        }
      );
    },
    getThumbs() {
      this.$http.get("api/getthumbimages/" + this.id).then(
        result => {
          if (result.body.status === 0) {
            this.slide1 = result.body.message;
          } else {
            Toast("获取缩略图失败");
          }
        },
        result => {
          //Toast("获取缩略图,网络请求失败");
          this.slide1 = [
            {
              src:
                "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2501728995,2386674915&fm=173&s=B69331CC090286531CC8F112030010D3&w=599&h=297&img.JPEG",
              msrc:
                "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2501728995,2386674915&fm=173&s=B69331CC090286531CC8F112030010D3&w=599&h=297&img.JPEG",
              alt: "picture1",
              title: "科比",
              w: 1200,
              h: 800
            },
            {
              src:
                "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3114478614,3173240181&fm=173&s=E6383EC74A523CD852958C2E03007043&w=600&h=299&img.JPEG",
              msrc:
                "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3114478614,3173240181&fm=173&s=E6383EC74A523CD852958C2E03007043&w=600&h=299&img.JPEG",
              alt: "picture2",
              title: "科比",
              w: 1200,
              h: 800
            },
            {
              src:
                "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2544488025,2240273300&fm=173&s=095443861859B7D08C4C8D9E03001042&w=599&h=297&img.JPEG",
              msrc:
                "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2544488025,2240273300&fm=173&s=095443861859B7D08C4C8D9E03001042&w=599&h=297&img.JPEG",
              alt: "picture2",
              title: "科比",
              w: 1200,
              h: 800
            }
          ];
        }
      );
    }
  }
};
</script>
<style lang="scss">
.photoinfo-container {
  padding: 0 3px;
  .title {
    color: #226aff;
    font-size: 13px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
  }
  .content {
    clear: both;
  }
}
/*图片预览 缩略图*/
.preview {
    padding: 0 10px;
    display:flex;
    justify-content:space-between;
  figure {
    float: left;
    width: 47%;
    height:calc(40vw - 0px);
    margin: 1.5%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>