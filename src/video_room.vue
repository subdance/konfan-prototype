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
    width: 100%;
    position: relative;
    background-image: url('http://35.244.189.64/k-on-fan/image/video-room/5.jpg');
    background-size: cover;
    background-position: center;
  }
</style>
