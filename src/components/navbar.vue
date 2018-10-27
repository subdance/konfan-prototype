<template lang="html">
  <div class="navBar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect">
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
          activeIndex2: '2'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  a {
    text-decoration: none;/*remove router link underline*/
  }
  .el-menu {
    background-color: inherit;
  }
  .el-submenu__title:hover {
    background-color: inherit;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid white;
  }
  .navBar {
    background-image: url('../assets/background/1.jpg');
    background-position: top;
    border-radius: 8px;
    overflow: hidden;
  }
  .navTextHome {
    font-size: 1.5rem;
    color: #df000a;
    text-shadow: 1px 1px 1px #666666;
    font-weight: bold;
  }
</style>
