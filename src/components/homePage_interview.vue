<template lang="html">
  <div class="mainContainer2">
    <div class="contentHolder">
      <img class="contentImg" src="../assets/character/nodoka.jpg" alt="">
      <p class="contentText rotate1">
        “轻音部啊...虽然平日里马马虎虎，但在学院祭上的表演十分有感染力。”</br>
        <span class="name">学生会长--真锅和</br></span>
      </p>
    </div>
    <div class="contentHolder">
      <p class="left contentText rotate2" >
        “姐姐她在轻音部真的成长了很多!”</br>
        <span class="name">平泽唯的妹妹--平泽忧</br></span>
      </p>
      <img class="contentImg" src="../assets/character/ui.jpg" alt="">
    </div>
    <div class="contentHolder">
      <img class="contentImg" src="../assets/character/sawako.jpg" alt="">
        <p class="contentText rotate3">
          “我十分感谢这群孩子让我当她们的顾问。还有很多特别的衣服想给她们穿呢。”</br>
          <span class="name">班主任，轻音部顾问, 前轻音部成员--山中佐和子</br></span>
        </p>
    </div>
    <div class="help">
      <p>点击右下角的大小姐回到顶部哦</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  p {
    margin: 0;
    padding: 0;
  }
  .contentHolder {
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    padding: 1rem 0;
    position: relative;
    text-align: center;
    display: flex;
  }
  .mainContainer2 {
    margin-top: 4rem;
    width: 100%;
    position: relative;
  }
  .contentImg {
    width: 20rem;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 8px 8px 2px black;
  }
  .contentText {
    width: 40rem;
    display: inline-block;
    font-size: 2rem;
    color: white;
    position: relative;
    border-radius: 25px;
    margin-left: 20px;
    margin-right: 20px;
    border: 8px solid white;
    padding: 20px;
    box-shadow: 3px 3px 5px black;
    text-shadow: 0 -0.05em 0.1em rgba(0,0,0,.3);
  }
  .contentText:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 30px solid transparent;
    border-bottom-color: white;
    border-top: 0;
    border-left: 0;
    margin-left: -15px;
    margin-top: -30px;
  }
  .name {
    font-style: italic;
    color: #606266;
    font-size: 1.5rem;
    margin-bottom: -10px;
  }
  .help {
    text-align: center;
    color: #303133;
    font-size: 1rem;
    text-shadow: 0 -0.05em 0.1em rgba(0,0,0,.3);
  }
  .rotate1 {
    transform: rotate(3deg);
  }
  .rotate2 {
    transform: rotate(-5deg);
  }
  .rotate3 {
    transform: rotate(2deg);
  }
  @media only screen and (max-width:600px) {
    .mainContainer2 {
      margin-top: 0px;
    }
    .contentHolder {
      flex-wrap: wrap;
    }
    .contentImg {
      width: 45vw;
    }
    .contentHolder:nth-child(2) {
      flex-direction: column-reverse;
    }
    .contentText:nth-child(2) {
      margin-top: 2rem;
    }
    .contentText {
      width: 60vw;
      font-size: 1.5rem;
    }
    .left {
      margin-top: 2rem;
    }
  }
</style>
