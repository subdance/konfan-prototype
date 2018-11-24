<template>
  <el-container>
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
export default {
  name: 'App',
  components: {
    navBar,
    footBar,
    iconHolder,
  },
  data(){
    return{
      audio: [
        {
          name: 'わたしの恋はホッチキス/订书机之恋',
          artist: '放課後ティータイム',
          url: 'http://m10.music.126.net/20181124205058/21f51905d52cb25b95be0164b4e4cd6c/ymusic/0077/f86d/227f/93dd473dc82acb7a404017d09d6ebe75.mp3',
          cover: require('./assets/album/cover/1.jpg'), // prettier-ignore
        },
        {
          name: 'ふわふわ時間/轻飘飘的时光',
          artist: '放課後ティータイム',
          url: 'http://m10.music.126.net/20181120135051/25a88b6ccba36c8b8834fe3f98db5b0b/ymusic/3aa7/4dba/7a9b/67560fd92e3ecbc53e6c3a336c801126.mp3',
          cover: require('./assets/album/cover/2.jpg'),
        },
        {
          name: 'ふでペン 〜ボールペン〜/毛笔圆珠笔',
          artist: '放課後ティータイム',
          url: 'http://m10.music.126.net/20181120220303/c51579f1d743891a683dbe11d7f9e01b/ymusic/693e/8e1c/22e7/41d6e709fd50d33eaffc255a97224bc6.mp3',
          cover: require('./assets/album/cover/3.jpg'),
        },
        {
          name: 'U&I',
          artist: '放課後ティータイム',
          url: 'http://dl.stream.qqmusic.qq.com/M800001evOkC2lMQhz.mp3?vkey=320EE98C4FEF3A8770CFFF68FF0D7E37839695EB69A1C31B3BC4282E048CD77DF0ED103326FE7663C38A9E94DF530786ED3784910BFF12F1&guid=5150825362&fromtag=1',
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
    min-height: 1000px;
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
