<template lang="html">
  <div>
    <characterShow></characterShow>
    <characterIntro></characterIntro>
  </div>
</template>

<script>
import characterShow from '@/components/character_show.vue'
import characterIntro from '@/components/character_intro.vue'
export default {
  components: {
    characterShow,
    characterIntro,
  },
}
</script>

<style lang="css">
</style>
