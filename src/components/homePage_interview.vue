<template lang="html">
  <div class="mainContainer">
    <div class="contentHolder" v-for="(content,i) in contents" :key="i" >
      <img class="contentImg" :src="getImageUrl(content.pic)">
      <p class="contentText">
        “{{content.text}}”</br>
        <span class="name"> {{content.name}}</br></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          pic: "../assets/character/nodoka.jpg",
          text: "轻音部啊...虽然平日里马马虎虎，但在学院祭上的表演十分有感染力。",
          name: "学生会长--真锅和",
        },
        {
          pic: "../assets/character/ui.jpg",
          text: "姐姐她以前可以无聊到在地上打滚，自从开始学吉他之后，就很少看到她百无聊奈的样子了！姐姐她在轻音部真的成长了很多!",
          name: "平泽唯的妹妹--平泽忧"
        },
        {
          pic: "../assets/character/sawako.jpg",
          text: "我十分感谢这群孩子让我当她们的顾问。还有很多特别的衣服想给她们穿呢。",
          name: "班主任，轻音部顾问, 前轻音部成员--山中佐和子"
        }
      ]
    }
  },
  methods: {
    getImageUrl(pic) {
      console.log(pic)
      return require(pic)
    }
  }
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
  }
  .mainContainer {
    margin-top: 4rem;
    width: 100%;
    position: relative;
  }
  .contentHolder {
    position: relative;
    text-align: center;
    display: flex;
    min-height: 30rem;
  }
  .contentImg {
    width: 30rem;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 8px 8px 2px black;
  }
  .contentText {
    width: 40rem;
    display: inline-block;
    font-size: 2rem;
    color: white;
  }
  .name {
    font-style: italic;
    color: #606266;
    font-size: 1.5rem;
  }
  @media only screen and (max-width:600px) {
    .contentHolder {
      flex-wrap: wrap;
    }
    .contentImg {
      width: 45vw;
      margin-bottom: 1rem;
    }
    .contentHolder:nth-child(2) {
      flex-direction: column-reverse;
    }
    .contentText {
      width: 70vw;
    }
  }
</style>
