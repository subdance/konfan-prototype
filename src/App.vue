<template>
  <el-container>
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
  }
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
  }
  .el-header::after {
    background-color: white;
    content: "";
    opacity: 0.2;
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
