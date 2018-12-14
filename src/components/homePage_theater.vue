<template lang="html">
  <div class="mainContainer">
    <div id="box1">
      <video autoplay muted loop id="myVideo" >
        <source src="../assets/video/trim1.mp4" type="video/mp4">
      </video>
      <transition name="el-fade-in-linear">
        <div class="mainIntro" v-show='isTextOneShow'>
          <span class="introText">{{ nowMainIntroText }}</span>
        </div>
      </transition>
      <transition name="el-fade-in-linear">
        <div class="mainIntro" v-show='isTextTwoShow'>
          <span class="introText">{{ nowMainIntroText }}</span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isTextOneShow: true,
      isTextTwoShow: false,
      textIndex: 1,
      nowMainIntroText: "“如果你说最喜欢我 我会用最最喜欢回应你。”—【相遇天使】",
      backMainIntroText: [
        "“如果你说最喜欢我 我会用最最喜欢回应你。”—【相遇天使】 ",
        "“请不要毕业 就算只是喝茶不排练也没关系 请不要毕业”— 梓",
        "“要是喜欢的概率 能用公式算出来 那该有多好”—【订书机之恋】",
        "“没有过分显眼的地方，但也不会埋没于大家的音色之中。我就一直想做那样的贝斯手”— 澪",
        "“也就是说，放学后下午茶是把现在高中生的‘摇滚精神’表现出来的乐队吧”— 律",
        "“大家都好厉害，不要扔下我独自长大哦”— 唯"
      ],
    }
  },
  created(){
    setInterval(this.changeShow, 4000);
  },
  methods:{
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
  },
}
</script>

<style scoped>
  .introText {
    font-size: 3rem;
    color: #F2F6FC;
  }
  .mainContainer {

    width: 100%;
    position: relative;
  }
  .mainIntro {
    padding: 1rem 2rem 1rem;
    position: absolute;
    top: 50%;
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
    width: 100%;
    height: 100vh;
    overflow: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  #myVideo {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    margin: 0;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  @media only screen and (max-width: 600px) {
    .mainContainer {
      padding-top: 60px;
    }
    #box1 {
      height: 50vh;
    }
    #myVideo {
      position: static;
      width: 100%;
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    .transPart {
      position: absolute;
      bottom: 0;
    }
    .introText {
      font-size: 1rem;
    }
    .mainIntro {
      box-sizing: border-box;
      padding: 1rem 2rem 1rem;
      width: 100%;
      position: static;
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
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
    }
    .mainIntro::first-letter {
      font-size: 2rem;
    }
  }
</style>
