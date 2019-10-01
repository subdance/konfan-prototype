<template lang="html">
  <div class="mainContainer">
    <catalog></catalog>
    <aplayer
    class="musicPlayer"
    ref='aplayer'
    :audio="audio"
    autoplay
    :listMaxHeight='moePlayer.listMaxHeight'
    :volume='moePlayer.volume'
    :listFolded='moePlayer.isListFolded'
    :theme='moePlayer.theme' />
    <new-tea-article class="custom"></new-tea-article>
    <!-- <teaArticle></teaArticle> -->
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
import teaArticle from '@/components/tea_room/teaRoom_article.vue'
import catalog from '@/components/tea_room/teaRoom_catalog.vue'
import newTeaArticle from '@/components/tea_room/teaRoom_redesign.vue'
export default {
  components: {
    teaArticle,
    catalog,
    newTeaArticle
  },
  data(){
    return {
      leftType: true,
      rightType: false,
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
          url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/dream.mp3',
          cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/7.jpeg',
        },
        {
          name: 'Autumn breeze with you',
          artist: '百石元',
          url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/autumn.mp3',
          cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/1.jpeg',
        },
        {
          name: 'いい夢見てね',
          artist: '百石元',
          url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/sweetdream.mp3',
          cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/6.jpeg',

        },
        {
          name: 'Winter night in a warm room',
          artist: '百石元',
          url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/winternight.mp3',
          cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/5.jpeg',
        },
        {
          name: 'U&I 〜夕日の綺麗なあの丘で〜',
          artist: '百石元',
          url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/instui.mp3',
          cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/3.jpeg',
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
  },
}
</script>

<style scoped>
  .mainContainer {
    position: relative;
    padding-top: 60px;
    min-height: 800px;
    background: #ECE9E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  .musicPlayer {
    position: fixed;
    top: 60px;
    right: 0;
    width: 20vw;
    z-index: 999;
  }
  @media only screen and (max-width:900px) {
    .musicPlayer {
      position: static;
      width: auto;
    }
  }
</style>
