<template lang="html">
  <div class="mainContainer">
    <link async href="https://fonts.googleapis.com/css?family=Dokdo" rel="stylesheet">
    <div class="imgHolder">
    </div>
    <div class="dialogHolder">
      <p class="infoText">
        <span class="videoNameText">{{ nowVideoInfo.name }}</span>
        <span class="videoInfoText">{{ nowVideoInfo.info }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
export default {
  data(){
    return {
      nowVideoInfo: {
        id: 8,
        name: 'Singing!',
        info: '--剧场版 ENDING',
        author: '',
      },
      backVideoInfo: [
        {
          id: 1,
          name: 'Cagayake! Girls',
          info: '--S1 OPENING',
          author: '',
        },
        {
          id: 2,
          name: 'Go! Go! Maniac',
          info: '--S2 OPENING 1',
          author: '',
        },
        {
          id: 3,
          name: 'Utauyo!! Miracle',
          info: '--S2 OPENING 2',
          author: '',
        },
        {
          id: 4,
          name: 'Listen!!',
          info: '--S2 ENDING 1',
          author: '',
        },
        {
          id: 5,
          name: "Don't say 'lazy'",
          info: '--S1 ENDING ',
          author: '',
        },
        {
          id: 6,
          name: "No, Thank You!",
          info: '--S2 ENDING 2',
          author: '',
        },
        {
          id: 7,
          name: "Unmei♪wa♪Endless!",
          info: '--剧场版 OPENING',
          author: '',
        },
        {
          id: 8,
          name: "Singing!",
          info: '--剧场版 ENDING',
          author: '',
        },
      ],
    }
  },
  created(){
    eventBus.$on('changeVideo', reg => {
      this.changeVideo(reg);
    })
  },
  methods:{
    changeVideo(reg){
      this.nowVideoInfo = this.backVideoInfo[ reg - 1 ];
    }
  },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .mainContainer {
    position: absolute;
    bottom:0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
  }
  .imgHolder {
    width: 10%;
    background-image: url(../assets/element/mc.png);
    background-position: top;
    background-size: cover;
  }
  .dialogHolder {
    position: relative;
    background: #DCDFE6;
    border-radius: 10px;
    width: 50%;
    top:-1rem;
    color:
  }
  .dialogHolder::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 17px solid transparent;
    border-right-color: #DCDFE6;
    border-left: 0;
    border-bottom: 0;
    margin-top: -8.5px;
    margin-left: -17px;
  }
  .infoText {
    text-align: center;
    margin: 0;
    padding: 0;
    line-height: 10rem;
    font-size: 4rem;
    color: #606266;
  }
  .videoNameText {
    font-size: 6rem;
    font-weight: bold;
    font-family: 'Dokdo', cursive;
  }
  .videoInfoText {
    font-weight: normal;
    font-size: 1.5rem;
    font-style: italic;
  }
  @media only screen and (max-width:600px) {
    .mainContainer {
      position: absolute;
      bottom:0;
      left: 50%;
      transform: translate(-50%, 0);
      width: 100%;
      height: 10rem;
      display: flex;
      justify-content: center;
    }
    .imgHolder {
      width: 12rem;
      background-image: url(../assets/element/mc.png);
      background-position: top;
      background-size: cover;
    }
    .dialogHolder {
      position: relative;
      background: #DCDFE6;
      border-radius: 10px;
      height: 7rem;
      top:0rem;
    }
    .infoText {
      text-align: center;
      margin: 0;
      line-height: 2rem;
      font-size: 4rem;
      color: #606266;
    }
    .videoNameText {
      font-size: 3rem;
      font-weight: bold;
      font-family: 'Dokdo', cursive;
    }
    .videoInfoText:before { content: ' '; display: block; }
    .videoInfoText {
      font-weight: normal;
      font-size: 1rem;
      font-style: italic;
    }
    .mainContainer {
      position: static;
      transform: translate(0, 0);
      width: 100%;
      height: 10rem;
      display: flex;
      justify-content: center;
    }
  }
</style>
