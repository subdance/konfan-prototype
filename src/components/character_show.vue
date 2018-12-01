<template lang="html">
  <div>
    <div class="tabHolder">
      <div class="carouselPart">
        <el-carousel
          indicator-position="inside"
          height='72.5rem'
          trigger='click'
          :autoplay='autoplay'
          >
          <el-carousel-item
            v-for="item in 5"
            :key="item"
            >
            <div class="introHolder">
              <p class="girlNameText">{{ backName[ item - 1 ] }}</p>
              <p class="girlIntroText">{{ backIntro[ item - 1 ] }}</p>
            </div>
            <img class="bigImg" :src='backPic[ item - 1 ]' alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '@/eventbus.js'
  export default {
    data(){
      return{
        autoplay: false,
        nowBackPic: 'http://35.244.189.64/k-on-fan/image/character-intro/yui1.jpg',
        backPic: [
          'http://35.244.189.64/k-on-fan/image/character-intro/yui1.jpg',
          'http://35.244.189.64/k-on-fan/image/character-intro/ritsu1.jpg',
          'http://35.244.189.64/k-on-fan/image/character-intro/mio1.jpg',
          'http://35.244.189.64/k-on-fan/image/character-intro/mugi1.jpg',
          'http://35.244.189.64/k-on-fan/image/character-intro/azusa1.jpg',
        ],
        nowGirlName: 'Hirasawa Yui',
        nowGirlIntro: '主唱，主音吉他，团宠',
        backName: ['Hirasawa Yui', 'Tainaka Ritsu', 'Akiyama Mio', 'Kotobuki Tsumugi', 'Nakano Azusa'],
        backIntro: [
          '主唱，主音吉他，团宠',
          '部长，架子鼓手，搞笑担当',
          '主唱，贝斯手，人气成员',
          '电子琴手，金主',
          '辅音吉他手，唯宠',
        ],
        isIconShow: [true, false, false, false, false],
      }
    },
  methods: {
  },
}
</script>

<style scoped>
  .bigImg {
    width: 100%;
    height: 80rem;
    object-position: center;
    object-fit: cover;
    opacity:1;
    transition: opacity 0.5s linear;
  }
  * {
    box-sizing: border-box;
  }
  .tabHolder {
    position: relative;
    background-position: center;
    background-size: cover;
    width: 100%;
    background-image: none;
    transition: background-image 0.1s ease-out;
  }
  /* .tabHeaderHolder {
    margin-left: 30px;
    position: absolute;
    top: 120px;
    z-index: 999;
    border-radius: 10px;
    overflow: hidden;
  }
  .tabHeaderHolder::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    opacity: 0.3;
    z-index: -1;
  } */
  .girlSubNameText {
    font-size: 1.5rem;
    color: black;
    text-shadow: 1px 1px 1px #666666;
  }
  .introHolder {
    position: absolute;
    bottom: 10rem;
    left: 0;
    display: inline-block;
    margin-top: 40rem;
    margin-left: 200px;
  }
  .girlNameText {
    font-size: 7rem;
    font-weight: 800;
    color: #df000a;
    text-shadow: 3px 3px 1px grey, -1px -1px 1px grey, 1px -1px 1px grey, 0px 0px 0px grey;
    -webkit-text-stroke: 1px white;
  }
  .girlIntroText {
    color: #C0C4CC;
    font-size: 2rem;
    font-weight: bold;
  }
</style>
