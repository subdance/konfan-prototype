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
          url: 'http://dl.stream.qqmusic.qq.com/M800004T6yg21ZG6Xa.mp3?vkey=9AA4708802CD9E2DF3E153328555A8653FDDE2869D5EBF9B9A1D6123978A858126041D5AE71EE6ACA1A500D739C77D26DB694B63E572F2C4&guid=5150825362&fromtag=1',
          cover: require('./assets/album/cover/1.jpg'), // prettier-ignore
        },
        {
          name: 'ふわふわ時間/轻飘飘的时光',
          artist: '放課後ティータイム',
          url: 'http://dl.stream.qqmusic.qq.com/M800003zUdY31QQkvC.mp3?vkey=139101F1DAAC3312849932C61906E72BAFA71C6AB3AD8A8FB5A4A62FAA217E77523F116327462308AB9E9A8F0BC38A12C495F6405A098157&guid=5150825362&fromtag=1',
          cover: require('./assets/album/cover/2.jpg'),
        },
        {
          name: 'ふでペン 〜ボールペン〜/毛笔圆珠笔',
          artist: '放課後ティータイム',
          url: 'http://dl.stream.qqmusic.qq.com/M800004Y5Qi60fSqLE.mp3?vkey=C1AB8AF43D8883CE82EA6DA4B61DFFD252670F9F7F163DB5B74B83202682AEDF40251EFB8C8F214D18A8DD57BACA42ABB7BC70880C0ADD89&guid=5150825362&fromtag=1',
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
