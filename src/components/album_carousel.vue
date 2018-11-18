<template lang="html">
  <div class="mainHolder">
    <div class="titleHolder">
      <div class="textHolder">
        <!-- <div class="icon">

        </div> -->
        <div class="text">
          <span class="iconStyle">
            <i class="fa fa-camera-retro fa-5x"></i>
            &nbsp &nbsp
            <i class="fa fa-diamond fa-5x"></i>
            &nbsp &nbsp
            <i class="fa fa-heart fa-5x"></i>
            &nbsp &nbsp
            <i class="fa fa-music fa-5x"></i>
          </span>
          <span class="titileText">捕捉轻音部的闪光瞬间(●'◡'●)</span>
        </div>
      </div>
    </div>

    <div class="carouselPart">
      <p class="introText">唯律澪紬梓的乐器</p>
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
          <img class="carouselPicCard" :src='nowPic1[item - 1]' alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="carouselPart">
      <p class="introText">烟火下看到梦想的样子</p>
      <el-carousel
        indicator-position="outside"
        height='60rem'
        :interval="4000"
        trigger='click'
        >
        <el-carousel-item
          v-for="item in 6"
          :key="item"
          >
          <img class="carouselPic" :src='nowPic2[item - 1]' alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="carouselPart">
      <p class="introText">律澪</p>
      <el-carousel
        indicator-position="outside"
        height='60rem'
        :interval="4000"
        trigger='click'
        >
        <el-carousel-item
          v-for="item in 5"
          :key="item"
          >
          <img class="carouselPic" :src='nowPic3[item - 1]' alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return {
      nowPic1: [
        require('../assets/album/set1/1.png'),
        require('../assets/album/set1/2.png'),
        require('../assets/album/set1/3.png'),
        require('../assets/album/set1/4.png'),
        require('../assets/album/set1/5.png'),
      ],
      nowPic2: [
        require('../assets/album/set2/1.png'),
        require('../assets/album/set2/2.png'),
        require('../assets/album/set2/3.png'),
        require('../assets/album/set2/4.png'),
        require('../assets/album/set2/5.png'),
        require('../assets/album/set2/6.png'),
      ],
      nowPic3: [
        require('../assets/album/set3/1.png'),
        require('../assets/album/set3/2.png'),
        require('../assets/album/set3/3.png'),
        require('../assets/album/set3/4.png'),
        require('../assets/album/set3/5.png'),
      ],
    }
  },
}
</script>

<style scoped>
  .mainHolder {

  }
  .carouselPicCard {
    border-radius: 5px;
    width: 100%;
    height: 40rem;
    object-fit: cover;
  }
  .carouselPic {
    width: 100%;
    height: 60rem;
    object-fit: cover;
  }
  .titleHolder {
    height: 30rem;
  }
  .textHolder {
    padding-top: 110px;
  }
  .titileText {
    font-size: 4rem;
    color: #303133;
    text-align: right;
  }
  .icon {
    text-align: left;
    display: inline-block;
    padding-left: 3rem;
  }
  .iconStyle {
    text-shadow: 2px 2px 2px grey;
  }
  .text {
    float: right;
    display: inline-block;
    text-align: right;
  }
  .introText {
    color: #303133;
    font-size: 2rem;
    text-align: center;
  }
  .carouselPart {
    margin-bottom: 10rem;
  }
</style>
