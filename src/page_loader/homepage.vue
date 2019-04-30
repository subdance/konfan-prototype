<template lang="html">
  <div class="mainContainer">
    <theater></theater>
    <div class="backgroundHolder">
      <crossTable style="z-index: 20;"></crossTable>
      <div class="bottomHolder">
        <img class="bottomImg" src="https://konfan.oss-cn-beijing.aliyuncs.com/image/home/10.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
import interview from '@/components/homePage_interview.vue'
import theater from '@/components/homePage_theater.vue'
import crossTable from '@/components/homePage_cross_table.vue'
export default {
  components: {
    interview,
    theater,
    crossTable,
  },
  data(){
    return {
      innerDisplayArray: [false, false, false, false, ],
      introTitle: [
        'K-ON是“轻音部”这一高中社团的简称',
        '两位吉他手，一个键盘手，一个鼓手',
        '可口的点心，悠闲的午后',
        '生活，音乐，还有懵懂的梦想',
      ],
      introText: [
        '在这一社团中，五位少女成立了名为“放学后下午茶”（HTT）的乐队',
        '和一位贪吃的顾问，便是这个社团的全部成员',
        '以及些许手忙脚乱的练习，构成了云朵般的日常',
        '还有最最,最重要的——互相陪伴的彼此',
      ],
      introPic: [
        'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/9.jpg',
        'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/4.jpg',
        'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/8.jpg',
        'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/1.jpg',
      ],
    }
  },
  created(){
    eventBus.$emit('changeFixPlayer', true);
    eventBus.$emit('stopMusic', false);
  },
  computed:{
  },
  methods: {
    setDisplay(index){
      this.$set(this.innerDisplayArray, index, true);
    },
    setHide(index){
      this.$set(this.innerDisplayArray, index, false);
    },
  },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .backgroundHolder {
    background: #ff6e7f;
    background: -webkit-linear-gradient(to bottom, #bfe9ff, #ff6e7f);
    background: linear-gradient(to bottom, #bfe9ff, #ff6e7f);
  }
  .mainContainer {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .bottomHolder {
    margin-top: -5rem;
    width: 100%;
    max-height: 800px;
    overflow: hidden;
  }
  .bottomImg {
    margin: auto;
    width: 100%;
    max-height: 800px;
    object-fit: cover;
    object-position: top;
  }
  .floatingImg {
    display: block;
    position: absolute;
    height:100vh;
    left: 0;
    transform: translate(-50%, 0) rotateZ(-90deg);
    top: 250vh;
    z-index: 0;
  }
  @media only screen and (max-width:600px) {
    .bottomImg, .bottomHolder {
      height: 30vh;
    }
    .bottomHolder {
      margin-top: 1.5rem;
    }
  }
</style>
