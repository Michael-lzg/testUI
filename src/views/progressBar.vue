<template>
  <div title="ProgressBar">
    <div class="demo-progressbar demo-pitch">
      <div class="demo-progress-cricle">
        <!-- 代码部分start -->
        <yd-progressbar :progress="progress1" trailWidth="4">
          <span class="Num" style="font-size: 28px">{{progress1*100}}%</span>
          <!-- <yd-countup :endnum="progress1 * 100" duration="1" suffix="%"></yd-countup> -->
        </yd-progressbar>
        <!-- 代码部分end -->
      </div>
      <div class="demo-progress-cricle">
        <!-- 代码部分start -->
        <yd-progressbar :progress="progress2" trailWidth="10" strokeWidth="10" strokeColor="#B2B2B2" trailColor="#FE5D51" fillColor="#FFF">
          <span class="Num" style="font-size: 28px">{{progress2*100}}%</span>
          <!-- <yd-countup :endnum="progress2 * 100" :duration="1" suffix="%"></yd-countup> -->
        </yd-progressbar>
        <!-- 代码部分end -->
      </div>
    </div>
    <div class="demo-progressbar demo-pitch">
      <div class="demo-progress-line">
        <!-- 代码部分start -->
        <!-- <yd-progressbar type="line" :progress="progress3" trailWidth="4" trailColor="#FE5D51"></yd-progressbar> -->
        <!-- <span class="Num" style="font-size: 28px">{{progress3*100}}%</span> -->
        <!-- 代码部分end -->
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import ydProgressbar from '../components/progressBar'
export default {
  data () {
    return {
      progress1: 0.4,
      progress2: 0.8,
      progress3: 0.6
    }
  },
  components: { ydProgressbar }
}
</script>
