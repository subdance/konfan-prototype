<template>
  <div id="showContainer">
    <el-tabs tab-position="left">
      <el-tab-pane label="平泽 唯">
        <div class="characterHolder">

        </div>
      </el-tab-pane>
      <el-tab-pane label="田井中 律">
        <div class="characterHolder">

        </div>
      </el-tab-pane>
      <el-tab-pane label="秋山 澪">
        <div class="characterHolder">
        </div>
      </el-tab-pane>
      <el-tab-pane label="琴吹 ">
        <div class="characterHolder">

        </div>
      </el-tab-pane>
      <el-tab-pane label="中野 梓">
        <div class="characterHolder">

        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    },
  };
</script>
<style scoped>
  #showContainer {
    margin-top: 62px;
    background-image: url('../assets/home_pic/1.jpg');
    background-position: center;
    background-size: cover;
  }
  .characterHolder {
    width: 100%;
    height: 600px;
  }
</style>
