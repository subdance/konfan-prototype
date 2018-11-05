<template lang="html">
  <div id="mainHolder">
    <div id="addTextHolder">
      <p id="addText"><i class="el-icon-star-on"></i>摄影师小姐把咱拍得太好看了吧！<i class="el-icon-star-on"></i></p>
    </div>
    <div class="introHolder">
      <el-row>
        <el-col :span="3">
          <div style="word-break:break-all; width:2rem; text-align:center; margin:auto;">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
        </el-col>
        <el-col :span="7">
          <div class="imgHolder">
            <img style="height:600px;" src="../assets/character_intro/yui3.png" alt="">
          </div>

        </el-col>
        <el-col :span="14">
          <div class="mcHolder">
            <img style="width:16rem;" src="../assets/character_intro/mc1.png" alt="">
          </div>
          <div class="introTextHolder">
            <p>HI!<span class="girlText">平泽 唯</span></p>
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
   font-size: 1.6rem;

   text-align: center;
 }
 #addText {
   color: #909399;
 }
 .introHolder {
   position: relative;
   z-index: 1;
 }
 .introHolder::after {
   background-image: url('../assets/background/4.jpg');
   opacity: 0.6;
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index: -1;
 }
 .imgHolder {
   text-align: center;
 }
 .mcHolder {

   position: absolute;
   right: 12rem;
   top: 10rem;

   width: 4rem;
 }
 .girlText {
   color: #df000a;
   font-weight: bold;
   font-size: 4.5rem;
   /* -webkit-text-stroke: 2px white; */
   text-shadow: 1px 1px 1px #666666;
 }
 .introTextHolder {
   padding-top: 4rem;
 }
</style>
