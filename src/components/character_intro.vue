<template lang="html">
  <div id="mainHolder">
    <div id="addTextHolder">
      <p id="addText"><i class="el-icon-star-on"></i>摄影师小姐把咱拍得太好看了吧！<i class="el-icon-star-on"></i></p>
    </div>
    <div class="introHolder">
      <el-row>
        <el-col :span="3">
          <div style="word-break:break-all; width:2rem; text-align:center; margin:auto;">
          {{ verticalText }}
          </div>
        </el-col>
        <el-col :span="7">
          <div class="imgHolder">
            <img style="height:600px;" :src="nowHeadPic" alt="">
          </div>

        </el-col>
        <el-col :span="14">
          <div class="mcHolder" :style="{ backgroundImage: 'url(' + nowMcPic + ')' }">
          </div>
          <div class="introTextHolder">
            <span class="girlText">{{ nowGirlName }}</span>
            <div class="girlTextHolder">
              {{ nowGirlIntro }}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import eventBus from '@/eventbus.js'
  export default {
    data(){
      return{
        nowGirlName: '平泽 唯',
        backGirlName: ['平泽 唯', '田井中 律', '秋山 澪', '琴吹 紬', '中野 梓' ],
        nowGirlIntro: '吉他手！放假时总是无所事事，甜食一律包在她身上，悠哉游哉小妖精，平泽唯',
        backGirlIntro: [
          '吉他手兼主唱！放假时总是无所事事，甜食一律包在她身上，悠哉游哉小妖精--平泽唯!',
          '架子鼓手，容貌秀丽，头脑明晰，用爽朗的笑容为大家带来幸福，大众偶像--田井中律！',
          '贝斯手兼主唱，超怕恐怕和疼疼的事情，轻音乐部的老大，DANGEROUS QUEEN--秋山澪！',
          '键盘手！在点心方面一眼辨乾坤，外柔内刚的天然系大小姐--琴吹紬！',
        ],
        verticalText: 'what should i put in?',
        nowHeadPic: require('../assets/character_intro/yui1.png'),
        backHeadPic: [
          require('../assets/character_intro/yui1.png'),
          require('../assets/character_intro/ritsu1.png'),
          require('../assets/character_intro/mio1.png'),
          require('../assets/character_intro/mugi1.png'),
          require('../assets/character_intro/azusa1.png')
        ],
        nowMcPic: require('../assets/character_intro/mc1.png'),
        backMcPic: [
          require('../assets/character_intro/mc1.png'),
          require('../assets/character_intro/mc2.png'),
          require('../assets/character_intro/mc3.png'),
          require('../assets/character_intro/mc4.png'),
          require('../assets/character_intro/mc5.png'),
        ],
      }
    },
    created(){
      eventBus.$on('changeCharacter', index => this.changeCharacter(index))
    },
    methods:{
      changeCharacter(index){
        this.nowHeadPic = this.backHeadPic[ index - 1 ];
        this.nowGirlName = this.backGirlName[ index - 1 ];
        this.nowGirlIntro = this.backGirlIntro[ index - 1 ];
        this.nowMcPic = this.backMcPic[ index - 1 ];
      },
    },
  }
</script>

<style scoped>
 #mainHolder {
   width: 100%;
   background-position: center;
   background-size: cover;
 }
 #addTextHolder {
   font-size: 1.6rem;

   text-align: center;
 }
 #addText {
   color: #909399;
 }
 .introHolder {
   position: relative;
   z-index: 1;
 }
 .introHolder::after {
   background-image: url('../assets/background/4.jpg');
   opacity: 0.6;
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index: -1;
 }
 .imgHolder {
   text-align: center;
 }
 .mcHolder {
   position: absolute;
   background-image: url('../assets/character_intro/mc1.png');
   background-position: right bottom;
   background-size: contain;
   background-repeat: no-repeat;
   right: 0;
   bottom: 0;
   width: 22rem;
   height: 21rem;
 }
 .girlText {
   color: #df000a;
   font-weight: bold;
   font-size: 7rem;
   /* -webkit-text-stroke: 2px white; */
   text-shadow: 1px 1px 1px #666666;
 }
 .introTextHolder {
   padding-top: 4rem;
 }
 .girlTextHolder {
   position: absolute;
   right: 5rem;
   bottom: 15rem;
   width: 45rem;
   height: 40rem;
   background-image: url('../assets/element/dialog1.png');
   background-position: center;
   background-size: contain;
   background-repeat: no-repeat;
   box-sizing: border-box;
   padding: 11rem 5rem 0 7rem;
   font-size: 3.2rem;
 }
</style>
