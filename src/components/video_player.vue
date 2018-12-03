<template lang="html">
  <div class="playerHolder">
    <video-player
      id="player"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="customstatechangedeventname">
    </video-player>
  </div>

</template>

<script>
  import 'video.js/dist/video-js.css'

  import { videoPlayer } from 'vue-video-player'
  export default {
    components: {
      videoPlayer,
    },
    data(){
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "http://35.244.189.64/k-on-fan/video/1.mp4"
          }],
          poster: "",
        }
      }
    },
  }
</script>

<style lang="css">
  * {
    box-sizing: border-box;
  }
  .playerHolder {
    padding-top: 62px;
    text-align: center;
  }
  #player {
    margin: auto;
  }
  #vjs_video_3 {
    margin: auto;
    position: relative;
  }
</style>
