<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FooterGuide from "@components/FooterGuide/FooterGuide";
import {reqAddress} from "@/api";

export default {
  name: "App",
  components: {FooterGuide},
  async mounted() {
    //通知action异步获取address并保存到state
    this.$store.dispatch('getAddress')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "common/stylus/mixins.styl"

</style>