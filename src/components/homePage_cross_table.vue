<template lang="html">
  <div class="mainContainer">
    <div>
      <div class="flexContainer" v-for="(intro,index) in intros">
        <div
          class="flexPicItem"
          :style="{ backgroundImage: `url(${intro.pic})`,order: index%2==0? 0:1 }"
          @mouseenter="setDisplay(index)"
          @mouseleave="setHide(index)"
          >
          <div
            class="innerHolder"
            v-text="intro.something"
            v-show="intro.display"
          >
          </div>
        </div>
        <div class="flexTextItem">
          <div :style="{textAlign: index%2 == 0 ? 'left':'right'}">
            <p>{{ intro.title }}</p>
            <p>{{ intro.text }}</p>
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
      intros: [
        {
          title: 'K-ON是“轻音部”这一高中社团的简称',
          text: '在这一社团中，五位少女成立了名为“放学后下午茶”（HTT）的乐队',
          pic: 'http://35.244.189.64/k-on-fan/image/home-pic/9.jpg',
          something: '于2009年播出的轻音少女，成为了大热的现象级作品，甚至有了强国之源的美誉。',
          display: false,
        },
        {
          title: '两位吉他手，一个键盘手，一个鼓手',
          text: '和一位贪吃的顾问，便是这个社团的全部成员',
          pic: 'http://35.244.189.64/k-on-fan/image/home-pic/4.jpg',
          something: '校园，废萌，社团，音乐等在当时新鲜无比的动画元素让轻音迅速走红。',
          display: false,
        },
        {
          title: '可口的点心，悠闲的午后',
          text: '以及些许手忙脚乱的练习，构成了云朵般的日常',
          pic: 'http://35.244.189.64/k-on-fan/image/home-pic/8.jpg',
          something: '五位主角的声优成为了行业内的新星，日后多次在名作中出演主役。',
          display: false,
        },
        {
          title: '生活，音乐，懵懂的梦想',
          text: '还有最最,最重要的——互相陪伴的彼此',
          pic: 'http://35.244.189.64/k-on-fan/image/home-pic/1.jpg',
          something: '轻音的漫画依然在连载着，也许某一天这段温暖的故事会再次回归。',
          display: false
        }
      ]
    }
  },
  methods: {
    setDisplay(index){
      this.intros[index].display = true
    },
    setHide(index){
      this.intros[index].display = false
    },
  },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .flexContainer{
    padding-top: 2rem;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 100%;
    color: white;
    font-size: 4rem;
    text-align: center;
  }
  .mainContainer {
    width: 100%;
    position: relative;
  }
  @media only screen and (max-width:600px) {
    .mainContainer {
      position: relative;
      padding-top: 2rem;
    }
    .flexContainer{
      display: flex;
      justify-content: space-around;
      width: 100%;
      flex-wrap: wrap;
    }
    .flexPicItem {
      position: relative;
      width: 90%;
      height: 20rem;
      background-position: center;
      background-size: cover;
      border-radius: 0;
      z-index: 1;
    }
    .flexTextItem {
      height: auto;
      width: 90%;
      position: static;
      font-size: 1.3rem;
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
