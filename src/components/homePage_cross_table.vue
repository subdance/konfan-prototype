<template lang="html">
  <div class="mainContainer">
    <div>
      <div class="flexContainer">
        <div
          class="flexPicItem"
          :style="{ backgroundImage: 'url(' + introPic[0] + ')' }"
          @mouseenter='setDisplay(0)'
          @mouseleave='setHide(0)'
          >
          <div
            class="innerHolder"
            v-show='innerDisplayArray[0]'
            >
            于2009年播出的轻音少女，成为了大热的现象级作品，甚至有了强国之源的美誉。
          </div>
        </div>
        <div class="flexTextItem">
          <div style="text-align: left;">
            <p>{{ introTitle[0] }}</p>
            <p>{{ introText[0] }}</p>
          </div>
        </div>
      </div>
      <div class="flexContainer">
        <div class="flexTextItem">
          <div style="text-align: right;">
            <p>{{ introTitle[1] }}</p>
            <p>{{ introText[1] }}</p>
          </div>
        </div>
        <div
          class="flexPicItem"
          :style="{ backgroundImage: 'url(' + introPic[1] + ')' }"
          @mouseenter='setDisplay(1)'
          @mouseleave='setHide(1)'
          >
          <div
            class="innerHolder"
            v-show='innerDisplayArray[1]'
            >
            于2009年播出的轻音少女，成为了大热的现象级作品，甚至有了强国之源的美誉。
          </div>
        </div>
      </div>
      <div class="flexContainer">
        <div
          class="flexPicItem"
          :style="{ backgroundImage: 'url(' + introPic[2] + ')' }"
          @mouseenter='setDisplay(2)'
          @mouseleave='setHide(2)'
          >
          <div
            class="innerHolder"
            v-show='innerDisplayArray[2]'
            >
            五位主角的声优成为了行业内的新星，日后多次在名作中出演主役。
          </div>
        </div>
        <div class="flexTextItem">
          <div style="text-align: left;">
            <p>{{ introTitle[2] }}</p>
            <p>{{ introText[2] }}</p>
          </div>
        </div>
      </div>
      <div class="flexContainer">
        <div class="flexTextItem">
          <div style="text-align: right;">
            <p>{{ introTitle[3] }}</p>
            <p>{{ introText[3] }}</p>
          </div>
        </div>
        <div
          class="flexPicItem"
          :style="{ backgroundImage: 'url(' + introPic[3] + ')' }"
          @mouseenter='setDisplay(3)'
          @mouseleave='setHide(3)'
          >
          <div
            class="innerHolder"
            v-show='innerDisplayArray[3]'
            >
            轻音的漫画依然在连载着，也许某一天这段温暖的故事会再次回归。
          </div>
        </div>
      </div>
      <interview></interview>
    </div>
  </div>
</template>

<script>
import interview from '@/components/homePage_interview.vue'
export default {
  components:{
    interview,
  },
  data(){
    return {
      innerDisplayArray: [false, false, false, false, ],
      introTitle: [
        'K-ON是“轻音部”这一高中社团的简称',
        '两位吉他手，一个键盘手，一个鼓手',
        '可口的点心，悠闲的午后',
        '生活，音乐，还有懵懂的梦想',
      ],
      introText: [
        '在这一社团中，五位少女成立了名为“放学后下午茶”（HTT）的乐队',
        '和一位贪吃的顾问，便是这个社团的全部成员',
        '以及些许手忙脚乱的练习，构成了云朵般的日常',
        '还有最最,最重要的——互相陪伴的彼此',
      ],
      introPic: [
        'http://35.244.189.64/k-on-fan/image/home-pic/9.jpg',
        'http://35.244.189.64/k-on-fan/image/home-pic/4.jpg',
        'http://35.244.189.64/k-on-fan/image/home-pic/8.jpg',
        'http://35.244.189.64/k-on-fan/image/home-pic/1.jpg',
      ],
    }
  },
  methods: {
    setDisplay(index){
      this.$set(this.innerDisplayArray, index, true);
    },
    setHide(index){
      this.$set(this.innerDisplayArray, index, false);
    },
  },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .flexContainer{
    padding-top: 4rem;
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
  }
  .flexPicItem {
    position: relative;
    width: 40%;
    height: 30rem;
    background-position: center;
    background-size: cover;
    border-radius: 7px;
    z-index: 1;
  }
  .flexTextItem {
    height: 30rem;
    width: 40%;
    position: relative;
    font-size: 2rem;
    color: #303133;
  }
  .flexTextItem > div {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
  .flexPicItem:hover::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0px;
    left: 0;
    filter: blur(10px);
    background-color: black;
    opacity: 0.8;
    z-index: -1;
    transform: scale(1.08);
  }
  .innerHolder {
    z-index: 1;
    width: 100%;
    color: white;
    font-size: 4rem;
    text-align: center;
    padding-top: 6rem;
  }
  .mainContainer {
    width: 100%;
    position: relative;
  }
  @media only screen and (max-width:600px) {
    .flexContainer{
      padding-top: 0;
      display: flex;
      justify-content: space-around;
      width: 100%;
      flex-wrap: wrap;
    }
    .mainContainer {
      position: relative;
      z-index: 99;
    }
    .flexPicItem {
      position: relative;
      width: 100%;
      height: 30rem;
      background-position: center;
      background-size: cover;
      border-radius: 0;
      z-index: 1;
    }
    .flexTextItem {
      height: auto;
      width: 100%;
      position: static;
      font-size: 1rem;
      color: #303133;
    }
    .flexTextItem > div {
      width: 100%;
      position: static;
      transform: translate(0, 0);
    }
    .innerHolder {
      font-size: 2.5rem;
    }

  }
</style>
