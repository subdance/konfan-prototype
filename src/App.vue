<template>
  <el-container>
    <scrollTop></scrollTop>
    <aplayer
      ref='aplayer'
      :audio="audio"
      :lrcType="0"
      :volume='moePlayer.volume'
      fixed
      autoplay
      v-show='moePlayer.isFixPlayerShow'
      />
    <el-header>
      <navBar style="position: relative; z-index: 1;"></navBar>
      <iconHolder style=" z-index: 1;"></iconHolder>
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
        volume: 0.1,
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
  },
  mounted(){
    this.$refs.aplayer.play();
  },
  methods:{
    listenChangeFixPlayer(){
      eventBus.$on('changeFixPlayer', reg => {
        this.moePlayer.isFixPlayerShow = reg;
      })
      eventBus.$on('stopMusic', reg => {
        if(reg){
          this.$refs.aplayer.pause();
        }
        else{
          this.$refs.aplayer.play();
        }
      })
    },
  },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .el-main {
    margin-top: -60px;
    padding: 0;
    z-index: 0;
  }
  .el-header::before {
    content: '';
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: grey;
    opacity: 0.3;
    border-bottom: 1px solid white;
  }
  .el-header {
    overflow: hidden;
    z-index: 999;
    position: relative;
    display: block;
  }
  .el-footer {
    padding: 0;
  }
</style>
