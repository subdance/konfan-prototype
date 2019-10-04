<template>
    <el-container>
        <link async href="https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe&display=swap" rel="stylesheet">
        <link async href="https://fonts.googleapis.com/css?family=Noto+Serif+SC|ZCOOL+XiaoWei" rel="stylesheet">
        <link async href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c|Merienda+One" rel="stylesheet">
        <link async href="https://fonts.googleapis.com/css?family=Gochi%20Hand" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>
        <link async href="https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe" rel="stylesheet">
        <link async href="https://fonts.googleapis.com/css?family=Dokdo" rel="stylesheet">
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
import footBar from '@/components/global/global_footbar_new.vue'
import navBar from '@/components/global/global_navbar.vue'
import scrollTop from '@/components/global/global_back_to_top.vue'
export default {
  name: 'App',
  components: {
    navBar,
    footBar,
    scrollTop,
  },
  data(){
    return{
      moePlayer: {
        isFixPlayerShow: true,
        volume: 0.2,
      },
      audio: [
        {
          name: 'わたしの恋はホッチキス/订书机之恋',
          artist: '放課後ティータイム',
          url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/love.mp3',
          cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/1.jpeg',
        },
        {
          name: 'ふわふわ時間/轻飘飘的时光',
          artist: '放課後ティータイム',
          url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/time.mp3',
          cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/2.jpeg',
        },
        {
          name: 'ふでペン 〜ボールペン〜/毛笔圆珠笔',
          artist: '放課後ティータイム',
          url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/pen.mp3',
          cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/3.jpeg',
        },
        {
          name: 'U&I',
          artist: '放課後ティータイム',
          url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/u%26i.mp3',
          cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/4.jpeg',
        },
        {
          name: '天使にふれたよ!',
          artist: '放課後ティータイム',
          url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/angel.mp3',
          cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/5.jpeg',
        },
      ],
    }
  },
  created(){
    this.listenChangeFixPlayer();
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
    height: 66px;
  }
</style>
