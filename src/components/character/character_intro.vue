<template lang="html">
  <div class="introHolder">
    <div class="smallScreenSelector">
      <div class="smallButton" @click='hideAndShow(1)'><span style="line-height:4rem">Yui!</span></div>
      <div class="smallButton" @click='hideAndShow(2)'><span style="line-height:4rem">Ritsu!</span></div>
      <div class="smallButton" @click='hideAndShow(3)'><span style="line-height:4rem">Mio!</span></div>
      <div class="smallButton" @click='hideAndShow(4)'><span style="line-height:4rem">Tsumugi</span>!</div>
      <div class="smallButton" @click='hideAndShow(5)'><span style="line-height:4rem">Azusa!</span></div>
    </div>
    <div class="cachePart">
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/character/yui1.png" alt="">
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc1.png" alt="">
    </div>
    <div class="cachePart">
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/character/ritsu1.png" alt="">
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc2.png" alt="">
    </div>
    <div class="cachePart">
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mio1.png" alt="">
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc3.png" alt="">
    </div>
    <div class="cachePart">
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mugi1.png" alt="">
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc4.png" alt="">
    </div>
    <div class="cachePart">
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/character/azusa1.png" alt="">
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc5.png" alt="">
    </div>

    <div class="button" id="button1" @click='hideAndShow(1)' >Hirasawa
    Yui!</div>
    <div class="button" id="button2" @click='hideAndShow(2)' >Tainaka
    Ritsu!</div>
    <div class="button" id="button3" @click='hideAndShow(3)' >Akiyama
    Mio!</div>
    <div class="button" id="button4" @click='hideAndShow(4)' >Kotobuki
    Tsumugi!</div>
    <div class="button" id="button5" @click='hideAndShow(5)' >Nakano
    Azusa!</div>
    <transition name="el-fade-in-linear">
      <el-row v-show='isShow'>
        <el-col :span="3">
          <div id="addition" style="word-break:break-all; width:2rem; text-align:center; margin:auto;">
          {{ verticalText }}
          </div>
        </el-col>
        <el-col :span="7">
          <div class="imgHolder">
            <img class="introImg" :src="nowHeadPic" alt="">
          </div>
        </el-col>
        <el-col :span="14">
          <div class="mcHolder" :style="{ backgroundImage: 'url(' + nowMcPic + ')' }">
          </div>
          <div class="introTextHolder">
            <div class="mainIntroHolder">
              <span class="girlNameText">{{ nowGirlName }}</span>
              <p class="mainIntro">{{ nowMainIntro }}</p>
            </div>
            <div class="girlTextHolder">
              {{ nowGirlIntro }}
            </div>
          </div>
        </el-col>
      </el-row>
    </transition>
    </div>
</template>

