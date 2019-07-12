<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
        <img :src="item.img" :class="{'full':isfull}"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props:['lunbotulist','isfull']
};
</script>
<style lang="scss" scoped>
.mint-swipe{
    height:200px;

    .mint-swipe-item{
        text-align: center;
        // &:nth-child(1){//&是交集选择器的意思
        //     background-color:yellowgreen;
        // }
        //    &:nth-child(2){//&是交集选择器的意思
        //     background-color:violet;
        // }
        //    &:nth-child(3){//&是交集选择器的意思
        //     background-color:yellow;
        // }   
        //     &:nth-child(4){//&是交集选择器的意思
        //     background-color:rgb(0, 247, 255);
        // }
        img{
            //width:100%;
            height:100%;
        }
        .full{
            width:100%;
        }
    }
}
</style>