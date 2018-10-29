<template>
  <el-container>
    <el-header height='62px'>
      <navBar2></navBar2>
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
import navBar2 from '@/components/navbar2.vue'
export default {
  name: 'App',
  components: {
    navBar,
    footBar,
    iconHolder,
    navBar2,
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
    border-bottom: 1px solid grey;
  }
  .el-container {
  }
  .el-footer {
    padding: 0;
    margin-bottom: 10px;
  }
</style>
