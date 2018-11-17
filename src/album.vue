<template lang="html">
  <div class="mainHolder">
    <theTitle></theTitle>
    <carousel></carousel>
  </div>
</template>

<script>
import carousel from '@/components/album_carousel.vue'
import theTitle from '@/components/album_title.vue'
export default {
  components: {
    carousel,
    theTitle,
  },
  data(){
    return {
    }
  },
}
</script>

<style scoped>
  .mainHolder {
    z-index: 1;
    position: relative;
  }
  /* .mainHolder::after {
    content: '';
    background-image: url('./assets/element/backdot2.png');
    background-repeat: repeat;
    opacity: 0.3;
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  } */
</style>
