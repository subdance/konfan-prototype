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
  * {
    box-sizing: border-box;
  }
  .mainHolder {
    width: 100%;
  }
</style>
