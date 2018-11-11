<template lang="html">
  <div class="homePageHolder">
    <div class="showBox" id="box1">
      <video autoplay muted loop id="myVideo" >
        <source src="./assets/video/trim1.mp4" type="video/mp4">
      </video>
      <div class="mainIntro">
        <p class="ui">姐姐，轻音部的卖点是什么呀？</p>

        <p class="ui">哦？ 嗯...应该是开心吧</p>
        <p class="yui">开心？</p>
        <p class="yui">开心就是开心嘛</p>
      </div>
    </div>
    <div class="showBox" id="box2">
      <table>
        <tr>
          <td class="imgHolder"><img class="introPic" src="./assets/home_pic/7.jpg"></td>
          <td><div class="introTextHolder to-left">
                <p>{{ introTitle[0] }}</p>
                <p>{{ introText[0] }}</p>
              </div></td>
        </tr>
        <tr>
          <td><div class="introTextHolder to-right">
              <p>{{ introTitle[1] }}</p>
              <p>{{ introText[1] }}</p>
              </div></td>
          <td class="imgHolder"><img class="introPic" src="./assets/home_pic/4.jpg"></td>
        </tr>
        <tr>
          <td class="imgHolder"><img class="introPic" src="./assets/home_pic/6.jpg"></td>
          <td><div class="introTextHolder to-left">
              <p>{{ introTitle[2] }}</p>
              <p>{{ introText[2] }}</p>
              </div></td>
        </tr>
        <tr>
          <td><div class="introTextHolder to-right">
              <p>{{ introTitle[3] }}</p>
              <p>{{ introText[3] }}</p>
              </div></td>
          <td class="imgHolder"><img class="introPic" src="./assets/home_pic/5.jpg"></td>
        </tr>
      </table>
    </div>
    <div class="showBox" id="box3">

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      introTitle: [1,2,3,4],
      introText: [1,2,3,4],
    }
  },
}
</script>

<style scoped>
  td {
    text-align: center;
    width: 45%;
  }
  .homePageHolder {
    width: 100%;
    position: relative;
  }
  .imgHolder {
  }
  .showBox {
    background-size: cover;
    width: 100%;
    height: 760px;
    margin-bottom: 4rem;
  }
  .subText {
    color: white;
    font-size: 3rem;
  }
  .mainText {
    color: white;
    font-size: 3rem;
  }
  .introPic {
    width: 85%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 3px 3px grey;
  }
  .introTextHolder {
    margin: auto;
    width: 80%;
    border: 2px solid black;
  }
  .to-left {
    text-align: left;
  }
  .to-right {
    text-align: right;
  }
  .mainIntro {
    position: absolute;
    top: 35%;
    left: 50%;
    margin: 0;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 60rem;
    padding: 3rem 1rem 0rem 1rem;
    border-radius: 10px;
    overflow: hidden;
  }
  .mainIntro::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* background-color: white;
    opacity: 0.6; */
    z-index: -1;
  }
  .yui {
    font-size: 3rem;
    color: #606266;
    position: relative;
    z-index: 1;
    border-radius: 10px;
    overflow: hidden;
    padding: 0rem 1rem 0rem 1rem;
    float: right;
  }
  .yui::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #DCDFE6;
    opacity: 0.8;
    z-index: -1;
  }
  .ui {
    font-size: 3rem;
    color: #DCDFE6;
    position: relative;
    z-index: 1;
    border-radius: 10px;
    overflow: hidden;
    padding: 0rem 1rem 0rem 1rem;
    float: left;
  }
  .ui::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #606266;
    opacity: 0.8;
    z-index: -1;
  }
  #box1 {
    /* background-image: url('./assets/home_pic/1.jpg');
    background-position: center; */
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  #myVideo {
    position: absolute;
    top: -6rem;
    width: 100%;
    z-index: -100;
  }
  #box2 {
  }
</style>
