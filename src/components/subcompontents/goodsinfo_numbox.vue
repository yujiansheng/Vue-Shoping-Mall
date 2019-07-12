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
  watch:{
      'max'(newval,oldval){ 
        mui('.mui-numbox').numbox().setOption('max',newval)
      }
  },
  methods: {
      countChanged(){
         //console.log(mui('.mui-numbox').numbox().getValue()); 
         //console.log(this.$refs.numberbox.value); 
         this.$emit('getcount',parseInt(this.$refs.numberbox.value));
      }
  },
  props:['max'],
    mounted() {
      mui('.mui-numbox').numbox()
      console.log(this.max);
  }
};
</script>
<style lang="scss" scoped>
</style>