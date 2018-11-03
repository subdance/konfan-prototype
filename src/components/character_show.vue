<template lang="html">
  <div class="">
    <div class="tabHolder" :style="{ backgroundImage: 'url(' + nowBackPic + ')' }">
      <div class="tabHeaderHolder">
        <ul>
          <li @click='showCharacter(1)'><i v-show='isIconShow[0]' class="el-icon-star-off"></i><span class="girlSubNameText">平泽 唯</span><i v-show='isIconShow[0]' class="el-icon-star-off"></i></li>
          <li @click='showCharacter(2)'><i v-show='isIconShow[1]' class="el-icon-star-off"></i><span class="girlSubNameText">田井中 律</span><i v-show='isIconShow[1]' class="el-icon-star-off"></i></li>
          <li @click='showCharacter(3)'><i v-show='isIconShow[2]' class="el-icon-star-off"></i><span class="girlSubNameText">秋山 澪</span><i v-show='isIconShow[2]' class="el-icon-star-off"></i></li>
          <li @click='showCharacter(4)'><i v-show='isIconShow[3]' class="el-icon-star-off"></i><span class="girlSubNameText">琴吹</span><i v-show='isIconShow[3]' class="el-icon-star-off"></i></li>
          <li @click='showCharacter(5)'><i v-show='isIconShow[4]' class="el-icon-star-off"></i><span class="girlSubNameText">中野 梓</span><i v-show='isIconShow[4]' class="el-icon-star-off"></i></li>
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
      nowBackPic: require('../assets/character/yuimain.jpg'),
      backPic: [
        require('../assets/character/yuimain.jpg'),
        require('../assets/character/ritsumain.jpg'),
        require('../assets/character/miomain.jpg'),
        require('../assets/character/mugimain.jpg'),
        require('../assets/character/azusamain.jpg'),
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
    cursor: pointer;
  }
  li {
    border-bottom: 1px solid grey;
  }
  li:hover {
    border-bottom: 1px solid white;
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
    margin-top: 120px;
    margin-left: 30px;
    float: left;
  }
  .girlSubNameText {
    color: white;
    text-shadow: 1px 1px 1px #666666;

  }
  .introHolder {
    display: inline-block;
    margin-top: 200px;
    margin-left: 200px;
  }
  .girlNameText {
    font-size: 4rem;
    font-weight: 800;
    color: #e23622;
    color: white;
    text-shadow: 3px 3px 1px grey, -1px -1px 1px white, 1px -1px 1px white, 0px 0px 0px white;

  }
</style>
