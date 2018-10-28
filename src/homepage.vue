<template lang="html">
  <div class="homePageHolder">
    <div class="showBox" id="box1">
      <!--<div class="blurHolder">
      </div>-->
      <div id="leftText">
        <p><span class="subText">重要的，珍惜的，一直在身边，一旦成为理所当然，就难以发现</span></p>
        <p><span class="mainText">你说“最喜欢你”， 我回一句“最最喜欢你” </span></p>
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
    /*padding-bottom: 56.25%;控制长宽比？*/
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
  /*.blurHolder {
    filter: blur(6px);
    width: 30%;
    height: 10%;
    border: 2px solid red;
    position: absolute;
    top: 12%;
    background-image: url('assets/home_pic/1.jpg');
    background-position: left center;
  }*/
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
