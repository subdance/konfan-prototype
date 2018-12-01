<template lang="html">
  <div class="mainContainer">
    <aplayer
    ref='aplayer'
    :audio="audio"
    autoplay
    :listFolded='moePlayer.isListFolded'
    :theme='moePlayer.theme' />
    <teaArticle></teaArticle>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
import teaArticle from '@/components/teaRoom_article.vue'
export default {
  components: {
    teaArticle
  },
  data(){
    return {
      moePlayer: {
        isListFolded: true,
        theme: '#1396f1',
      },
      audio: [
        {
          name: 'あの日の夢',
          artist: '百石元',
          url: 'http://35.244.189.64/k-on-fan/music/dream.mp3',
          cover: 'http://35.244.189.64/k-on-fan/image/music-cover/7.JPG',
        },
        {
          name: 'Autumn breeze with you',
          artist: '百石元',
          url: 'http://35.244.189.64/k-on-fan/music/autumn.mp3',
          cover: 'http://35.244.189.64/k-on-fan/image/music-cover/1.JPG',
        },
        {
          name: 'いい夢見てね',
          artist: '百石元',
          url: 'http://35.244.189.64/k-on-fan/music/sweetdream.mp3',
          cover: 'http://35.244.189.64/k-on-fan/image/music-cover/6.JPG',

        },
        {
          name: 'Winter night in a warm room',
          artist: '百石元',
          url: 'http://35.244.189.64/k-on-fan/music/winternight.mp3',
          cover: 'http://35.244.189.64/k-on-fan/image/music-cover/5.JPG',
        },
        {
          name: 'U&I 〜夕日の綺麗なあの丘で〜',
          artist: '百石元',
          url: 'http://35.244.189.64/k-on-fan/music/inst%20u%26i.mp3',
          cover: 'http://35.244.189.64/k-on-fan/image/music-cover/3.JPG',
        },
      ],
    }
  },
  created(){
    this.changeFixPlayer(false);
    this.listenChangeList();
  },
  methods: {
    changeFixPlayer(reg){
      eventBus.$emit('changeFixPlayer', reg)
    },
    listenChangeList(){
      eventBus.$on('changeList' ,reg => {
        this.$refs.aplayer.hideList();
      })
    },
  },
}
</script>

<style scoped>
  .mainContainer {
    background: #009FFF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #ec2F4B, #009FFF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #ec2F4B, #009FFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    min-height: 200rem;
    padding-top: 62px;
  }
</style>
