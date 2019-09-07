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
}
</script>

<style lang="css">
</style>
