<template>
  <div>
    <div class="btn" :class="{'footer':isBottom}" v-if="count==1">
      <button class="button" :class="{'o8':loading,'round':round,'simple':simple}" @click="submit" :disabled="loading">
        <img src="../assets/img/ring.png" alt="" width="20" class="loading" v-if="loading && !simple">
        <img src="../assets/img/color_loading1.png" alt="" width="20" class="loading" v-if="loading && simple">
        <span>{{txt}}</span>
      </button>
    </div>
    <div class="footerBtn2" v-if="count==2">
      <button class="btnLeft" @click="onLeft">{{leftTxt}}</button>
      <button class="btnRight" @click="onRight">{{rightTxt}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // txt: '提交'
    }
  },
  props: {
    txt: {
      type: String
    },
    count: {
      type: Number,
      default: 1
    },
    rightTxt: {
      type: String
    },
    leftTxt: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    isBottom: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    submit () {
      this.$emit('onSubmit', '')
    },
    onLeft () {
      this.$emit('onLeft', '')
    },
    onRight () {
      this.$emit('onRight', '')
    }
  }
}
</script>

<style scoped lang="less">
@import '../assets/css/custom.less';
.btn {
  width: 100%;
  height: 1.3rem;
  padding: 0.2rem 0.3rem;
  font-size: 0.32rem;
  // position: fixed;
  // top: 0;
}
.footer {
  bottom: 0;
  left: 0;
  position: fixed;
}
.button {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  background-color: @kduiThemeColor;
  color: white;
  text-align: center;
  border-radius: 0.08rem;
  font-size: 0.32rem;
  > img {
    width: 0.4rem;
    vertical-align:middle;
  }
}
.footerBtn2 {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.3rem;
  position: fixed;
  font-size: 0.32rem;
  padding: 0.2rem 0.3rem;
  button {
    width: 48%;
    height: 0.9rem;
    display: block;
    float: left;
    line-height: 0.9rem;
    background-color: @kduiThemeColor;
    color: white;
    text-align: center;
    border-radius: 0.08rem;
  }
  .btnLeft {
    margin-right: 4%;
  }
}
.round {
  border-radius: 0.9rem !important;
}
.simple {
  border: 0.01rem solid @kduiThemeColor;
  background-color: #fff !important;
  color: @kduiThemeColor !important;
}
.o8 {
  opacity: 0.8;
}
.loading {
  animation: rotate 0.7s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
