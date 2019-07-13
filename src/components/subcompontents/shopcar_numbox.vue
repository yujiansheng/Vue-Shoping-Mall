<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="numberbox" ref="numberbox" class="mui-input-numbox" type="number" value="1" @change='countChanged'/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
//1.导入mui的js文件
import mui from "../../lib/mui/js/mui";
export default {
  data() {
    return {};
  },
  methods: {
      countChanged(){
      }
  },
  mounted() {
      mui('.mui-numbox').numbox()
  }
};
</script>
<style lang="scss" scoped>
.mui-numbox{
    height:25px;
}
</style>