<template lang="html">
  <div id="mainHolder">
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="imgHolder">
            <img style="height:600px;" src="../assets/character_intro/yui2.png" alt="">
          </div>

        </div>
      </el-col>
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
 #mainHolder {
   width: 100%;
 }
 .imgHolder {
   border: 2px solid red;
   
   text-align: center;
 }
</style>
