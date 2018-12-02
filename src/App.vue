<template>
  <el-container>
    <scrollTop></scrollTop>
    <aplayer
      :audio="audio"
      :lrcType="0"
      fixed
      autoplay
      v-show='moePlayer.isFixPlayerShow'
      />
    <el-header height='62px'>
      <navBar></navBar>
      <iconHolder></iconHolder>
    </el-header>

    <el-main>
      <router-view/>
    </el-main>

    <el-footer>
      <footBar></footBar>
    </el-footer>
  </el-container>
</template>

<script>
import eventBus from '@/eventbus.js'
import footBar from '@/components/footbar.vue'
import iconHolder from '@/components/icon_holder.vue'
import navBar from '@/components/navbar.vue'
import scrollTop from '@/components/back_to_top.vue'
export default {
  name: 'App',
  components: {
    navBar,
    footBar,
    iconHolder,
    scrollTop,
  },
  data(){
    return{
      moePlayer: {
        isFixPlayerShow: true,
      },
      audio: [
        {
          name: 'わたしの恋はホッチキス/订书机之恋',
          artist: '放課後ティータイム',
          url: 'http://35.244.189.64/k-on-fan/music/love.mp3',
          cover: 'http://35.244.189.64/k-on-fan/image/music-cover/1.JPG',
        },
        {
          name: 'ふわふわ時間/轻飘飘的时光',
          artist: '放課後ティータイム',
          url: 'http://35.244.189.64/k-on-fan/music/time.mp3',
          cover: 'http://35.244.189.64/k-on-fan/image/music-cover/2.JPG',
        },
        {
          name: 'ふでペン 〜ボールペン〜/毛笔圆珠笔',
          artist: '放課後ティータイム',
          url: 'http://35.244.189.64/k-on-fan/music/pen.mp3',
          cover: 'http://35.244.189.64/k-on-fan/image/music-cover/3.JPG',
        },
        {
          name: 'U&I',
          artist: '放課後ティータイム',
          url: 'http://35.244.189.64/k-on-fan/music/u%26i.mp3',
          cover: 'http://35.244.189.64/k-on-fan/image/music-cover/1.JPG',
        },
        {
          name: '天使にふれたよ!',
          artist: '放課後ティータイム',
          url: 'http://35.244.189.64/k-on-fan/music/angel.mp3',
          cover: 'http://35.244.189.64/k-on-fan/image/music-cover/7.JPG',
        },
      ],
    }
  },
  created(){
    this.listenChangeFixPlayer();
    // this.moePlayer.isFixPlayerShow = true;
  },
  methods:{
    listenChangeFixPlayer(){
      eventBus.$on('changeFixPlayer', reg => {
        this.moePlayer.isFixPlayerShow = reg;
      })
    },
  },
}
</script>

<style scoped>
  .el-main {
    min-height: 500px;
    margin-top: -62px;
    padding: 0;
    z-index: 0;
  }
  .el-header {
    z-index: 1;
    position: relative;
    display: block;
  }
  .el-header::after {
    background-color: white;
    content: "";
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .el-container {
  }
  .el-footer {
    padding: 0;
  }
</style>
