<template lang="html">
  <div class="mainContainer">
    <teaSentence></teaSentence>
    <aplayer
    class="musicPlayer"
    ref='aplayer'
    :audio="audio"
    autoplay
    :listMaxHeight='moePlayer.listMaxHeight'
    :volume='moePlayer.volume'
    :listFolded='moePlayer.isListFolded'
    :theme='moePlayer.theme' />
    <teaArticle></teaArticle>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
import teaArticle from '@/components/teaRoom_article.vue'
import teaSentence from '@/components/teaRoom_sentence.vue'
export default {
  components: {
    teaArticle,
    teaSentence,
  },
  data(){
    return {
      moePlayer: {
        isListFolded: false,
        theme: '#1396f1',
        volume: 0.2,
        listMaxHeight: 800,//px
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
          url: 'http://35.244.189.64/k-on-fan/music/instui.mp3',
          cover: 'http://35.244.189.64/k-on-fan/image/music-cover/3.JPG',
        },
        // {
        //   name: 'わたしの恋はホッチキス/订书机之恋',
        //   artist: '放課後ティータイム',
        //   url: 'http://35.244.189.64/k-on-fan/music/love.mp3',
        //   cover: 'http://35.244.189.64/k-on-fan/image/music-cover/1.JPG',
        // },
        // {
        //   name: 'ふわふわ時間/轻飘飘的时光',
        //   artist: '放課後ティータイム',
        //   url: 'http://35.244.189.64/k-on-fan/music/time.mp3',
        //   cover: 'http://35.244.189.64/k-on-fan/image/music-cover/2.JPG',
        // },
        // {
        //   name: 'ふでペン 〜ボールペン〜/毛笔圆珠笔',
        //   artist: '放課後ティータイム',
        //   url: 'http://35.244.189.64/k-on-fan/music/pen.mp3',
        //   cover: 'http://35.244.189.64/k-on-fan/image/music-cover/3.JPG',
        // },
        // {
        //   name: 'U&I',
        //   artist: '放課後ティータイム',
        //   url: 'http://35.244.189.64/k-on-fan/music/u%26i.mp3',
        //   cover: 'http://35.244.189.64/k-on-fan/image/music-cover/1.JPG',
        // },
        // {
        //   name: '天使にふれたよ!',
        //   artist: '放課後ティータイム',
        //   url: 'http://35.244.189.64/k-on-fan/music/angel.mp3',
        //   cover: 'http://35.244.189.64/k-on-fan/image/music-cover/7.JPG',
        // },
      ],
    }
  },
  created(){
    this.changeFixPlayer(false);
    this.listenChangeList();
  },
  mounted:function(){
    this.playMusic();
  },
  methods: {
    playMusic(){
      this.$refs.aplayer.play();
    },
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
    padding-top: 60px;
    background: #009FFF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #ec2F4B, #009FFF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #ec2F4B, #009FFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .musicPlayer {
    position: fixed;
    top: 60px;
    right: 0;
    width: 20vw;
  }
  @media only screen and (max-width:900px) {
    .musicPlayer {
      position: static;
      width: auto;
    }
  }
</style>
