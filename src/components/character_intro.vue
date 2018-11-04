<template lang="html">
  <div id="mainHolder">
    <div id="addTextHolder">
      <p id="addText"><i class="el-icon-star-on"></i>把我们照的这么帅气，咱给摄影师一块蛋糕吧！下面才是大家地真面目哦(❁´▽`❁)<i class="el-icon-star-on"></i></p>
    </div>
    <div class="introHolder">
      <el-row>
        <el-col :span="2">
          <div style="word-break:break-all; width:2rem; text-align:center; margin:auto;">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
        </el-col>
        <el-col :span="8">
          <div class="imgHolder">
            <img style="height:600px;" src="../assets/character_intro/yui3.png" alt="">
          </div>

        </el-col>
        <el-col :span="14">
          <div class="">

          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
 #mainHolder {
   width: 100%;

   background-position: center;
   background-size: cover;
 }
 #addTextHolder {
   height: 2.2rem;
   text-align: center;
 }
 #addText {
   color: #909399;
 }
 .introHolder {
   background-image: url('../assets/background/4.jpg');
 }
 .imgHolder {
   text-align: center;
 }
</style>
