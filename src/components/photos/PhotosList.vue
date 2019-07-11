<template>
  <div>
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a class="mui-control-item mui-active">推荐</a>
        <a class="mui-control-item">热点</a>
        <a class="mui-control-item">北京</a>
        <a class="mui-control-item">社会</a>
        <a class="mui-control-item">娱乐</a>
        <a class="mui-control-item">科技</a>
      </div>
    </div>
  </div>
</template>
<script>
//1.导入mui的js文件
import mui from "../../lib/mui/js/mui";
//2.初始化滑动控件
mui(".mui-scroll-wrapper").scroll({
  deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

export default {
  name: "photolist",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
*{
  touch-action: pan-y;
}
</style>