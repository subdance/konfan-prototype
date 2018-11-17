<template lang="html">
  <div class="mainHolder">
    <el-carousel
      indicator-position="outside"
      height='40rem'
      :interval="4000"
      type="card"
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
    width: 100%;
    height: 40rem;
    object-fit: cover;
  }
</style>
