<template lang="html">
  <div class="mainHolder">
    <videoPlayer></videoPlayer>
    <videoInfo></videoInfo>
  </div>
</template>

<script>
  import eventBus from '@/eventbus.js'
  import videoPlayer from '@/components/video_player.vue'
  import videoInfo from '@/components/video_info.vue'
  export default {
    components:{
      videoPlayer,
      videoInfo
    },
    created(){
      this.changeFixPlayer(false);
      eventBus.$emit('stopMusic', true)
    },
    methods:{
      changeFixPlayer(reg){
        eventBus.$emit('changeFixPlayer', reg)
      },
    },
  }
</script>

<style scoped>
  .mainHolder {
    min-height: 100vh;
    width: 100%;
    position: relative;
    background-image: url('http://35.244.189.64/k-on-fan/image/video-room/5.jpg');
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }
  @media screen only and (max-width: 600px) {
    .mainHolder {
      background: #f953c6;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to bottom, #b91d73, #f953c6);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to bottom, #b91d73, #f953c6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
  }
</style>
