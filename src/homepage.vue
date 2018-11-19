<template lang="html">
  <div class="homePageHolder">
    <div class="showBox" id="box1">
      <video autoplay muted loop id="myVideo" >
        <source src="./assets/video/trim1.mp4" type="video/mp4">
      </video>
      <transition name="el-fade-in-linear">
        <div class="mainIntro" v-show='isTextOneShow'>
          <span :style="styleObject1">{{ nowMainIntroText }}</span>
        </div>
      </transition>
      <transition name="el-fade-in-linear">
        <div class="mainIntro" v-show='isTextTwoShow'>
          <span :style="styleObject2">{{ nowMainIntroText }}</span>
        </div>
      </transition>
    </div>
    <div class="showBox" id="box2">
      <table>
        <tr>
          <td >
            <div
              class="imgHolder"
              :style="{ backgroundImage: 'url(' + introPic[0] + ')' }"
              @mouseenter='setDisplay(0)'
              @mouseleave='setHide(0)'
              >
              <div
                class="innerHolder"
                v-show='innerDisplayArray[0]'
                >
                aaa
              </div>
            </div>
          </td>
          <td>
            <div class="introTextHolder to-left">
              <p>{{ introTitle[0] }}</p>
              <p>{{ introText[0] }}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="introTextHolder to-right">
              <p>{{ introTitle[1] }}</p>
              <p>{{ introText[1] }}</p>
            </div>
          </td>
          <td >
            <div
              class="imgHolder"
              :style="{ backgroundImage: 'url(' + introPic[1] + ')' }"
              @mouseenter='setDisplay(1)'
              @mouseleave='setHide(1)'
              >
              <div
                class="innerHolder"
                v-show='innerDisplayArray[1]'
                >
                aaa
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td >
            <div
              class="imgHolder"
              :style="{ backgroundImage: 'url(' + introPic[2] + ')' }"
              @mouseenter='setDisplay(2)'
              @mouseleave='setHide(2)'
              >
              <div
                class="innerHolder"
                v-show='innerDisplayArray[2]'
                >
                aaa
              </div>
            </div>
          </td>
          <td>
            <div class="introTextHolder to-left">
              <p>{{ introTitle[2] }}</p>
              <p>{{ introText[2] }}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="introTextHolder to-right">
              <p>{{ introTitle[3] }}</p>
              <p>{{ introText[3] }}</p>
            </div>
          </td>
          <td >
            <div
              class="imgHolder"
              :style="{ backgroundImage: 'url(' + introPic[3] + ')' }"
              @mouseenter='setDisplay(3)'
              @mouseleave='setHide(3)'
              >
              <div
                class="innerHolder"
                v-show='innerDisplayArray[3]'
                >
                aaa
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="showBox" id="box3">
      <aplayer
        :music="{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
        src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
        pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        }"
      />
    </div>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
  components: {
    Aplayer,
  },
  data(){
    return {
      innerDisplayArray: [false, false, false, false, ],
      introTitle: [1,2,3,4],
      introText: [1,2,3,4],
      isTextOneShow: true,
      isTextTwoShow: false,
      textIndex: 1,
      styleObject1: {
        fontSize: '3rem',
        color: '#606266',
      },
      styleObject2: {
        fontSize: '3rem',
        color: '#606266',
      },
      nowMainIntroText: "“如果你说最喜欢我 我会用最最喜欢回应你。”—【相遇天使】",
      backMainIntroText: [
        "“如果你说最喜欢我 我会用最最喜欢回应你。”—【相遇天使】 ",
        "“要是喜欢的概率 能用公式算出来 那该有多好”—【订书机之恋】",
        "“请不要毕业 就算只是喝茶不排练也没关系 请不要毕业”—梓",
        "“没有过分显眼的地方，但也不会埋没于大家的音色之中。我就一直想做那样的贝斯手”—澪"
      ],
      introPic: [
        require('./assets/home_pic/7.jpg'),
        require('./assets/home_pic/4.jpg'),
        require('./assets/home_pic/6.jpg'),
        require('./assets/home_pic/5.jpg'),
      ],
    }
  },
  created(){
    setInterval(this.changeShow, 4000);
  },
  computed:{

  },
  methods: {
    changeShow(){
      this.isTextOneShow = !this.isTextOneShow;
      this.nowMainIntroText = this.backMainIntroText[this.textIndex];
      this.isTextTwoShow = !this.isTextTwoShow;
      this.textIndex++;
      if(this.textIndex > 3){
        this.textIndex = 0;
      }
    },
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
  table {
    width: 100%;
  }
  td {
    width: 50% !important;
  }
  .innerHolder {
    z-index: 1;
    width: 100%;
    color: white;
    font-size: 6rem;
    text-align: center;
  }
  .homePageHolder {
    width: 100%;
    position: relative;
  }
  .imgHolder {
    margin: auto;
    position: relative;
    width: 80%;
    height: 30rem;
    background-position: center;
    background-size: cover;
    z-index: 1;
    border-radius: 7px;
  }

  .imgHolder:hover::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(10px);
    background-color: black;
    opacity: 0.8;
    z-index: -1;
    transform: scale(1.08);
  }
  .showBox {
    background-size: cover;
    width: 100%;
    min-height: 760px;
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
    display: inline-block;
    padding: 1rem 2rem 1rem;
    position: absolute;
    top: 35%;
    left: 50%;
    margin: 0;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1;
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
