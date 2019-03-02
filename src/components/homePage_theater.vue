<template lang="html">
  <div class="mainContainer">
    <link async href="https://fonts.googleapis.com/css?family=Noto+Serif+SC" rel="stylesheet">
    <div id="box1">
      <video autoplay muted loop id="myVideo" ref='myVideo'>
        <source src="http://35.244.189.64/k-on-fan/video/trim1.mp4" type="video/mp4">
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
    <div id="box2">
      <!-- <div class="textHolder"> -->

        <!-- <p id="headerText">轻音部</br>的配方是:</p> -->
        <div id="p1"><img class="icon" src='../assets/background/3.png'></div>

        <!-- <p id="p2">课后的茶点</p>
        <p id="p3">与轻飘飘的时光</p> -->
      <!-- </div> -->
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
  mounted(){
    this.checkHeight();
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
    checkHeight(){
      if (document.getElementById('box1').clientHeight > 803) {
        document.getElementById('box1').style.height = '804px';
        console.log(document.getElementById('box1').clientHeight);
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
    background-color: #F2F6FC;
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
    position: relative;
    z-index: 1;
  }
  #box2 {
    display: none
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
      height: auto;
      display: none;
    }
    #box2 {
      box-sizing: border-box;
      display: block;
      width: 100%;
      height:300px;
      background-image: url('http://35.244.189.64/k-on-fan/image/home-pic/1.jpg');
      background-position: left;
      background-size: cover;
    }
    /* #box2::after {
      content: "";
      position: absolute;
      top:0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.25);
    } */
    #myVideo {
      position: static;
      width: 100%;
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
      margin: 0;
    }
    .transPart {
      position: absolute;
      bottom: 0;
    }
    .introText {
      font-size: 1.3rem;
    }
    .mainIntro {
      box-sizing: border-box;
      padding: 0.3rem 2rem 0.3rem;
      width: 100%;
      position: absolute;
      top: auto;
      right: auto;
      bottom: 0;
      left: 0;
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
      border-radius: 0;
    }
    .mainIntro::after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 1px;
      left: 0;
      background-color: black;
      opacity: 0.5;
    }
    .mainIntro::first-letter {
      font-size: 1.3rem;
    }
    p {
      margin: 0;
      /* font-family: 'ZCOOL KuaiLe', cursive; */
      font-family: 'Noto Serif SC', serif;
      letter-spacing: 10px;
      writing-mode: vertical-lr;
    }
    .textHolder {
      width: 100%;
      /* position: absolute;
      left: 0px;
      top: 50%;
      transform: translate(0, -40%); */
      background: #FC5C7D;  /* fallback for old browsers */background: #FC5C7D;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to bottom, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to bottom, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
    #headerText {
      font-size: 2rem;
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      font-weight: 800;
    }
    #p1 {
      position: absolute;
      /* right: 0vw;
      top: 30vw; */
      right: 0;
      bottom: 40vw;
      /* padding-top: 10px;
      padding-left: 30px; */
      font-size: 3rem;
      font-weight: bolder;
      margin-bottom: 10px;
      /* color: #606266; */
      /* border: 2px solid white; */
      /* box-shadow: 3px 3px 10px black; */
      /* transform: rotate(90deg); */
    }
    #p2 {
      font-size: 3rem;
      font-weight: bolder;
      margin-bottom: 10px;
    }
    #p3 {
      font-size: 3rem;
      font-weight: bolder;
      margin-bottom: 10px;
    }
    .spin {
      color: #f55e83;
      /* font-size: 3rem; */
    }
    .icon {
      width: 70vw;
      object-fit: cover;
    }
  }
</style>
