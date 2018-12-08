<template lang="html">
  <div class="mainHolder">
    <videoPlayer></videoPlayer>
  </div>
</template>

<script>
  import eventBus from '@/eventbus.js'
  import videoPlayer from '@/components/video_player.vue'
  export default {
    components:{
      videoPlayer,
    },
    created(){
      this.changeFixPlayer(false);
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
    background-image: url('./assets/background/5.jpg');
    background-size: cover;
    background-position: center;
  }
</style>
