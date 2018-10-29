<template lang="html">
  <div class="homePageHolder">
    <div class="showBox" id="box1">
      <!--<div class="blurHolder">
      </div>-->
      <div id="leftText">
        <p><span class="subText"></span></p>
        <p><span class="mainText"></span></p>
      </div>
    </div>
    <div class="showBox" id="box2">
    </div>
    <div class="showBox" id="box3">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .homePageHolder {
    position: relative;
  }
  .showBox {
    background-size: cover;
    width: 100%;
    height: 760px;
    border-radius: 3px;
  }
  .subText {
    color: white;
    font-size: 1rem;
  }
  .mainText {
    color: white;
    font-size: 1.3rem;
  }
  #box1 {
    background-image: url('assets/home_pic/1.jpg');
    background-position: center;
    box-shadow: 3px 3px 3px grey;
  }
  #leftText {
    width: 30%;
    height: 300px;
    border: 2px solid white;
    border-radius: 10px;
    position: relative;
    top:200px;
  }
</style>
