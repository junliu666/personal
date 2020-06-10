<template>
  <view class="modal" :animation="animationData1" @touchmove.stop.prevent>
    <view class=" content-wrap" :animation="animationData2">
      <view class="content-header">
        <view class="cancel-btn" @click="close">取消</view>
        <!-- <view class="input-contant">{{ inputValue.join("") }}</view> -->
        <view class="confirm-btn" @click="confirm">完成</view>
      </view>
      <view class="key-box">
        <view
          :class="{
            'handel-btn': ['.', '删除', ''].includes(item),
            'active-btn': activeKey === item,
            'active-handel-btn':
              activeKey === item && ['.', '删除'].includes(item),
          }"
          v-for="(item, index) in keyboardList"
          :key="index"
          @click="setValue(item)"
          >{{ item }}</view
        >
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      animationData1: {},
      animationData2: {},
      activeKey: "",
      inputValue: [],
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    //是否为带小数的数字键盘
    decimals: {
      type: Boolean,
      default: true,
    },
    //小数点前整数的位数
    maxLength: {
      type: [Number, String],
      default: 9,
    },
    //小数点后的位数
    pointLength: {
      type: [Number, String],
      default: 2,
    },
    //最大的值
    max: {
      type: [Number, String],
      default: 999999999,
    },
    //最小的值
    min: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    keyboardList() {
      return this.decimals
        ? ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "删除"]
        : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "删除"];
    },
  },
  watch: {
    visible(val) {
      this.inputValue = [];
      if (val) this.enterAnimate();
      else this.leaveAnimate();
    },
  },
  methods: {
    setValue(data) {
      this.activeKey = data;
      let timer = setTimeout(() => {
        this.activeKey = "-";
        clearTimeout(timer);
      }, 100);

      if (
        !data ||
        (data !== "删除" &&
          this.inputValue.includes(".") &&
          this.inputValue.join("").split(".")[1].length === this.pointLength)
      )
        return false;

      if (
        this.inputValue.length === 1 &&
        this.inputValue[0] === "0" &&
        !["删除", "."].includes(data)
      ) {
        return (this.inputValue = [data]);
      }

      if (data !== "删除") {
        if (this.inputValue.includes(".")) {
          if (
            this.inputValue.join("").split(".")[0].length === this.maxLength
          ) {
            return false;
          }
        } else if (this.inputValue.length === this.maxLength) {
          return false;
        }
      }

      if (data === "删除") {
		// this.$emit("Delete")
        this.inputValue.length && this.inputValue.pop();
      }
      if (data === ".") {
        if (!this.inputValue.length || this.inputValue.includes("."))
          return false;
      }
	  this.$emit('SetValue', data)
      this.inputValue.push(data);
    },
    close() {
      this.$emit("update:visible", false);
      this.$emit("close");
    },
    confirm() {
      // let result = Number(this.inputValue.join(""));
      // if (result < this.min) {
      //   uni.showToast({
      //     title: `最小值为${this.min}`,
      //     duration: 1500,
      //     icon: "none",
      //   });
      //   return;
      // } else if (result > this.max) {
      //   uni.showToast({
      //     title: `最大值为${this.max}`,
      //     duration: 1500,
      //     icon: "none",
      //   });
      //   return;
      // }
      this.$emit("confirm");
      this.close();
    },
    enterAnimate() {
      this.animation1 = uni.createAnimation();
      this.animation2 = uni.createAnimation();
      this.animation1.backgroundColor("rgba(0,0,0,0.5)").step({
        duration: 500,
        timingFunction: "ease",
      });
      this.animation2.translateY(0).step({
        timingFunction: "ease-out",
        duration: 500,
      });
      this.animationData1 = this.animation1.export();
      this.animationData2 = this.animation2.export();
    },
    leaveAnimate() {
      this.animation1 = uni.createAnimation();
      this.animation2 = uni.createAnimation();
      this.animation1.backgroundColor("rgba(0,0,0,0)").step({
        duration: 500,
        timingFunction: "ease",
      });
      this.animation2.translateY(500).step({
        timingFunction: "ease-out",
        duration: 500,
      });
      this.animationData1 = this.animation1.export();
      this.animationData2 = this.animation2.export();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  z-index: 9999;

  .content-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    transform: translateY(100%);

    .content-header {
      width: 100%;
      height: 80upx;
      background: rgba(255, 255, 255, 1);
      float: right;

      .input-contant {
        text-align: center;
        line-height: 80upx;
        font-size: 40upx;
      }

      .cancel-btn {
        padding-left: 30upx;
        color: #147ff2;
        line-height: 80upx;
        position: absolute;
        top: 0;
        left: 0;
      }

      .confirm-btn {
        padding-right: 30upx;
        color: #147ff2;
        line-height: 80upx;
        position: absolute;
        top: 0;
        right: 0;
      }
    }

    .key-box {
      margin-top: 60upx;
      display: flex;
      flex-flow: wrap;
      width: 100%;

      view {
        width: 33%;
        height: 100upx;
        border: 1upx solid rgb(235, 237, 240);
        box-sizing: border-box;
        text-align: center;
        line-height: 100upx;
        font-size: 40upx;
        font-weight: bold;
        margin: 0 -1upx -1upx 0;

        &:hover {
          z-index: 1;
          border: 1upx solid rgb(235, 237, 240);
        }
      }

      .handel-btn {
        background: rgb(235, 237, 240);
        font-size: 30upx;
      }
      .active-btn {
        background: rgb(235, 237, 240);
      }
      .active-handel-btn {
        background: rgb(252, 252, 252);
      }
    }
  }
}
</style>
