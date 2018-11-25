<template lang="html">
  <div v-show='isActivated' class="">
    <a id="back2Top" title="Back to top" href="#" @click='goBack()'>&#10148;</a>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isActivated: false,
    }
  },
  mounted(){
    this.$nextTick(function() {
      this.listenScroll();
    });
  },
  methods: {
    listenScroll(){
      var that = this;
      document.addEventListener("scroll", function(){
        if(document.documentElement.scrollTop > 600){
          that.isActivated = true;
        }
        else{
          that.isActivated = false;
        }
      });
    },

    goBack(){
      do {
        window.scrollBy(0, -50);
      } while (document.documentElement.scrollTop > 100);
    }
  },

}
</script>

<style scoped>
#back2Top {
    width: 40px;
    line-height: 40px;
    overflow: hidden;
    z-index: 999;
    cursor: pointer;
    -moz-transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    position: fixed;
    bottom: 50px;
    right: 0;
    background-color: #DDD;
    color: #555;
    text-align: center;
    font-size: 30px;
    text-decoration: none;
}
#back2Top:hover {
    background-color: #DDF;
    color: #000;
}
</style>
