<template>
  <el-container>
    <el-header>
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
import navBar from '@/components/navbar.vue'
import footBar from '@/components/footbar.vue'
import iconHolder from '@/components/icon_holder.vue'
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
    margin-top: -120px;
    padding: 0;
    z-index: 0;
  }
  .el-header {
    z-index: 1;
  }
  .el-container {
    background-image: url('assets/background/1.jpg');
  }
</style>
