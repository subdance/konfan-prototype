<template lang="html">
  <div class="mainHolder">
    <div class="titleHolder">
      <div class="textHolder">
        <div class="text">
          <span class="iconStyle">
            <i class="fa fa-camera-retro fa-5x"></i>
            &nbsp &nbsp
            <i class="fa fa-diamond fa-5x"></i>
            &nbsp &nbsp
            <i class="fa fa-heart fa-5x"></i>
            &nbsp &nbsp
            <i class="fa fa-music fa-spin fa-5x"></i>
          </span>
          <span class="titileText">捕捉轻音部的闪光瞬间(●'◡'●)</span>
        </div>
      </div>
    </div>

    <div class="carouselPart">
      <p class="introText">乐器</p>
      <el-carousel
        indicator-position="outside"
        height='40rem'
        type="card"
        trigger='click'
        interval='1800'
        >
        <el-carousel-item
          v-for="item in 5"
          :key="item"
          >
          <div class="detailHolderOuter">
            <div class="detailHolderInnerCard">
              <span class="detailText">{{ nowText1[ item - 1 ] }}</span>
            </div>
          </div>
          <img class="carouselPicCard" :src='nowPic1[ item - 1 ]' alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="carouselPart">
      <p class="introText">梦</p>
      <el-carousel
        height='65rem'
        trigger='click'
        :autoplay='autoplay'
        >
        <el-carousel-item
          v-for="item in 6"
          :key="item"
          >
          <div class="detailHolderOuter">
            <div class="detailHolderInnerCard">
              <span class="detailText">{{ nowText2[ item - 1 ] }}</span>
            </div>
          </div>
          <img class="carouselPic" :src='nowPic2[item - 1]' alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="carouselPart">
      <p class="introText">律澪</p>
      <el-carousel
        height='65rem'
        trigger='click'
        :autoplay='autoplay'
        >
        <el-carousel-item
          v-for="item in 6"
          :key="item"
          >
          <div class="detailHolderOuter">
            <div class="detailHolderInnerCard">
              <span class="detailText">{{ nowText3[ item - 1 ] }}</span>
            </div>
          </div>
          <img class="carouselPic" :src='nowPic3[item - 1]' alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="carouselPart">
      <p class="introText">碰到狗狗,少女会怎样？</p>
      <el-carousel
        height='65rem'
        trigger='click'
        :autoplay='autoplay'
        >
        <el-carousel-item
          v-for="item in 4"
          :key="item"
          >
          <div class="detailHolderOuter">
            <div class="detailHolderInnerCard">
              <span class="detailText">{{ nowText4[ item - 1 ] }}</span>
            </div>
          </div>
          <img class="carouselPic" :src='nowPic4[item - 1]' alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return {
      autoplay: false,
      nowPic1: [
        require('../assets/album/set1/1.png'),
        require('../assets/album/set1/2.png'),
        require('../assets/album/set1/3.png'),
        require('../assets/album/set1/4.png'),
        require('../assets/album/set1/5.png'),
      ],
      nowText1: [
        '唯：Gibson 2008 Les Paul Standard Heritage Cherry Sunburst',
        '律：Yamaha Hipgig HG6T46RMMY',
        '澪：Fender japan JB62-DMC/VSP/3TS LH',
        '紬：KORG Triton Extreme 76、KORG RK-100',
        '梓：Fender Japan Mustang MG69/MH CAR',
      ],
      nowPic2: [
        require('../assets/album/set2/1.png'),
        require('../assets/album/set2/2.png'),
        require('../assets/album/set2/3.png'),
        require('../assets/album/set2/4.png'),
        require('../assets/album/set2/5.png'),
        require('../assets/album/set2/6.png'),
      ],
      nowText2: [
        '烟花下的唯抱着吉他兴奋地跳着',
        '那无拘无束地样子，羞涩的澪从来不敢想象',
        '滑动着拨片，唯望着澪',
        '梦...演唱会...武道馆...',
        '这样啊，原来我的梦想只是永远和你们在一起',
        '永远一起唱我们的歌'
      ],
      nowPic3: [
        require('../assets/album/set3/1.png'),
        require('../assets/album/set3/2.png'),
        require('../assets/album/set3/3.png'),
        require('../assets/album/set3/4.png'),
        require('../assets/album/set3/5.png'),
        require('../assets/album/set3/6.png'),
      ],
      nowText3: [
        '“澪会生我的气吗？”',
        '“不生气啊，那还用说...”',
        '“只是，没有律的鼓，会有点寂寞”',
        '“虽然有点抢，但我还是喜欢律充满气势，力道十足的鼓点”',
        '“那就陪我到睡着嘛~求你啦澪”',
        '“哎...真受不了你...”',
      ],
      nowPic4: [
        require('../assets/album/set4/1.jpg'),
        require('../assets/album/set4/2.jpg'),
        require('../assets/album/set4/3.jpg'),
        require('../assets/album/set4/4.jpg'),
      ],
      nowText4: [
        '“（可真是让人兴奋呢）—紬”',
        '“走别的路行吗...”—澪',
        '“没事的啦~”—律',
        '“小狗乖哦小狗乖哦”—唯',
      ],
    }
  },
}
</script>

<style scoped>
  .mainHolder {

  }
  .carouselPicCard {
    border-radius: 10px;
    width: 100%;
    height: 40rem;
    object-fit: cover;
  }
  .carouselPic {
    width: 100%;
    height: 65rem;
    object-fit: cover;
    border-radius: 10px;
  }
  .titleHolder {
    height: 30rem;
  }
  .textHolder {
    padding-top: 170px;
  }
  .titileText {
    font-size: 4rem;
    color: #303133;
  }
  .icon {
    text-align: left;
    display: inline-block;
    padding-left: 3rem;
  }
  .iconStyle {
    text-shadow: 2px 2px 2px grey;
  }
  .text {
    text-align: center;
  }
  .introText {
    color: #606266;
    font-size: 2rem;
    padding-left: 5rem;
    margin-bottom: 0;
    font-style: italic;
  }
  .carouselPart {
    margin-bottom: 6rem;
    width: 95%;
    margin: auto;
  }
  .detailHolderOuter {
    text-align: center;
    position: relative;
  }
  .detailHolderInnerCard {
    position: absolute;
    top: 2rem;
    width: 100%;
  }

  .detailText {
    text-align: center;
    width: 100%;
    font-size: 2rem;
    /* color: #303133; */
    color: #F2F6FC;
    font-weight: bold;
    mix-blend-mode: exclusion;
  }
</style>