<script>
  import eventBus from '@/eventbus.js'
  export default {
    data(){
      return{
        isClicked: [true, false, false, false, false],
        isIconShow: [true, false, false, false, false],
        isShow: true,
        nowGirlName: '平泽 唯',
        backGirlName: ['平泽 唯', '田井中 律', '秋山 澪', '琴吹 紬', '中野 梓' ],
        nowGirlIntro: '吉他手！放假时总是无所事事，甜食一律包在她身上，悠哉游哉小妖精，平泽唯！',
        backGirlIntro: [
          '吉他手兼主唱！放假时总是无所事事，甜食一律包在她身上，悠哉游哉小妖精--平泽唯!',
          '架子鼓手，容貌秀丽，头脑明晰，用爽朗的笑容为大家带来幸福，大众偶像--田井中律！',
          '贝斯手兼主唱，超怕恐怖和疼疼的事情，轻音乐部的老大，DANGEROUS QUEEN--秋山澪！',
          '键盘手！在点心方面一眼辨乾坤，外柔内刚的天然系大小姐--琴吹紬！',
          '超强的吉他手！严肃的外表藏不住萌喵的本质，偶尔会做出小猫一样的举动，是最佳学妹！',
        ],
        nowMainIntro: '樱丘女子高中轻音部的吉他手兼主唱，天然呆，拥有名为绝对音感的特殊能力。最初错把轻音乐当成轻便、简易的音乐而加入了轻音部。',
        backMainIntro: [
          '樱丘女子高中轻音部的吉他手兼主唱，天然呆，拥有名为绝对音感的特殊能力。最初错把轻音乐当成轻便、简易的音乐而加入了轻音部。',
          '樱丘女子高中轻音部的部长及鼓手，个性比较像男孩子，与澪是从幼儿园起就已经认识的青梅竹马。善于交际，是个有着使部室的气氛明亮高涨能力的女孩。',
          '樱丘女子轻音部的电贝斯手及合唱（有时也会担任主唱）。左撇子，丹凤眼，有着到腰长度的黑发。是轻音部中唯一有后援会的部员。',
          '樱丘女子高中轻音部的键盘手，被田井中律和秋山澪拉入轻音部（本来想加入合唱团）。大家闺秀，举止得体，身为千金大小姐却有很大的力气。',
          '樱丘女子高中轻音部辅音吉他手，是第二年轻音部新加入的成员。做事认真，却又不时地透露出小孩子气。有着十分强悍的吉他能力。',
        ],
        verticalText: '.',
        nowHeadPic: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/yui1.png',
        backHeadPic: [
        'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/yui1.png',
        'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/ritsu1.png',
        'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mio1.png',
        'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mugi1.png',
        'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/azusa1.png',
        ],
        nowMcPic: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc1.png',
        backMcPic: [
         'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc1.png',
         'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc2.png',
         'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc3.png',
         'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc4.png',
         'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc5.png',
        ],
        isSmallScreen: false,
      }
    },
    created(){
    },
    methods:{
      changeCharacter(index){
        var that = this;
        setTimeout(function(){
          that.nowHeadPic = that.backHeadPic[ index - 1 ];
          that.nowGirlName = that.backGirlName[ index - 1 ];
          that.nowGirlIntro = that.backGirlIntro[ index - 1 ];
          that.nowMcPic = that.backMcPic[ index - 1 ];
          that.nowMainIntro = that.backMainIntro[ index - 1 ];
        }, 200)
      },

      hideAndShow(index){
        for(let i = 0; i < 5; i ++){
          this.isIconShow[i] = false;
          this.isClicked[i] = false;
        }
        this.isClicked[ index - 1 ] = true;
        this.isIconShow[ index - 1 ] = true;
        this.isShow = false;
        var that = this;
        setTimeout(function(index){
          that.isShow = true;
        }, 200)
        this.changeCharacter(index);
      }
    },
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  #mainHolder {
    width: 100%;
  }
  .addTextHolder {
    width: 100%;
    font-size: 1.6rem;
    text-align: center;
    overflow: hidden;
  }
  .introHolder {
    position: relative;
    z-index: 1;
    margin: auto;
    background-image: url('../../assets/background/1.png');
    background-repeat: repeat;
    width: 100%;
    /* overflow: hidden; */
  }
  .imgHolder {
    padding-top: 4rem;
    text-align: center;
  }
  .mcHolder {
    position: absolute;
    background-image: url('https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mc1.png');
    background-position: right bottom;
    background-size: contain;
    background-repeat: no-repeat;
    right: 0;
    bottom: 0;
    width: 22rem;
    height: 21rem;
    z-index: 1;
  }
  .girlNameText {
    color: #df000a;
    font-weight: bold;
    font-size: 7rem;
    text-shadow: 3px 3px 5px black;
  }
  .mainIntroHolder {
    width: 35rem;
    height: 40rem;
    font-size: 2rem;
    background-image: url('https://konfan.oss-cn-beijing.aliyuncs.com/image/element/element/1.gif');
    background-repeat: repeat-y;
    background-position: center;
    word-break: break-all;
    padding-top:20px;
    overflow: hidden;
    padding-left: 2rem;
    color: #303133;
    box-shadow: 2px 2px 2px black;
  }
  .mainIntro {
    line-height: 4rem;
    letter-spacing: 0.8rem;
    font-family: 'ZCOOL KuaiLe', cursive;
    font-size: 2.2rem;
    text-shadow: 0 -0.05em 0.1em rgba(0,0,0,.3);
  }
  .introTextHolder {
    padding-top: 4rem;
  }
  .girlTextHolder {
    position: absolute;
    right: 0rem;
    bottom: 15rem;
    width: 25rem;
    height:25rem;
    background-image: url('https://konfan.oss-cn-beijing.aliyuncs.com/image/element/element/dialog1.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    box-sizing: border-box;
    padding: 6rem 5rem 0 5rem;
    font-size: 1.9rem;
    font-style: italic;
    color: #606266;
    z-index: 2;
  }
  .nameTag {
    line-height: 4rem;
    font-size: 2rem;
    cursor: pointer;
    float: left;
    width: 20%;
    color: #606266;
    box-sizing: border-box;
    transition: 0.1s ease-in;
    border-radius: 20px;
    border: 2px solid white;
  }
  .nameTag:hover {
    background-color: #303133;
    color: white;
  }
  .smallScreenSelector {
    display: none;
  }
  .clicked {
    background-color: #303133;
    color: white;
  }
  .button {
    border: 4px solid white;
    position: absolute;
    -webkit-border-radius: 0 10px 200px / 0 200px 14px 250px;
    border-radius: 0 10px 200px / 0 200px 14px 250px;
    z-index: 1;
    cursor: pointer;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 180px;
    height: 180px;
    display:inline-block;
    padding: 30px 0 0;
    font: normal normal normal 5rem/1.3 "Gochi Hand", Helvetica, sans-serif;
    font-size: 4rem;
    color: rgba(255,0,106,0.58);
    text-align: center;
    white-space: pre;
    background: -webkit-repeating-linear-gradient( -90deg, rgba(129,203,188,0.5) 0, rgba(129,203,188,0.5) 0.44%, rgba(0,0,0,0) 0.44%, rgba(0,0,0,0) 22%), rgb(252, 245, 155);
    background: -moz-repeating-linear-gradient( 180deg, rgba(129,203,188,0.5) 0, rgba(129,203,188,0.5) 0.44%, rgba(0,0,0,0) 0.44%, rgba(0,0,0,0) 22%), rgb(252, 245, 155);
    background: repeating-linear-gradient( 180deg, rgba(129,203,188,0.5) 0, rgba(129,203,188,0.5) 0.44%, rgba(0,0,0,0) 0.44%, rgba(0,0,0,0) 22%), rgb(252, 245, 155);
    background-position: 50% 50%;
    -webkit-box-shadow: -3px 5px 12px 0 rgba(0,0,0,0.1) ;
    box-shadow: -3px 5px 12px 0 rgba(0,0,0,0.1) ;
    box-shadow: 3px 3px 3px black;
    transition: 0.5s ease-in-out;
  }
  .introImg {
    object-fit: contain;
    height: 600px;
  }
  #button1 {
    top: 2rem;
    left: 1rem;
    -moz-transform: rotateZ(-4deg) scaleX(1) scaleY(1) scaleZ(1)  ;
    -webkit-transform: rotateZ(-4deg) scaleX(1) scaleY(1) scaleZ(1)  ;
    transform: rotateZ(-4deg) scaleX(1) scaleY(1) scaleZ(1)  ;
  }
  #button2 {
    bottom: 6rem;
    left: 3rem;
    -moz-transform: rotateZ(4deg) scaleX(1) scaleY(1) scaleZ(1)  ;
    -webkit-transform: rotateZ(4deg) scaleX(1) scaleY(1) scaleZ(1)  ;
    transform: rotateZ(4deg) scaleX(1) scaleY(1) scaleZ(1)  ;
  }
  #button3 {
    bottom: 0rem;
    left: 35%;
    -moz-transform: rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)  ;
    -webkit-transform: rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)  ;
    transform: rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)  ;
  }
  #button4 {
    top: 2rem;
    right: 3rem;
    -moz-transform: rotateZ(3deg) scaleX(1) scaleY(1) scaleZ(1)  ;
    -webkit-transform: rotateZ(3deg) scaleX(1) scaleY(1) scaleZ(1)  ;
    transform: rotateZ(3deg) scaleX(1) scaleY(1) scaleZ(1)  ;
  }
  #button5 {
    bottom: 5rem;
    right: 20%;
    -moz-transform: rotateZ(-7deg) scaleX(1) scaleY(1) scaleZ(1)  ;
    -webkit-transform: rotateZ(-7deg) scaleX(1) scaleY(1) scaleZ(1)  ;
    transform: rotateZ(-7deg) scaleX(1) scaleY(1) scaleZ(1)  ;
  }
  #button1:hover {
    transform: rotate(15deg);
  }
  #button2:hover {
    transform: rotate(-10deg);
  }
  #button3:hover {
    transform: scale(1.2);
  }
  #button4:hover {
    transform: rotate(0deg);
  }
  #button5:hover {
    transform: rotate(-20deg);
  }
  .cachePart {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  .cachePart > img {
    position: absolute;
    opacity: 0;
    z-index: -1;
    max-height: 100px;
  }
  @media only screen and (max-width:600px) {
    .button {
      display: none;
    }
    .introHolder {
      height: 700px;
    }
    .mainIntroHolder {
      width: 90%;
      height: auto;
      position: absolute;
      top: 300px;
      left: 50%;
      transform: translateX(-50%);
      background-image: none;
      z-index: 1;
      box-shadow: none;
      padding-left: 1rem;
      text-align: center;
    }
    .mainIntroHolder::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #DCDFE6;
      opacity: 0.8;
      z-index: 0;
    }
    .girlNameText, .mainIntro {
      position: relative;
      z-index: 999;
    }
    .girlNameText {
      font-size: 2.5rem;
    }
    .girlTextHolder {
      display: none;
    }
    .mainIntro {
      line-height: 3rem;
      letter-spacing: 0.4rem;
      font-size: 1.9rem;
    }
    .mcHolder {
      display: none;
    }
    .smallScreenSelector {
      display: flex;
      flex-wrap: nowrap;
      padding: 0 1rem;
    }
    .smallButton {
      height: 4rem;
      box-sizing: border-box;
      text-align: center;
      flex-grow: 1;
      -webkit-border-radius: 0 10px 200px / 0 200px 14px 250px;
      border-radius: 0 10px 200px / 0 200px 14px 250px;
      z-index: 1;
      cursor: pointer;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font: normal normal normal 2rem/1.3 "Gochi Hand", Helvetica, sans-serif;
      color: rgba(255,0,106,0.58);
      text-align: center;
      white-space: pre;
      background: -webkit-repeating-linear-gradient( -90deg, rgba(129,203,188,0.5) 0, rgba(129,203,188,0.5) 0.44%, rgba(0,0,0,0) 0.44%, rgba(0,0,0,0) 22%), rgb(252, 245, 155);
      background: -moz-repeating-linear-gradient( 180deg, rgba(129,203,188,0.5) 0, rgba(129,203,188,0.5) 0.44%, rgba(0,0,0,0) 0.44%, rgba(0,0,0,0) 22%), rgb(252, 245, 155);
      background: repeating-linear-gradient( 180deg, rgba(129,203,188,0.5) 0, rgba(129,203,188,0.5) 0.44%, rgba(0,0,0,0) 0.44%, rgba(0,0,0,0) 22%), rgb(252, 245, 155);
      background-position: 50% 50%;
      -webkit-box-shadow: -3px 5px 12px 0 rgba(0,0,0,0.1) ;
      box-shadow: -3px 5px 12px 0 rgba(0,0,0,0.1) ;
      transition: 0.5s ease-in-out;
    }
    .smallButton:hover {
      color: #409EFF;
    }
    .imgHolder {
      padding-top: 2rem;
    }
    .introImg {
      object-fit: contain;
      width: 100vw;
    }
    #addition {
      display: none;
    }
  }
</style>
