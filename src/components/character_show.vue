<template lang="html">
  <div>
    <div class="tabHolder">
      <div class="carouselPart">
        <el-carousel
          indicator-position="inside"
          height='80rem'
          trigger='click'
          >
          <el-carousel-item
            v-for="item in 5"
            :key="item"
            >
            <div class="introHolder">
              <p class="girlNameText">{{ backName[ item - 1 ] }}</p>
              <p class="girlIntroText">{{ backIntro[ item - 1 ] }}</p>
            </div>
            <img class="bigImg" :src='backPic[ item - 1 ]' alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- <div class="tabHeaderHolder">
        <ul>
          <li @click='showCharacter(1)'><span class="girlSubNameText"><i v-show='isIconShow[0]' class="el-icon-star-off"></i>平泽 唯<i v-show='isIconShow[0]' class="el-icon-star-off"></i></span></li>
          <li @click='showCharacter(2)'><span class="girlSubNameText"><i v-show='isIconShow[1]' class="el-icon-star-off"></i>田井中 律<i v-show='isIconShow[1]' class="el-icon-star-off"></i></span></li>
          <li @click='showCharacter(3)'><span class="girlSubNameText"><i v-show='isIconShow[2]' class="el-icon-star-off"></i>秋山 澪<i v-show='isIconShow[2]' class="el-icon-star-off"></i></span></li>
          <li @click='showCharacter(4)'><span class="girlSubNameText"><i v-show='isIconShow[3]' class="el-icon-star-off"></i>琴吹 紬<i v-show='isIconShow[3]' class="el-icon-star-off"></i></span></li>
          <li @click='showCharacter(5)'><span class="girlSubNameText"><i v-show='isIconShow[4]' class="el-icon-star-off"></i>中野 梓<i v-show='isIconShow[4]' class="el-icon-star-off"></i></span></li>
        </ul>
      </div> -->

    </div>
  </div>
</template>

<script>
  import eventBus from '@/eventbus.js'
  export default {
    data(){
      return{
        nowBackPic: 'http://35.244.189.64/others/vue-lab/image/1.jpg',
        backPic: [
          'http://35.244.189.64/others/vue-lab/image/1.jpg',
          'http://35.244.189.64/others/vue-lab/image/2.jpg',
          'http://35.244.189.64/others/vue-lab/image/3.jpg',
          'http://35.244.189.64/others/vue-lab/image/4.jpg',
          'http://35.244.189.64/others/vue-lab/image/5.jpg',
        ],
        nowGirlName: 'Hirasawa Yui',
        nowGirlIntro: '主唱，主音吉他，团宠',
        backName: ['Hirasawa Yui', 'Tainaka Ritsu', 'Akiyama Mio', 'Kotobuki Tsumugi', 'Nakano Azusa'],
        backIntro: [
          '主唱，主音吉他，团宠',
          '部长，架子鼓手，搞笑担当',
          '主唱，贝斯手，人气成员',
          '电子琴手，金主',
          '辅音吉他手，唯宠',
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
  .bigImg {
    width: 100%;
    height: 80rem;
    object-position: center;
    object-fit: cover;
    opacity:1;
    transition: opacity 0.5s linear;
  }
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
    left: 0px;
    transition: 0.2s;
    -moz-transition: 0.2s;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
  }
  .tabHolder {
    position: relative;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 750px;
    background-image: none;
    transition: background-image 0.1s ease-out;
    /* -moz-transition: background-image 0.2s ease-out;
    -webkit-transition: background-image 0.2s ease-out;
    -o-transition: background-image 0.2s ease-out; */
  }
  .tabHeaderHolder {
    margin-left: 30px;
    position: absolute;
    top: 120px;
    z-index: 999;
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
    position: absolute;
    bottom: 10rem;
    left: 10%;
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
