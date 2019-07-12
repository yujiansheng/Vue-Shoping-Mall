<template>
<div>
    <comment :id='id'></comment>
</div>
</template>
<script>
import comment from '../subcompontents/comment.vue'
export default {
  data () {
    return {
        id :this.$route.params.ID
    };
  },
    components:{
      comment
    }
}
</script>
<style lang="scss" scoped>
</style>