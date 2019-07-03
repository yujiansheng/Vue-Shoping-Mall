<template>
  <div>
    <h1>这是APP组件</h1>
    <mt-button type="danger" size="small" plain icon="more" @click="show">default</mt-button>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">Goodslist</router-link>
    <router-view></router-view>
    <button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  name: "App",
  data() {
    return {
      toastInstanse:null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList(){
      this.show();
      setTimeout(() => {
        this.toastInstanse.close();
      }, 3000);
    },
    show() {
      this.toastInstanse=Toast({
        message: "提示消息",
        position: "top",
        duration: -1,
        iconClass:'glyphicon glyphicon-heart',
        className:'mytoast'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>