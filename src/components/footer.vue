<template>
  <div class="footer">
    <button class="footerBtn" :class="{'o8':loading}" @click="submit" v-if="count==1" :disabled="loading">
      <img src="../assets/img/ring.png" alt="" class="loading" v-if="loading">
      <span>{{txt}}</span>
    </button>
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
.footer {
  width: 100%;
  height: 65px;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  padding: 10px 15px;
  .footerBtn {
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: #1890ff;
    color: white;
    text-align: center;
    border-radius: 4px;
  }
  .footerBtn2 {
    button {
      width: 48%;
      height: 45px;
      display: block;
      float:left;
      line-height: 45px;
      background-color: #1890ff;
      color: white;
      text-align: center;
      border-radius: 4px;
    }
    .btnLeft{
     margin-right: 4%
    }
  }
}
.o8{
  opacity: 0.8;
}
.loading{
  animation: rotate 0.7s linear infinite;
}
@keyframes rotate{
  0%{
    transform: rotate(0);
   }
  50%{
    transform:rotate(200deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
