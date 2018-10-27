<template lang="html">
  <div class="navBar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color=''
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
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #ff2433;
  }
  .navBar {
  }
  .navTextHome {
    font-size: 1.5rem;
    color: #f8efd2;
    text-shadow: -1px 0 1px #ff2433, 0 1px 1px #ff2433, 1px 0 1px #ff2433, 0 -1px 1px #ff2433;
    font-weight: bold;
  }
</style>
