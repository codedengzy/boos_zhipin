<template>
  <div>
    <van-area
      value="110101"
      :title="areaTitle"
      :area-list="areaList"
      @change="areaChangeFn"
      @cancel="closeCityListMask"
      @confirm="confirmArea"
    />
  </div>
</template>
<script>
import { areaList } from "@vant/area-data";

export default {
  name: "selectedArea",
  data() {
    return {
      msg: "城市选择列表",
      areaList,
      areaTitle: "",
    };
  },
  methods: {
    //   地区改变事件
    areaChangeFn(_d) {
      //   console.log(_d.getValues());
      var _areaData = _d.getValues();
      this.areaTitle =
        _areaData[0].name + "-" + _areaData[1].name + "-" + _areaData[2].name;
    },
    // 取消事件
    closeCityListMask() {
      this.$emit("closeCityListMask",);
    },
    // 确认事件
    confirmArea(_d) {
        // console.log(_d);
        let _city=_d[1].name;
        this.$emit("closeCityListMask",_city);

    },
  },
};
</script>
<style scoped>
</style>