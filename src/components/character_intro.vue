<template lang="html">
  <div id="mainHolder">
    <div id="addTextHolder">
      <p id="addText"><i class="el-icon-star-on"></i>摄影师小姐把咱拍得太好看了吧！(´・ω・｀)<i class="el-icon-star-on"></i></p>
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
        nowGirlIntro: '吉他手！放假时总是无所事事，甜食一律包在她身上，悠哉游哉小妖精，平泽唯！',
        backGirlIntro: [
          '吉他手兼主唱！放假时总是无所事事，甜食一律包在她身上，悠哉游哉小妖精--平泽唯!',
          '架子鼓手，容貌秀丽，头脑明晰，用爽朗的笑容为大家带来幸福，大众偶像--田井中律！',
          '贝斯手兼主唱，超怕恐怖和疼疼的事情，轻音乐部的老大，DANGEROUS QUEEN--秋山澪！',
          '键盘手！在点心方面一眼辨乾坤，外柔内刚的天然系大小姐--琴吹紬！',
          '超强的吉他手！严肃的外表藏不住萌喵的本质，偶尔会发出咕噜咕噜的叫声，是最佳学妹！',
        ],
        nowMainIntro: '樱丘女子高中轻音部的吉他手兼主唱，天然呆，拥有名为绝对音感的特殊能力。最初错把轻音乐当成轻便、简易的音乐而加入了轻音部。',
        backMainIntro: [
          '樱丘女子高中轻音部的吉他手兼主唱，天然呆，拥有名为绝对音感的特殊能力。最初错把轻音乐当成轻便、简易的音乐而加入了轻音部。',
          '樱丘女子高中轻音部的部长及鼓手，个性比较像男孩子，与澪是从幼儿园起就已经认识的青梅竹马。善于交际，是个有着使部室的气氛明亮高涨能力的女孩。',
          '樱丘女子轻音部的电贝斯手及合唱（有时也会担任主唱）。左撇子，丹凤眼，有着到腰长度的黑发。是轻音部中唯一有后援会的部员。',
          '樱丘女子高中轻音部的键盘手，被田井中律和秋山澪拉入轻音部（本来想加入合唱团）。大家闺秀，举止得体，身为千金大小姐却有很大的力气。',
          '樱丘女子高中轻音部辅音吉他手，是第二年轻音部新加入的成员。在做事认真，却又不时地透露出小孩子气。有着十分强悍的吉他能力。',
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
        this.nowMainIntro = this.backMainIntro[ index - 1 ];
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
   margin: auto;
 }
 .introHolder::after {
   background-image: url('../assets/background/1.png');
   background-repeat: repeat-x;
   opacity: 0.9;
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
 .girlNameText {
   color: #df000a;
   font-weight: bold;
   font-size: 7rem;
   text-shadow: 3px 3px black;
 }
 .mainIntroHolder {
   width: 35rem;
   height: 40rem;
   font-size: 2rem;
   box-shadow: 4px 4px 3px black;
   background-image: url('../assets/background/1.gif');
   background-repeat: repeat-y;
   background-position: center;
   word-break: break-all;
   border-radius: 10px;
   border: 2px solid white;
   overflow: hidden;
   padding-left: 2rem;
   color: #303133;
 }
 .mainIntro {
   line-height: 4rem;
   letter-spacing: 0.8rem;
 }
 .introTextHolder {
   padding-top: 4rem;
 }
 .girlTextHolder {
   position: absolute;
   right: 5rem;
   bottom: 15rem;
   width: 30rem;
   height:25rem;
   background-image: url('../assets/element/dialog1.png');
   background-position: center;
   background-size: contain;
   background-repeat: no-repeat;
   box-sizing: border-box;
   padding: 6rem 5rem 0 7rem;
   font-size: 2rem;
   font-style: italic;
   color: #606266;
 }
</style>
