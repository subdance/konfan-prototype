<template lang="html">
  <div class="tabHolder">
    <el-carousel
      :indicator-position="indicatorPos"
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
</template>

<script>
  import eventBus from '@/eventbus.js'
  export default {
    data(){
      return{
        autoplay: false,
        nowBackPic: 'http://35.244.189.64/k-on-fan/image/character-intro/yui',
        backPic: [
          'http://35.244.189.64/k-on-fan/image/character-intro/yui',
          'http://35.244.189.64/k-on-fan/image/character-intro/ritsu',
          'http://35.244.189.64/k-on-fan/image/character-intro/mio',
          'http://35.244.189.64/k-on-fan/image/character-intro/mugi',
          'http://35.244.189.64/k-on-fan/image/character-intro/azusa',
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
        indicatorPos: 'inside',
      }
    },
    created(){
      this.setHeight();
    },
    methods: {
      setHeight(){
        if(window.innerWidth < 600){
          this.carouselHeight = '300px';
          this.indicatorPos = 'outside';
        }
        else{
          this.carouselHeight = 100 + 'vh';
          this.indicatorPos = 'inside';
        }
      }
    },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .bigImg {
    width: 100%;
    height: 100vh;
    object-position: center;
    object-fit: cover;
  }
  .tabHolder {
    position: relative;
    width: 100%;
    background-color: #303133;
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
      height: 300px;
      object-position: center;
      object-fit: cover;
    }
    .introHolder {
      position: absolute;
      top: 3rem;
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
