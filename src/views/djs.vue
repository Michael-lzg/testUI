<template>
  <div>
    <div class="listItem">
      <div class="fl">默认模板</div>
      <djs class="fr" slot="right" time="2019/06/06 06:06:06"></djs>
    </div>
    <div class="listItem">
      <div class="fl">自定义模板</div>
      <djs class="fr" slot="right" time="2019/06/06 06:06:06" format="{%s}秒-{%m}分-{%h}时-{%d}天"></djs>
    </div>
    <div class="listItem">
      <div class="fl">传入（秒）</div>
      <djs class="fr" slot="right" :time="666666" timetype="second"></djs>
    </div>
    <div class="listItem">
      <div class="fl">传入（时间戳）</div>
      <djs class="fr" slot="right" :time="1559666666" timetype="timestamp"></djs>
    </div>
    <div class="listItem">
      <div class="fl">自定义样式</div>
      <djs slot="right" time="2019/08/08 08:08:08" class="demo-countdown fr">
        <span style="color:red;">{%d}<i>天</i></span>
        <span style="color:gray;">{%h}<i>时</i></span>
        <span style="color:blue;">{%m}<i>分</i></span>
        <span style="color:orange;">{%s}<i>秒</i></span>
      </djs>
    </div>
  </div>
</template>

<script>
import djs from '../components/djs'
export default {
  components: {djs}
}
</script>

<style scoped lang="less">
.listItem{
    padding:  0 15px;
    height: 40px;
    line-height: 45px;
    background-color: #fff;
    margin-bottom: 8px;
    .selectTime{
      width: auto !important;
    }
  }
</style>
