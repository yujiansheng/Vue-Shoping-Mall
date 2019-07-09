<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
       <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src='item.img_url'/>
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.addtime|dateFormat}}</span>
              <span>点击: {{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "newslist",
  data() {
    return {
      newslist: [
        {
          id: 13,
          title: "一季度多家房产企业利润跌幅超50% 去库存促销战打响",
          addtime: "2019-06-09T13:50:56.000Z",
		  zhaiyao:"网易云每周二都会推这个华语速爆歌单，删掉旧歌，换成新歌，有过亿播放量，是正常的现象，迟早会破十亿。",
		  click:1,
		  img_url:'http://p3.music.126.net/VVTIvUYPm8kzf-iajk8KNg==/109951163015861198.jpg?param=30y30'
        },
        {
          id: 14,
          title: "第一次看到以亿为单位的收听量",
          addtime: "2019-06-09 13:50:56",
		  zhaiyao:"网易云每周二都会推这个华语速爆歌单，删掉旧歌，换成新歌，有过亿播放量，是正常的现象，迟早会破十亿。",
		  click:1,
		  img_url:'https://p2.music.126.net/v32suwzUfCQ1P-abLmtMlA==/1399678310951241.jpg?param=50y50'
		},
		 {
          id: 15,
          title: "网易云每周二都会推这个华语速爆歌单",
          addtime: "2019-06-09 13:50:56",
		  zhaiyao:"网易云每周二都会推这个华语速爆歌单，删掉旧歌，换成新歌，有过亿播放量，是正常的现象，迟早会破十亿。",
		  click:1,
		  img_url:'https://p2.music.126.net/-iqKaKkeXspuTo5KIlvWLg==/109951163921051058.jpg?param=50y50'
		},
		 {
          id: 16,
          title: "有过亿播放量，是正常的现象，迟早会破十亿",
          addtime: "2019-06-09 13:50:56",
		  zhaiyao:"网易云每周二都会推这个华语速爆歌单，删掉旧歌，换成新歌，有过亿播放量，是正常的现象，迟早会破十亿。",
		  click:1,
		  img_url:'https://p2.music.126.net/kVWIpjO3oRx5tjyM9olPIg==/109951163353305572.jpg?param=50y50'
        },
		 {
          id: 17,
          title: "有过亿播放量，是正常的现象，迟早会破十亿",
          addtime: "2019-06-09 13:50:56",
		  zhaiyao:"网易云每周二都会推这个华语速爆歌单，删掉旧歌，换成新歌，有过亿播放量，是正常的现象，迟早会破十亿。",
		  click:1,
		  img_url:'https://p2.music.126.net/O9iyWFTnffPxBhMwhtbBKg==/109951164163877432.jpg?param=50y50'
        },
		 {
          id: 18,
          title: "有过亿播放量，是正常的现象，迟早会破十亿",
          addtime: "2019-06-09 13:50:56",
		  zhaiyao:"网易云每周二都会推这个华语速爆歌单，删掉旧歌，换成新歌，有过亿播放量，是正常的现象，迟早会破十亿。",
		  click:1,
		  img_url:'https://p2.music.126.net/jCu2qept4TnxB5JJVMnyFg==/109951164066272215.jpg?param=50y50'
        },
		 {
          id: 19,
          title: "有过亿播放量，是正常的现象，迟早会破十亿",
          addtime: "2019-06-09 13:50:56",
		  zhaiyao:"网易云每周二都会推这个华语速爆歌单，删掉旧歌，换成新歌，有过亿播放量，是正常的现象，迟早会破十亿。",
		  click:1,
		  img_url:'https://p2.music.126.net/T5gU0OkgYU8UzBWIOVuqWA==/109951164138632114.jpg?param=50y50'
        },
		 {
          id: 20,
          title: "有过亿播放量，是正常的现象，迟早会破十亿",
          addtime: "2019-06-09 13:50:56",
		  zhaiyao:"网易云每周二都会推这个华语速爆歌单，删掉旧歌，换成新歌，有过亿播放量，是正常的现象，迟早会破十亿。",
		  click:1,
		  img_url:'https://p2.music.126.net/5mzwDR9sSS8rEM0MY5ZfSA==/109951163955109900.jpg?param=50y50'
        },
		 {
          id: 21,
          title: "有过亿播放量，是正常的现象，迟早会破十亿",
          addtime: "2019-06-09 13:50:56",
		  zhaiyao:"网易云每周二都会推这个华语速爆歌单，删掉旧歌，换成新歌，有过亿播放量，是正常的现象，迟早会破十亿。",
		  click:1,
		  img_url:'https://p1.music.126.net/XtJV0GXJLiEME9oMOPOOTQ==/109951164187518264.jpg?param=50y50'
        },
		 {
          id: 22,
          title: "有过亿播放量，是正常的现象，迟早会破十亿",
          addtime: "2019-06-09 13:50:56",
		  zhaiyao:"网易云每周二都会推这个华语速爆歌单，删掉旧歌，换成新歌，有过亿播放量，是正常的现象，迟早会破十亿。",
		  click:1,
		  img_url:'https://p1.music.126.net/Vlrmx1aLtEGDaHwbPILXEg==/109951164202809460.jpg?param=50y50'
        }
      ]
    };
  },
  created() {
	  //this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          //如果成功，把数据保存到data上
          this.newslist = result.body.message;
        } else {
          Toast("获取新闻列表失败");
        }
	  },result=>{
		  Toast("获取新闻列表,网络请求失败");
	  });
    }
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>