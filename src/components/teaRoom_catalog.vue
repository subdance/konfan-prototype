<template lang="html">
  <div class="catalogContainer">
   <a v-for='(item, index) in titleInfo' :href="anchro[index]">{{ titleInfo[index] }}</a>
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
        this.anchro.push(tempString);
      }
      console.log(this.anchro);
    });
  },
  mounted(){
  },
  methods: {
  },
}
</script>

<style lang="css" scoped>
</style>
