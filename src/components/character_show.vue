<template lang="html">
  <div class="">
    <div class="tabHolder" :style="{ backgroundImage: 'url(' + nowBackPic + ')' }">
      <div class="tabHeaderHolder">
        <ul>
          <li @click='showCharacter(1)'><span class="girlSubNameText">平泽 唯</span><i v-show='isIconShow[0]' class="el-icon-star-off"></i></li>
          <li @click='showCharacter(2)'><span class="girlSubNameText">田井中 律</span><i v-show='isIconShow[1]' class="el-icon-star-off"></i></li>
          <li @click='showCharacter(3)'><span class="girlSubNameText">秋山 澪</span><i v-show='isIconShow[2]' class="el-icon-star-off"></i></li>
          <li @click='showCharacter(4)'><span class="girlSubNameText">琴吹</span><i v-show='isIconShow[3]' class="el-icon-star-off"></i></li>
          <li @click='showCharacter(5)'><span class="girlSubNameText">中野 梓</span><i v-show='isIconShow[4]' class="el-icon-star-off"></i></li>
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
export default {
  data(){
    return{
      nowBackPic: require('../assets/home_pic/6.jpg'),
      backPic: [
        require('../assets/home_pic/6.jpg'),
        require('../assets/home_pic/2.jpg'),
        require('../assets/home_pic/3.jpg'),
        require('../assets/home_pic/4.jpg'),
        require('../assets/home_pic/5.jpg'),
      ],
      nowGirlName: 'Hirasawa Yui',
      nowGirlIntro: 'aaa',
      backName: ['Hirasawa Yui', 'Mio Akiyama', 'Tainaka Ritsu', 'Kotobuki Tsumugi', 'Nakano Azusa'],
      backIntro: [
        'aaa',
        'bbb',
        'ccc',
        'ddd',
        'fff',
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
  }
  .tabHolder {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 600px;
    transition: 0.3s;
  }
  .tabHeaderHolder {
    margin-top: 120px;
    margin-left: 30px;
    float: left;
  }
  .girlSubNameText {
    color: white;
    text-shadow: 1px 1px 1px #666666;
    cursor: pointer;
  }
  .girlSubNameText:hover {}
  .introHolder {
    float: right;
    margin-top: 62px;
  }
</style>
