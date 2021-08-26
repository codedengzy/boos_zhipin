<template>
  <div style="height: 100%">
    <!-- header -->
    <van-nav-bar :title="msg">
      <template #left>
        <van-icon name="cross" size=".4rem" @click="closeFilterMask" />
      </template>
    </van-nav-bar>
    <!-- 条件选择 -->
    <div class="gridTitle">学历要求</div>
    <van-grid :column-num="3" :gutter="10">
      <van-grid-item @click="itemBtnClick($event)" text="高中" />
      <van-grid-item @click="itemBtnClick($event)" text="大专" />
      <van-grid-item @click="itemBtnClick($event)" text="本科" />
      <van-grid-item @click="itemBtnClick($event)" text="研究生" />
    </van-grid>
    <div class="gridTitle">薪资待遇</div>
    <van-grid :column-num="3" :gutter="10">
      <van-grid-item @click="itemBtnClick($event)" text="全部" />
      <van-grid-item @click="itemBtnClick($event)" text="8k" />
      <van-grid-item @click="itemBtnClick($event)" text="10k" />
      <van-grid-item @click="itemBtnClick($event)" text="12k" />
    </van-grid>
    <!-- 确认按钮 -->
    <div class="filter_footer">
      <van-button plain type="default">清除</van-button>
      <van-button plain type="info">确定</van-button>
    </div>
  </div>
</template>
<script>
import "../assets/reset_vant.css";

export default {
  name: "filterWarp",
  data() {
    return {
      msg: "筛选条件",
    };
  },
  methods: {
    // 关闭筛选面板
    closeFilterMask() {
      this.$emit("closeFilterMask");
    },
    // 点击选择项目
    itemBtnClick($e) {
      // 获取this的class
      let _cls = $e.target.getAttribute("class");
      let _clsArr = _cls.split(" ");
      let _is = false; //是否添加样式
      for (let i = 0; i < _clsArr.length; i++) {
        if (_clsArr[i] == "van_grid_item_focus") {
          // arrayObject.splice(index,howmany,item1,.....,itemX)添加或删除数组
          // index-添加或删除项目的位置 howmany-删除数组的个数0为不删除 item(1-n)添加的数组
          _clsArr.splice(i, 1);
          _is = true;
          break;
        }
      }
      if (!_is) {
        _clsArr.push("van_grid_item_focus");
      }
      let _cls_str = _clsArr.join(" ");
      $e.target.setAttribute("class", _cls_str);
    },
  },
};
</script>
<style scoped>
.gridTitle {
  padding: 0.2rem 0.2rem;
  clear: both;
  font-size: 0.3rem;
  font-weight: bold;
}
.gridTitle label {
  font-weight: normal;
  font-size: 0.2rem;
  padding: 0 10px;
}
.filter_footer {
  text-align: center;
  margin-top: 1rem;
  width: 100%;
}
</style>