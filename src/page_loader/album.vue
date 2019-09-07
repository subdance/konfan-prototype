<template lang="html">
  <div class="mainHolder">
    <carousel></carousel>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
import carousel from '@/components/album/album_carousel.vue'
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
    eventBus.$emit('stopMusic', false);
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
</style>
