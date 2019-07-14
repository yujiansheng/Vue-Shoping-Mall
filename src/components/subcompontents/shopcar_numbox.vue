<template>
  <div class="mui-numbox" data-numbox-min="1" >
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="numberbox" ref="numberbox" class="mui-input-numbox" type="number" :value="initcount" readonly @change='countChanged'/>
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
        //console.log(this.$refs.numberbox.value);
        //当数量改变时，则立即把最新的数量同步到 购物车的 store中 覆盖之前的数量值
        this.$store.commit('updateGoodsInfo',{id:this.goodsid,count:this.$refs.numberbox.value})
      }
  },
  mounted() {
      mui('.mui-numbox').numbox()
  },
  props:['initcount','goodsid']
};
</script>
<style lang="scss" scoped>
.mui-numbox{
    height:25px;
}
</style>