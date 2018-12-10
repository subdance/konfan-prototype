<template lang="html">
  <div class="mainContainer">
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
                于2009年播出的轻音少女，成为了大热的现象级作品，甚至有了强国之源的美誉。
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
                废萌时代自此开启，“京都腿”与“京都脸”也被推向了世界。
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
                五位主角的声优成为了行业内的新星，日后多次在名作中出演主役。
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
                轻音的漫画依然在连载着，也许某一天这段温暖的故事会再次回归。
              </div>
            </div>
          </td>
        </tr>
      </table>
      <interview></interview>
      <div class="bottomHolder">
        <img class="bottomImg" src="./assets/home_pic/10.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
import interview from '@/components/homePage_interview.vue'
export default {
  components: {
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
      isTextOneShow: true,
      isTextTwoShow: false,
      textIndex: 1,
      styleObject1: {
        fontSize: '3rem',
        color: '#F2F6FC',
      },
      styleObject2: {
        fontSize: '3rem',
        color: '#F2F6FC',
      },
      nowMainIntroText: "“如果你说最喜欢我 我会用最最喜欢回应你。”—【相遇天使】",
      backMainIntroText: [
        "“如果你说最喜欢我 我会用最最喜欢回应你。”—【相遇天使】 ",
        "“请不要毕业 就算只是喝茶不排练也没关系 请不要毕业”— 梓",
        "“要是喜欢的概率 能用公式算出来 那该有多好”—【订书机之恋】",
        "“没有过分显眼的地方，但也不会埋没于大家的音色之中。我就一直想做那样的贝斯手”— 澪",
        "“也就是说，放学后下午茶是把现在高中生的‘摇滚精神’表现出来的乐队吧”— 律",
        "“大家都好厉害，不要扔下我独自长大哦”— 唯"
      ],
      introPic: [
        require('./assets/home_pic/9.jpg'),
        require('./assets/home_pic/4.jpg'),
        require('./assets/home_pic/8.jpg'),
        require('./assets/home_pic/1.jpg'),
      ],
    }
  },
  created(){
    setInterval(this.changeShow, 4000);
    eventBus.$emit('changeFixPlayer', true);
    eventBus.$emit('stopMusic', false);
  },
  computed:{
  },
  methods: {
    changeShow(){
      var length = this.backMainIntroText.length ;
      this.isTextOneShow = !this.isTextOneShow;
      this.nowMainIntroText = this.backMainIntroText[this.textIndex];
      this.isTextTwoShow = !this.isTextTwoShow;
      this.textIndex++;
      if(this.textIndex == length){
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
  * {
    box-sizing: border-box;
  }
  table {
    width: 100%;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  td {
    width: 50% !important;
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
  .imgHolder {
    margin: auto;
    position: relative;
    width: 80%;
    height: 30rem;
    background-position: center;
    background-size: cover;
    z-index: 1;
    border-radius: 7px;
    box-shadow: 3px 3px 5px black;
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
    font-size: 2rem;
    color: #303133;
    margin: auto;
    width: 80%;
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
    background-color: #303133;
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
    z-index: 1;
  }
  #myVideo {
    position: absolute;
    top: -6rem;
    width: 100%;
    z-index: -100;
  }
  #box2 {
    background: #ff6e7f;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #bfe9ff, #ff6e7f);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #bfe9ff, #ff6e7f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .bottomHolder {
    margin-top: -5rem;
    width: 100%;
    height:58rem;
    overflow: hidden;
  }
  .bottomImg {
    margin: auto;
    width: 100%;
    height:58em;
    object-fit: cover;
    object-position: top;
  }
</style>
