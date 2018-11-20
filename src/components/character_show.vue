<template lang="html">
  <div>
    <div class="tabHolder" :style="{ backgroundImage: 'url(' + nowBackPic + ')' }">
      <div class="tabHeaderHolder">
        <ul>
          <li @click='showCharacter(1)'><span class="girlSubNameText"><i v-show='isIconShow[0]' class="el-icon-star-off"></i>平泽 唯<i v-show='isIconShow[0]' class="el-icon-star-off"></i></span></li>
          <li @click='showCharacter(2)'><span class="girlSubNameText"><i v-show='isIconShow[1]' class="el-icon-star-off"></i>田井中 律<i v-show='isIconShow[1]' class="el-icon-star-off"></i></span></li>
          <li @click='showCharacter(3)'><span class="girlSubNameText"><i v-show='isIconShow[2]' class="el-icon-star-off"></i>秋山 澪<i v-show='isIconShow[2]' class="el-icon-star-off"></i></span></li>
          <li @click='showCharacter(4)'><span class="girlSubNameText"><i v-show='isIconShow[3]' class="el-icon-star-off"></i>琴吹 紬<i v-show='isIconShow[3]' class="el-icon-star-off"></i></span></li>
          <li @click='showCharacter(5)'><span class="girlSubNameText"><i v-show='isIconShow[4]' class="el-icon-star-off"></i>中野 梓<i v-show='isIconShow[4]' class="el-icon-star-off"></i></span></li>
        </ul>
      </div>
      <div class="introHolder">
        <p class="girlNameText">{{ nowGirlName }}</p>
        <p class="girlIntroText">{{ nowGirlIntro }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '@/eventbus.js'
  export default {
    data(){
      return{
        // nowBackPic: require('../assets/character/yuimain.jpg'),
        nowBackPic: require('../assets/character/yui1.jpg'),
        backPic: [
          // require('../assets/character/yuimain.jpg'),
          // require('../assets/character/ritsumain.jpg'),
          // require('../assets/character/miomain.jpg'),
          // require('../assets/character/mugimain.jpg'),
          // require('../assets/character/azusamain.jpg'),
          require('../assets/character/yui1.jpg'),
          require('../assets/character/ritsu1.jpg'),
          require('../assets/character/mio1.jpg'),
          require('../assets/character/mugi1.jpg'),
          require('../assets/character/azusa1.jpg'),
        ],
        nowGirlName: 'Hirasawa Yui',
        nowGirlIntro: '主唱，主音吉他，团宠',
        backName: ['Hirasawa Yui', 'Tainaka Ritsu', 'Akiyama Mio', 'Kotobuki Tsumugi', 'Nakano Azusa'],
        backIntro: [
          '主唱，主音吉他，团宠',
          '部长，架子鼓手',
          '主唱，贝斯手',
          '金主，电子琴手',
          '唯宠，辅音吉他手',
        ],
        isIconShow: [true, false, false, false, false],
      }
    },
  methods: {
    showCharacter(index){
      //更改背景以及介绍文字
      this.nowBackPic = this.backPic[ index - 1 ];
      this.nowGirlName = this.backName[ index - 1 ];
      this.nowGirlIntro = this.backIntro[ index - 1 ];
      eventBus.$emit('changeCharacter', index);
      //调整星星显示位置
      for(let i = 0; i < 5; i ++){
        this.isIconShow[i] = false;
      }
      this.isIconShow[ index - 1 ] = true;
    },
  },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  ul, li {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
  }
  li {
    border-top: 1px solid grey;
    width: 10rem;
    height: 6rem;
  }
  li:hover {
    border-top: 1px solid #D70040;
    transition: 0.3s;
  }
  .tabHolder {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 750px;
    transition: 0.3s;
  }
  .tabHeaderHolder {
    margin-left: 30px;
    float: left;
    position: sticky;
    top: 120px;
    z-index: 1;
    border-radius: 10px;
    overflow: hidden;
  }
  .tabHeaderHolder::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    opacity: 0.3;
    z-index: -1;
  }
  .girlSubNameText {
    font-size: 1.5rem;
    color: black;
    text-shadow: 1px 1px 1px #666666;
  }
  .introHolder {
    display: inline-block;
    margin-top: 40rem;
    margin-left: 200px;
  }
  .girlNameText {
    font-size: 7rem;
    font-weight: 800;
    color: #df000a;
    text-shadow: 3px 3px 1px grey, -1px -1px 1px grey, 1px -1px 1px grey, 0px 0px 0px grey;
    -webkit-text-stroke: 1px white;
  }
  .girlIntroText {
    color: white;
    font-size: 2rem;
    font-weight: bold;
  }
</style>
