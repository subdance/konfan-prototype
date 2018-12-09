<template lang="html">
  <div class="mainContainer">
    <div class="contentHolder rightContent">
      <img class="contentImg" src="../assets/character/nodoka.jpg" alt="">
      <p class="contentText">
        <span class="name">学生会长--真锅和</br></span>
        “轻音部啊...虽然平日里马马虎虎，但在学院祭上的表演还是十分有感染力。”
      </p>
    </div>
    <div class="contentHolder leftContent">
      <p class="contentText">
        <span class="name">平泽唯的妹妹--平泽忧</br></span>
        “姐姐她以前无聊的时候就在地上打滚。自从开始学吉他之后，就很少看到她百无聊奈的样子了！姐姐她在轻音部真的成长了很多”
      </p>
      <img class="contentImg" src="../assets/character/ui.jpg" alt="">
    </div>
    <div class="contentHolder rightContent">
      <img class="contentImg" src="../assets/character/sawako.jpg" alt="">
      <p class="contentText">
        <span class="name">班主任，轻音部顾问--山中佐和子</br></span>
        “我十分感谢这群孩子让我当她们的顾问。还有很多特别的衣服想给她们穿呢。”
      </p>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .mainContainer {
    width: 100%;
    min-height: 30rem;
    position: relative;
  }
  .contentHolder {
    position: relative;
    padding: 1rem 0rem;
    text-align: center;
    min-height: 20rem;
  }
  .rightContent {
  }
  .leftContent {
  }
  .contentImg {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 2px 2px 2px black;
  }
  .contentText {
    word-break: break-all;
    width: 40rem;
    display: inline-block;
    font-size: 2rem;
    color: white;
    margin-top: 0;
    position: relative;
    top: -10rem;
  }
  .name {
    color: #606266;
    font-size: 1.8rem;
  }
</style>
