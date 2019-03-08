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
      <el-carousel
        :indicator-position="carouselIndicator"
        :height='carouselHeightCard'
        :type="carouselType"
        trigger='click'
        :inerval='interval'
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

    <div class="carouselPart" v-for='(carousel, index) in picSet'>
      <el-carousel
        :indicator-position="carouselIndicator"
        :height='carouselHeight'
        trigger='click'
        :autoplay='autoplay'
        arrow='always'
        >
        <el-carousel-item
          v-for="item in carousel.text.length"
          :key="item"
          >
          <div class="detailHolderOuter">
            <div class="detailHolderInnerCard">
              <span class="detailText">{{ carousel.text[ item - 1 ] }}</span>
            </div>
          </div>
          <img class="carouselPic" :src='carousel.pic[ item - 1 ]' alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="bottomText">
      <span>投稿功能正在研发中！！</span>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return {
      interval: 1800,
      autoplay: false,
      carouselType: 'card',
      carouselIndicator: '',
      carouselHeight: '50rem',
      carouselHeightCard: '40rem',
      nowPic1: [
        'http://35.244.189.64/k-on-fan/image/album/set1/1.jpg',
        'http://35.244.189.64/k-on-fan/image/album/set1/2.jpg',
        'http://35.244.189.64/k-on-fan/image/album/set1/3.jpg',
        'http://35.244.189.64/k-on-fan/image/album/set1/4.jpg',
        'http://35.244.189.64/k-on-fan/image/album/set1/5.png',
      ],
      nowText1: [
        '唯：Gibson 2008 Les Paul Standard Heritage Cherry Sunburst',
        '律：Yamaha Hipgig HG6T46RMMY',
        '澪：Fender japan JB62-DMC/VSP/3TS LH',
        '紬：KORG Triton Extreme 76、KORG RK-100',
        '梓：Fender Japan Mustang MG69/MH CAR',
      ],
      picSet: [
        {
          text: [
            '烟花下的唯抱着吉他兴奋地跳着',
            '那无拘无束地样子，羞涩的澪从来不敢想象',
            '滑动着拨片，唯望着澪',
            '梦...演唱会...武道馆...',
            '这样啊，原来我的梦想只是永远和你们在一起',
            '永远一起唱我们的歌'
          ],
          pic: [
            'http://35.244.189.64/k-on-fan/image/album/set2/1.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set2/2.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set2/3.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set2/4.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set2/5.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set2/6.jpg',
          ],
        },
        {
          text: [
            '“澪会生我的气吗？”',
            '“不生气啊，那还用说...”',
            '“只是，没有律的鼓，会有点寂寞”',
            '“虽然有点抢，但我还是喜欢律充满气势，力道十足的鼓点”',
            '“那就陪我到睡着嘛~求你啦澪”',
            '“哎...真受不了你...”',
          ],
          pic: [
            'http://35.244.189.64/k-on-fan/image/album/set3/1.png',
            'http://35.244.189.64/k-on-fan/image/album/set3/2.png',
            'http://35.244.189.64/k-on-fan/image/album/set3/3.png',
            'http://35.244.189.64/k-on-fan/image/album/set3/4.png',
            'http://35.244.189.64/k-on-fan/image/album/set3/5.png',
            'http://35.244.189.64/k-on-fan/image/album/set3/6.png',
          ],
        },
        {
          text: [
            '“（可真是让人兴奋呢）—紬”',
            '“走别的路行吗...”—澪',
            '“没事的啦~”—律',
            '“小狗乖哦小狗乖哦”—唯',
          ],
          pic: [
            'http://35.244.189.64/k-on-fan/image/album/set4/1.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set4/2.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set4/3.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set4/4.jpg',
          ],
        },
        {
          text: [
            '不论多冷 我都感觉幸福',
            '看着你跑来 吐出的白气随着起伏',
            '整齐的刘海 和你很是相配',
            '“喜欢”要如何开口',
            '舞动的雪 起伏的心情',
            '怎么 就像从未经历过这一切',
            '如此明亮的 泛着白光的街道',
            '我随着你走过 要是能牵着手就好了啊',
            '你调皮的笑容 真是好看',
            '但是我也想看到 羞红了脸的你',
          ],
          pic: [
            'http://35.244.189.64/k-on-fan/image/album/set5/1.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set5/2.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set5/3.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set5/4.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set5/5.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set5/6.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set5/7.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set5/8.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set5/9.jpg',
            'http://35.244.189.64/k-on-fan/image/album/set5/10.jpg',
          ],
        },
      ],
    }
  },
  created(){
    this.isSmallScreen();
  },
  methods:{
    isSmallScreen(){
      if(window.innerWidth < 600) {
        this.carouselType = '';
        this.carouselIndicator = 'outside'
        this.carouselHeight = '250px';
        this.carouselHeightCard = '250px';
      }
      else{
        this.carouselType = 'card';
        this.carouselIndicator = '';
        this.carouselHeight = '60rem';
        this.carouselHeightCard = '40rem';
      }
    },
  },
}
</script>

<style scoped>
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
    width: 95%;
    margin: 3rem auto;
  }
  .carouselPart:last-child {
    padding-bottom: 10rem;
    width: 95%;
    margin: auto;
  }
  .detailHolderOuter {
    text-align: center;
    position: relative;
  }
  .detailHolderInnerCard {
    position: absolute;
    top: 0rem;
    width: 100%;
  }
  .detailText {
    text-align: center;
    width: 100%;
    font-size: 2rem;
    color: #F2F6FC;
    font-weight: bold;
    mix-blend-mode: exclusion;
  }
  .bottomText {
    text-align: center;
    color: white;
    font-size: 1.5rem;
    padding-bottom: 4rem;
    margin-top: 4rem;
  }
  @media only screen and (max-width: 600px) {
    .carouselPicCard {
      border-radius: 10px;
      width: 100%;
      height: 250px;
      object-fit: contain;
    }
    .carouselPic {
      width: 100%;
      height: 250px;
      object-fit: contain;
      border-radius: 10px;
    }
    .introText {
      color: #606266;
      font-size: 1.7rem;
      text-align: center;
      padding-left: 0;
      margin-bottom: 0;
      font-style: italic;
    }
    .detailText {
      text-align: center;
      width: 100%;
      font-size: 1.5rem;
      color: #F2F6FC;
      font-weight: bold;
      mix-blend-mode: exclusion;
    }
    .textHolder {
      padding-top: 70px;
    }
    .titileText {
      font-size: 2rem;
      color: #303133;
    }
    .icon {
      text-align: left;
      display: inline-block;
      padding-left: 3rem;
    }
    .iconStyle {
      font-size: 0.5rem;
      text-shadow: 2px 2px 2px grey;
    }
    .titleHolder {
      height: auto;
    }
    .carouselPart {
      margin-bottom: 6rem;
      width: 100%;
      margin: auto;
    }
    .bottomText {
      text-align: center;
      color: white;
      font-size: 1.5rem;
      padding-bottom: 4rem;
      margin-top: 1rem;
    }
  }
</style>
