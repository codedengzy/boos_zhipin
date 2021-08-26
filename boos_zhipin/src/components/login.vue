<template>
  <div class="body_sty">
    <!-- 轮播图 -->
    <van-swipe class="loginMask"
    :show-indicators="false" 
    :autoplay="2000" 
    indicator-color="white">
      <van-swipe-item class="loginMaskImg loginBg_1"></van-swipe-item>
      <van-swipe-item class="loginMaskImg loginBg_2"></van-swipe-item>
      <van-swipe-item class="loginMaskImg loginBg_3"></van-swipe-item>
    </van-swipe>
    <van-button class="loginMaskBtn_1" type="primary">我要招人</van-button>
    <van-button class="loginMaskBtn_2" type="primary" to="/index_jobList">我要应聘</van-button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      msg: "仿Boos直聘项目",
    };
  },
  methods:{

  }
};
</script>
<style scoped>
.body_sty{
  position: relative;height: 100%;
}
.loginMask{
  position: absolute;top: 0;left: 0;z-index: 5;width:100%;height: 100%;
}
.loginMaskImg{
  width: 100%;height: 100%;
}
.loginBg_1{
  background-image:url('../assets/loginMask/1.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.loginBg_2{
  background-image:url('../assets/loginMask/2.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.loginBg_3{
  background-image:url('../assets/loginMask/3.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.loginMaskBtn_1{
  position: absolute;left: 1rem;bottom: 1rem;z-index: 6;
  height: 0.6rem;line-height: 0.6rem;padding: 0 0.42rem;
}
.loginMaskBtn_2{
  position: absolute;right: 1rem;bottom: 1rem;z-index: 6;
  height: 0.6rem;line-height: 0.6rem;padding: 0 0.42rem;
}
</style>
