<template lang="html">
  <div class="homePageHolder">
    <div class="showBox" id="box1">
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
  }
  .showBox {
    background-size: cover;
    width: 100%;
    padding-top: 56.25%;
    border-radius: 3px;
  }
  #box1 {
    background-image: url('assets/home_pic/1.jpg');
    box-shadow: 3px 3px 3px grey;
  }
</style>
