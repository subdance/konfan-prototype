<template lang="html">
  <div class="navBar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      >
      <el-menu-item index="1"><router-link to="/"><span class="navTextHome">HTT活动部室</span></router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/"><span class="navTextHome">茶色相簿</span></router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/"><span class="navTextHome">放映机</span></router-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          activeIndex: '1',
        };
      },
    }
</script>

<style scoped>
  a {
    text-decoration: none;/*remove router link underline*/
  }
  .navBar {
    display: inline-block;
  }
  .el-menu {
    background-color: inherit;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 3px solid white;
  }
  .navTextHome {
    font-size: 1rem;
    color: #df000a;
    text-shadow: 1px 1px 1px #666666;
    font-weight: bold;
  }
</style>
