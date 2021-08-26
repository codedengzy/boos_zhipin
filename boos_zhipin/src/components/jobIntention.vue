<template>
  <div>
    <van-nav-bar left-arrow @click-left="closeJobIntentionMask" />
    <h1 class="titleSty">管理求职意向</h1>
    <van-nav-bar
      left-text="求职状态"
      :right-text="jobStateRight"
      @click-right="selectJobState"
    />
    <!-- 求职状态 -->
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>
<script>

export default {
  name: "jobIntention",
  data() {
    return {
      msg: "求职意向",
      jobStateRight:'请选择>>',
      show: false,
      actions: [
            { name: "离职-随时到岗",jobState:0 }, 
            { name: "在职-月内到岗",jobState:1 }, 
            { name: "在职-观望等待",jobState:2 }, 
            { name: "待业-到处看看",jobState:3 }],
    };
  },
  methods: {
    closeJobIntentionMask() {
      this.$emit("closeJobIntentionMask");
    },
    selectJobState() {
      this.show = true;
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      console.log(item.name);
      this.jobStateRight=item.name+'>>';
    },
  },
};
</script>
<style scoped>
.titleSty {
  font-size: 0.3rem;
  font-weight: bold;
  margin-left: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.div_p {
  font-size: 0.1rem;
  color: #969696;
  margin-left: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jobState {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jobState_footer {
  text-align: center;
  margin: 2rem 0;
}
</style>