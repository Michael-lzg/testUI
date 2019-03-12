<template>
  <div class="video">
    <video :src="videoSrc" autoplay="autoplay" muted height="100%" width="100%" class="video-js vjs-big-play-centered" id="video" controls>
      your browser does not support the video tag
    </video>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoSrc:
        'http://cloudvideo.thepaper.cn/video/61a02edd1d90484dba05b0b7081ac4e8/hd/dfaf0b49-bf24-4ed2-8459-884f9c4add11-f85c5d82-3a9c-c205-3910-a171acfbf166.mp4',
      videoImg:
        'http://static.fdc.com.cn/avatar/usercenter/5996999fa093c04d4b4dbaf1_162.jpg'
    }
  },
  mounted () {
    document.getElementById('video').play()
  }
}
</script>

<style scoped>
.video{
  margin-top: 100px;
}
</style>
