<template lang="html">
  <div class="mainHolder">
    <videoPlayer></videoPlayer>
  </div>
</template>

<script>
  import videoPlayer from '@/components/video_player.vue'
  export default {
    components:{
      videoPlayer,
    },
  }
</script>

<style scoped>
  .mainHolder {
    position: relative;
    background-image: url('./assets/background/5.jpg');
    background-size: cover;
    background-position: center;
  }
</style>
