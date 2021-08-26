<template>
  <div class="notify">
      {{msg}}
      <van-loading />
  </div>
</template>
<script>
export default {
  name: "notify",
  data() {
    return {
      msg: "notify提示组件,职位已经更新",
    };
  },
};
</script>
<style scoped>
.notify{
    width: 100%;
    height: 0.5rem;
    background: #14c1bb;
    text-align: center;
    line-height: 0.5rem;
    color:#fff;
    font-size: 0.21rem;
    animation:notify_hide 0.5s;
    /* 等待1秒，然后开始动画： */
    animation-delay:1s;
    /* 告诉浏览器动画结束后，元素的样式将设置为动画的最后一帧的样式 */
    animation-fill-mode: forwards;
}
/* CSS3 @keyframes 规则 */
@keyframes notify_hide{
    from{
        height: 0.5rem;
    }
    to{
        height: 0;
    }
}
</style>