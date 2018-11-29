<template lang="html">
  <div class="mainContainer">
    <aplayer
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
          url: 'http://piwap6ccf.bkt.clouddn.com/dream.mp3',
          cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore

        },
        {
          name: 'いい夢見てね',
          artist: '百石元',
          url: 'http://piwap6ccf.bkt.clouddn.com/sweetdrean.mp3',
          cover: 'https://p1.music.126.net/AUGVPQ_rVrngDH9ocQrn3Q==/109951163613037822.jpg?param=300y300', // prettier-ignore

        },
        {
          name: 'Winter night in a warm room',
          artist: '百石元',
          url: 'http://piwap6ccf.bkt.clouddn.com/winternight.mp3',
          cover: 'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300', // prettier-ignore

        },
        {
          name: 'Autumn breeze with you',
          artist: '百石元',
          url: 'http://piwap6ccf.bkt.clouddn.com/autumn.mp3',
          cover: 'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300', // prettier-ignore
        },
        {
          name: 'U&I 〜夕日の綺麗なあの丘で〜',
          artist: '百石元',
          url: 'http://piwap6ccf.bkt.clouddn.com/inst%20u&i.mp3',
          cover: 'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300', // prettier-ignore
        },
      ],
    }
  },
  created(){
    this.changeFixPlayer(false);
  },
  methods: {
    changeFixPlayer(reg){
      console.log(reg);
      eventBus.$emit('changeFixPlayer', reg)
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
