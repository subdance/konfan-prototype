<template>
  <el-container>
    <aplayer :audio="audio" :lrcType="3" />
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
      audio: {
        name: 'ヒビカセ',
        artist: 'れをる',
        url: 'http://pdacsgxq7.bkt.clouddn.com/mp3/hibikase.mp3',
        cover: 'http://p1.music.126.net/cZPx3peGTuWEI_GaZB5CDg==/8892850045794893.jpg?param=300y300', // prettier-ignore
        lrc: 'http://pdacsgxq7.bkt.clouddn.com/lrc/hibikase.lrc',
      },
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
    margin-bottom: 10px;
  }
</style>
