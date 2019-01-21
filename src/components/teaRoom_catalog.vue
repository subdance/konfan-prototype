<template lang="html">
  <div class="catalogContainer">
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
  },
  mounted(){
  },
  methods: {
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
  },
}
</script>

<style lang="css" scoped>
  .catalogContainer {
    position: fixed;
    top: 70px;
    margin-top: -5px;
  }
  .catalogContainer > p {
    color: #303133;
    margin: 5px 10px;
    padding: 1px 3px;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 2px 2px 5px black;
  }
  .catalogContainer > p:hover {
    background-color: #DCDFE6;
    transform: translate(0, -2px);
  }
</style>
