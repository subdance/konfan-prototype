<template lang="html">
  <div class="mainHolder">
    <div class="videoHolder">
      <video
        class="player"
        :src="videoList[index].src"
        controls
        poster="posterimage.jpg">
      </video>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        index: 0,
        videoList: [
          {
            id: 1,
            poster: '',
            src: 'http://35.244.189.64/k-on-fan/video/1.mp4',
          },
        ]
      }
    },
  }
</script>

<style scoped>
  .mainHolder {
    background-color: black;
    padding-top: 62px;
  }
  .videoHolder {
    margin-top: 4rem;
    text-align: center;
  }
  .player {
    max-height: 60rem;
    margin: auto;
  }
</style>
