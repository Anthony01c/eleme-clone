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
    const reslut = await reqAddress('40.10038,116.36867')
    console.log('reslut',reslut)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "common/stylus/mixins.styl"

</style>