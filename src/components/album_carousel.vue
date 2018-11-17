<template lang="html">
  <div class="mainHolder">
    <div class="titleHolder">
      <div class="textHolder">
        <span class="titileText">捕捉轻音部的闪光瞬间(●'◡'●)</span>
      </div>
    </div>
    <el-carousel
      indicator-position="outside"
      height='40rem'
      :interval="4000"
      type="card"
      trigger='click'
      >
      <el-carousel-item
        v-for="item in 5"
        :key="item"
        >
        <img class="carouselPic" :src='nowPic[item - 1]' alt="">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
export default {
  data(){
    return {
      nowPic: [
        require('../assets/character_element/yuiI2.png'),
        require('../assets/character_element/ritsuI2.png'),
        require('../assets/character_element/mioI2.png'),
        require('../assets/character_element/mugiI2.png'),
        require('../assets/character_element/azusaI2.png'),
      ],
    }
  },
}
</script>

<style scoped>
  .mainHolder {
    height: 70rem;
  }
  .carouselPic {
    border-radius: 5px;
    width: 100%;
    height: 40rem;
    object-fit: cover;
  }
  .titleHolder {
    height: 20rem;
  }
  .textHolder {
    text-align: right;
    padding-top: 110px;
  }
  .titileText {
    font-size: 4rem;
    color: #303133;
  }
</style>
