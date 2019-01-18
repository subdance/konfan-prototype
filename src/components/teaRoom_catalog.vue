<template lang="html">
  <div class="catalogContainer">
   <a
     v-for='(item, index) in titleInfo'
     href='#'
     :v-scroll-to="'#' + anchro[index]"
     @click='showArticle(index)'
     >
     {{ titleInfo[index] }}
   </a>
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
      let temp1 = '#';
      let temp2;
      for (let i = 0; i < reg.length; i++) {
        temp2 = i;
        temp2 = temp2.toString();
        var tempString = temp1.concat(temp2);
        // this.anchro.push(tempString);
        this.anchro.push(temp2);
      }
      console.log(this.anchro);
    });
  },
  mounted(){
  },
  methods: {
    clearAll(){
      this.titleInfo = [];
      this.anchro = [];
    },
    showArticle(index){
      console.log(index);
    },
  },
}
</script>

<style lang="css" scoped>
</style>
