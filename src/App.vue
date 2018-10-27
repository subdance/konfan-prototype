<template>
  <el-container class="totalContainer">
    <el-header>
      <navBar></navBar>
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
export default {
  name: 'App',
  components: {
    navBar,
    footBar,
  }
}
</script>

<style scoped>
  .el-main {
    min-height: 1000px;
  }
  .el-container {
    background-repeat: repeat;
    background-image: url('assets/background/1.jpg');
  }
</style>
