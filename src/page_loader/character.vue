<template lang="html">
  <div>
    <characterShow></characterShow>
    <characterIntro></characterIntro>
    <characterDetail></characterDetail>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
import characterShow from '@/components/character/character_show.vue'
import characterIntro from '@/components/character/character_intro.vue'
import characterDetail from '@/components/character/character_detail.vue'
export default {
  components: {
    characterShow,
    characterIntro,
    characterDetail,
  },
  created(){
    eventBus.$emit('changeFixPlayer', true);
    eventBus.$emit('stopMusic', false);
  },
  mounted() {
    if (window.innerWidth < 600) {
        this.$notify.info({
        title: '你好( ´･ω･)ﾉ(._.`)',
        message: '使用大屏幕浏览此板块以获得完整体验',
        duration: 5000,
        offset: 100,
        });
      }
    }
}
</script>

<style lang="css">
</style>
