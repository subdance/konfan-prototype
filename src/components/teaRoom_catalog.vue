<template lang="html">
  <div v-bind:class="[isSmallScreen ? 'smallScreenCatalogContainer' : 'bigScreenCatalogContainer']">
    <link async href="https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe" rel="stylesheet">
    <div class="responsiveContainer">
      <span @click='showPanel()'>目录</span>
      <a @click='closePanel()' class="close"></a>
    </div>
    <p
      v-for='(item, index) in titleInfo'
      @click='scrollTo(index)'
      >
      {{ titleInfo[index] }}
    </p>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
export default {
  data(){
    return {
      titleInfo: [],
      anchro: [],
      isSmallScreen: false,
    }
  },
  created(){
    this.clearAll();
    eventBus.$on('catalogInfo', reg => {
      for (let i = 0; i < reg.length; i++) {
        this.titleInfo.push(reg[i]);
      }
      let temp1 = 'article';
      let temp2;
      for (let i = 0; i < reg.length; i++) {
        temp2 = i;
        temp2 = temp2.toString();
        var tempString = temp1.concat(temp2);
        this.anchro.push(tempString);
      }
    });
    this.screenCheck();
  },
  methods: {
    screenCheck(){
      if (window.innerWidth < 600) {
        this.isSmallScreen = true;
      }
      else {
        this.isSmallScreen = false;
      }
    },
    clearAll(){
      this.titleInfo = [];
      this.anchro = [];
    },
    scrollTo(index){
      eventBus.$emit('openArticle', index)
      index = index.toString();
      var refName = 'article'.concat(index);
      var element = document.getElementById(refName);
      var that = this;
      setTimeout(function(){
        var top = element.offsetTop - 10;
        window.scrollTo(0, top);
      }, 700)
    },
    showPanel(){
      if (this.isSmallScreen) {
        var targetDiv = document.getElementsByClassName('smallScreenCatalogContainer');
        var targetCross = document.getElementsByClassName('close');
        targetDiv[0].style.maxWidth = '200px';
        targetDiv[0].style.maxHeight = '1000px';
        targetDiv[0].style.borderRadius = '5px';
        targetDiv[0].style.paddingBottom = '10px';
        targetCross[0].style.display = 'block';
        targetCross[0].style.borderRadius = '0px';
      }
    },
    closePanel(){
      var targetDiv = document.getElementsByClassName('smallScreenCatalogContainer');
      var targetCross = document.getElementsByClassName('close');
      targetDiv[0].style.maxWidth = '30px';
      targetDiv[0].style.maxHeight = '30px';
      targetDiv[0].style.paddingBottom = '0px';
      targetDiv[0].style.borderRadius = '50%';
      targetCross[0].style.display = 'none';
    },
  },
}
</script>

<style lang="css" scoped>
  .bigScreenCatalogContainer {
    position: fixed;
    top: 70px;
    margin-top: -5px;
    text-align: center;
  }
  .bigScreenCatalogContainer > p, .smallScreenCatalogContainer > p {
    color: #303133;
    margin: 5px 10px;
    padding: 1px 3px;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 2px 2px 5px black;
  }
  .bigScreenCatalogContainer > p:hover, .smallScreenCatalogContainer > p:hover {
    background-color: #DCDFE6;
    transform: translate(0, -2px);
  }
  .responsiveContainer {
    display: none;
  }
  .smallScreenCatalogContainer {
    position: fixed;
    z-index: 990;
    max-width: 30px;
    max-height: 30px;
    top: 150px;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #409EFF;

  }
  .responsiveContainer > span {
    font-family: 'ZCOOL KuaiLe', cursive;
    color: #409EFF;
  }
  .crossStatus {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    .responsiveContainer {
      display: block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    .close {
      display: none;
      position: absolute;
      right: 12px;
      top: 5px;
      width: 15px;
      height: 15px;
    }
    .close:before, .close:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 15px;
      width: 2px;
      background-color: #409EFF;
    }
    .close:before {
      transform: rotate(45deg);
    }
    .close:after {
      transform: rotate(-45deg);
    }
  }
</style>
