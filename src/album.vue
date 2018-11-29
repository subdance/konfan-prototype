<template lang="html">
  <div class="mainHolder">
    <carousel></carousel>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
import carousel from '@/components/album_carousel.vue'
export default {
  components: {
    carousel,
  },
  data(){
    return {
    }
  },
  created(){
    eventBus.$emit('changeFixPlayer', true);
  },
}
</script>

<style scoped>
  .mainHolder {
    position: relative;
    background: #FC5C7D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
