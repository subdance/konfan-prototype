<template lang="html">
  <div class="tabHolder">
    <div>
      <el-carousel
        indicator-position="inside"
        trigger='click'
        :autoplay='autoplay'
        :height='carouselHeight'
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
        carouselHeight: '',
      }
    },
    created(){
      this.setHeight();
    },
    methods: {
      setHeight(){
        if(window.innerWidth < 600){
          this.carouselHeight = 60 + 'vh';
        }
        else{
          this.carouselHeight = 100 + 'vh';
        }
      },
    },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .bigImg {
    width: 100%;
    height: 80rem;
    object-position: center;
    object-fit: cover;
  }
  .tabHolder {
    position: relative;
    width: 100%;
  }
  .girlSubNameText {
    font-size: 1.5rem;
    color: black;
    text-shadow: 1px 1px 1px #666666;
  }
  .introHolder {
    position: absolute;
    bottom: 10rem;
    left: 20rem;
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
  @media only screen and (max-width: 600px) {
    .tabHolder {
      padding-top: 60px;
    }
    .bigImg {
      width: 100%;
      height: 60vh;
      object-position: center;
      object-fit: cover;
    }
    .introHolder {
      position: absolute;
      bottom: 5vh;
      left: 1rem;
    }
    .girlNameText {
      font-size: 2rem;
    }
    .girlIntroText {
      font-size: 1.5rem;
    }
  }
</style>
