<template>
  <el-container class="totalContainer">
    <el-header>
      <navBar></navBar>
    </el-header>

    <el-main>
      <router-view/>
    </el-main>

    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
import navBar from '@/components/navbar.vue'
export default {
  name: 'App',
  components: {
    navBar,
  }
}
</script>

<style>
  .totalContainer {
    width: 85%;
    margin: auto;
  }
</style>
