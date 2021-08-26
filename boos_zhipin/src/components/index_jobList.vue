<template>
  <div>
    <!-- header -->
    <van-sticky>
      <van-nav-bar class="bar_sty" left-text="Boos直聘">
        <template #right>
          <van-icon @click="showJobIntentionMask" name="plus" size="20" />
          <van-icon name="search" size="20" />
        </template>
      </van-nav-bar>
      <div class="title_menu">
        <van-button class="miniBtn" @click="onNotifyBtn" size="mini"
          >推荐</van-button
        >
        <van-button class="miniBtn" @click="onNotifyBtn" size="mini"
          >最新</van-button
        >

        <van-button class="filterBtn" @click="showFilterWarp" size="mini"
          >筛选</van-button
        >
        <van-button class="filterBtn" @click="showCityListMask" size="mini">{{
          defaultArea
        }}</van-button>
      </div>
      <!-- notify提示框 -->
      <notify v-show="notifyShow"></notify>
    </van-sticky>
    <!-- 城市列表wrap -->
    <!--vue中@touchmove.prevent(禁止滚动包括弹窗滚动条)
    @mousewheel.prevent(禁止鼠标滑轮滚动) -->
    <div
      v-show="isCityListMask"
      @touchmove.prevent
      @mousewheel.prevent
      :class="maskClassName"
    >
      <selectedArea
        @closeCityListMask="hideCityListMask($event)"
      ></selectedArea>
    </div>
    <!-- 筛选列表 -->
    <div
      v-show="isFilterMask"
      @mousewheel.prevent
      @touchmove.prevent
      :class="filterClassName"
    >
      <filterWarp @closeFilterMask="hideFilterWarp"></filterWarp>
    </div>
    <!-- 求职 意向-Intention-->
    <div v-show="isJobIntention" 
    :class="jobIntentionClassName"
    @mousewheel.prevent
    @touchmove.prevent
    >
      <jobIntention @closeJobIntentionMask="hideJobIntentionMask"></jobIntention>
    </div>
    <!-- 职位列表 -->
    <div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <job_item
          v-for="(item, inx) in jobsData"
          :key="inx"
          :itemObj="item"
        ></job_item>
      </van-pull-refresh>
    </div>
    <!-- footerbar -->
    <footerBar></footerBar>
  </div>
</template>
<script>
import job_item from "./job_item";
import footerBar from "./footerBar";
import notify from "./notify";
import selectedArea from "./selectedArea";
import filterWarp from "./filterWarp";
import jobIntention from "./jobIntention"

import { Toast } from "vant";

