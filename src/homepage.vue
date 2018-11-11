<template lang="html">
  <div class="homePageHolder">
    <div class="showBox" id="box1">
      <video autoplay muted loop id="myVideo" >
        <source src="./assets/video/trim1.mp4" type="video/mp4">
      </video>
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
    border-radius: 5px;
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
  #box1 {
    /* background-image: url('./assets/home_pic/1.jpg');
    background-position: center; */
    box-shadow: 3px 3px 3px grey;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  #myVideo {
    position: absolute;
    top: 0;
    width: 100%;
  }
  #box2 {
  }
</style>
