<template>
  <el-container>
    <scrollTop></scrollTop>
    <aplayer
      :audio="audio"
      :lrcType="0"
      fixed
      autoplay
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
      audio: [
        {
          name: 'わたしの恋はホッチキス/订书机之恋',
          artist: '放課後ティータイム',
          url: 'http://piwap6ccf.bkt.clouddn.com/love.mp3',
          cover: require('./assets/album/cover/1.jpg'), // prettier-ignore
        },
        {
          name: 'ふわふわ時間/轻飘飘的时光',
          artist: '放課後ティータイム',
          url: 'http://piwap6ccf.bkt.clouddn.com/time.mp3',
          cover: require('./assets/album/cover/2.jpg'),
        },
        {
          name: 'ふでペン 〜ボールペン〜/毛笔圆珠笔',
          artist: '放課後ティータイム',
          url: 'http://piwap6ccf.bkt.clouddn.com/pen.mp3',
          cover: require('./assets/album/cover/3.jpg'),
        },
        {
          name: 'U&I',
          artist: '放課後ティータイム',
          url: 'http://piwap6ccf.bkt.clouddn.com/u&i.mp3',
          cover: require('./assets/album/cover/3.jpg'),
        },
      ],
    }
  },
  methods:{
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