export default {
  name: "index_jobList",
  data() {
    return {
      msg: "招聘列表",
      jobsData: [
        {
          title: "web前端",
          h2_txt: "什么祥 未融资",
          area: ["沈阳 和平区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "海峰-招聘者",
          },
          salary: "5-6K",
        },
        {
          title: "软件开发工程师",
          h2_txt: "牛万科技 未融资",
          area: ["沈阳 沈河区", "1-3年", "学历不限"],
          hr: {
            img_avatar: "",
            hr_txt: "海峰-招聘者",
          },
          salary: "3-8K",
        },
        {
          title: "前端工程师",
          h2_txt: "成林健康科技 未融资",
          area: ["沈阳 皇姑区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "马xx-从事招聘专员",
          },
          salary: "5-6K",
        },
        {
          title: "前端开发工程师",
          h2_txt: "师福教育 未融资",
          area: ["沈阳 沈河区", "3-5年", "学历不限"],
          hr: {
            img_avatar: "",
            hr_txt: "杨女士 - 人事",
          },
          salary: "5-8K",
        },
        {
          title: "前端工程师",
          h2_txt: "成林健康科技 未融资",
          area: ["沈阳 皇姑区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "马xx-从事招聘专员",
          },
          salary: "5-6K",
        },
        {
          title: "前端技术经理",
          h2_txt: "星擎科技 未融资",
          area: ["沈阳 铁西区", "5-10年", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "潘舒-CEO",
          },
          salary: "6-11K",
        },
        {
          title: "web前端",
          h2_txt: "什么祥 未融资",
          area: ["沈阳 和平区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "海峰-招聘者",
          },
          salary: "5-6K",
        },
      ],
      defaultArea: "沈阳",
      notifyShow: false,
      isLoading: false,
      // 城市选择面板显示隐藏
      isCityListMask: false,
      // 筛选选择面板
      isFilterMask: false,
      // 求职意向面板
      isJobIntention:false,
      // 设定城市选择面板的class默认名
      maskClassName: "maskClass",
      // 设定筛选条件面板的class的默认名
      filterClassName: "filterClass",
      // 设定求职意向的class的默认名
      jobIntentionClassName:'mask_animation'
    };
  },
  components: { job_item, footerBar, notify, selectedArea, filterWarp ,jobIntention},
  methods: {
    // 点击职位刷新
    onNotifyBtn() {
      this.notifyShow = true;
      let _rect = document.querySelector(".notify");
      // console.log(_rect);
      // 'webkitAnimationEnd'监听css3动画结束事件
      _rect.addEventListener(
        "webkitAnimationEnd",
        () => {
          this.notifyShow = false;
        },
        false
      );
    },
    // 下拉刷新职位
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
    // 显示城市列表
    showCityListMask() {
      this.isCityListMask = true;
      this.maskClassName = "maskClass cityEditWrapObj_open";
      let _areaMask = document.querySelector(".maskClass");
      _areaMask.addEventListener(
        "webkitAnimationEnd",
        () => {
          this.isCityListMask = true;
        },
        false
      );
    },
    // 隐藏城市列表
    hideCityListMask(_cityName) {
      if (_cityName) {
        this.defaultArea = _cityName;
      } else {
        this.defaultArea = "沈阳";
      }
      this.maskClassName = "maskClass cityEditWrapObj_close";
      let _areaMask = document.querySelector(".maskClass");
      _areaMask.addEventListener(
        "webkitAnimationEnd",
        () => {
          this.isCityListMask = false;
        },
        false
      );
    },
    // 显示筛选面板
    showFilterWarp() {
      this.isFilterMask = true;
      this.filterClassName = "filterClass filterWrapObj_open";
      let _filterMask = document.querySelector(".filterClass");
      _filterMask.addEventListener(
        "webkitAnimationEnd",
        () => {
          this.isFilterMask = true;
        },
        false
      );
    },
    // 隐藏筛选面板
    hideFilterWarp() {
      this.filterClassName='filterClass filterWrapObj_close';
      let _filterMask=document.querySelector('.filterClass');
      _filterMask.addEventListener('webkitAnimationEnd',()=>{
        this.isFilterMask=false;
      },false);
    },
    // 显示求职意向面板
    showJobIntentionMask(){
      this.isJobIntention=true;
      this.jobIntentionClassName='mask_animation animation_open';
      let _maskCls=document.querySelector('.mask_animation');
      _maskCls.addEventListener('webkitAnimationEnd',()=>{
        this.isJobIntention=true;
      },false);
    },
    // 关闭求职意向面板
    hideJobIntentionMask(){
      this.jobIntentionClassName='mask_animation animation_close';
      let _maskCls=document.querySelector('.mask_animation');
      _maskCls.addEventListener('webkitAnimationEnd',()=>{
        this.isJobIntention=false;
      },false);
    }
  },
};
</script>
<style scoped>
.bar_sty {
  background: #14c1bb;
}
.van-icon-plus:before {
  color: #fff;
  font-size: 0.4rem;
  margin-right: 0.1rem;
  border-right: 1px solid #c1c1c1;
  padding-right: 0.1rem;
}
.van-icon-search:before {
  color: #fff;
  font-size: 0.4rem;
}
.bar_sty /deep/ .van-nav-bar__text {
  font-size: 0.35rem;
  color: #fff;
}
.miniBtn {
  border: 0;
  margin: 0.1rem 0 0 0;
  float: left;
}
.filterBtn {
  float: right;
  border: 0;
  margin: 0.1rem 0.1rem 0 0;
  background: #f2f3f5;
}
.title_menu {
  background: #fff;
  height: 0.6rem;
}
/* 城市选择面板 */
.cityEditWrapObj_open {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: cityEditWrapObjAnimation_open 0.7s;
}
.cityEditWrapObj_close {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: cityEditWrapObjAnimation_close 0.7s;
}
@keyframes cityEditWrapObjAnimation_open {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
@keyframes cityEditWrapObjAnimation_close {
  from {
    height: 100%;
  }
  to {
    height: 0;
  }
}
/* 筛选条件面板 */
.filterWrapObj_open {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: filterWrapObjAnimation_open 0.7s;
}
.filterWrapObj_close {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: filterWrapObjAnimation_close 0.7s;
}
@keyframes filterWrapObjAnimation_open {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
@keyframes filterWrapObjAnimation_close {
  from {
    height: 100%;
  }
  to {
    height: 0;
  }
}
/* 求职意向 */
.mask_animation{
	width: 100%;height: 100%;background: #fff;position: absolute;left: 0;bottom: 0;
	z-index: 3333;
}
.animation_open{
	animation: open_Animation .7s;
}
.animation_close{
	animation: close_Animation .7s;
}

@keyframes open_Animation{
	from {width:0;left:100%;}
	to {width:100%;left:0;}
}
@keyframes close_Animation{
	from {width:100%;left:0;}
	to {width:0;left:100%;}
}
</style>