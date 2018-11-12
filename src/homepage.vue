<template lang="html">
  <div class="homePageHolder">
    <div class="showBox" id="box1">
      <video autoplay muted loop id="myVideo" >
        <source src="./assets/video/trim1.mp4" type="video/mp4">
      </video>
      <transition name="el-fade-in-linear">
        <div class="mainIntro" v-show='isTextOneShow'>
          <p :style="styleObject1">"我当初听到轻音部，还以为是十分简单，轻松的音乐呢"</p>
        </div>
      </transition>
      <transition name="el-fade-in-linear">
        <div class="mainIntro" v-show='isTextTwoShow'>
          <p :style="styleObject2">所以，也请大家怀着轻松的心情加入就行了！</p>
        </div>
      </transition>
    </div>
    <div class="showBox" id="box2">
      <table>
        <tr>
          <td class="imgHolder"><img class="introPic" src="./assets/home_pic/7.jpg"></td>
          <td><div class="introTextHolder to-left">
                <p>{{ introTitle[0] }}</p>
                <p>{{ introText[0] }}</p>
              </div></td>
        </tr>
        <tr>
          <td><div class="introTextHolder to-right">
              <p>{{ introTitle[1] }}</p>
              <p>{{ introText[1] }}</p>
              </div></td>
          <td class="imgHolder"><img class="introPic" src="./assets/home_pic/4.jpg"></td>
        </tr>
        <tr>
          <td class="imgHolder"><img class="introPic" src="./assets/home_pic/6.jpg"></td>
          <td><div class="introTextHolder to-left">
              <p>{{ introTitle[2] }}</p>
              <p>{{ introText[2] }}</p>
              </div></td>
        </tr>
        <tr>
          <td><div class="introTextHolder to-right">
              <p>{{ introTitle[3] }}</p>
              <p>{{ introText[3] }}</p>
              </div></td>
          <td class="imgHolder"><img class="introPic" src="./assets/home_pic/5.jpg"></td>
        </tr>
      </table>
    </div>
    <div class="showBox" id="box3">

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      introTitle: [1,2,3,4],
      introText: [1,2,3,4],
      isTextOneShow: true,
      isTextTwoShow: false,
      styleObject1: {
        fontSize: '3rem',
        color: '#606266',
      },
      styleObject2: {
        fontSize: '3rem',
        color: '#606266',
      },
    }
  },
  created(){
    setInterval(this.changeShow, 5000);
  },
  methods: {
    changeShow(){
      this.isTextOneShow = !this.isTextOneShow;
      this.isTextTwoShow = !this.isTextTwoShow;
    },
  },
}
</script>

<style scoped>
  td {
    text-align: center;
    width: 45%;
  }
  .homePageHolder {
    width: 100%;
    position: relative;
  }
  .imgHolder {
  }
  .showBox {
    background-size: cover;
    width: 100%;
    height: 760px;
    margin-bottom: 4rem;
  }
  .subText {
    color: white;
    font-size: 3rem;
  }
  .mainText {
    color: white;
    font-size: 3rem;
  }
  .introPic {
    width: 85%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 3px 3px grey;
  }
  .introTextHolder {
    margin: auto;
    width: 80%;
    border: 2px solid black;
  }
  .to-left {
    text-align: left;
  }
  .to-right {
    text-align: right;
  }
  .mainIntro {
    position: absolute;
    top: 35%;
    left: 50%;
    margin: 0;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 60rem;
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 10px;
    overflow: hidden;
  }
  .mainIntro::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    opacity: 0.6;
    z-index: -1;
  }
  .mainIntro::first-letter {
    font-size: 4rem;
  }
  #box1 {
    /* background-image: url('./assets/home_pic/1.jpg');
    background-position: center; */
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  #myVideo {
    position: absolute;
    top: -6rem;
    width: 100%;
    z-index: -100;
  }
  #box2 {
  }
</style>
