<template lang="html">
  <transition name="el-fade-in-linear">
    <a v-show='isActivated' id="back2Top" title="点我试试看" @click='goBack($event)'>
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/element/element/2.png" alt="">
    </a>
  </transition>
</template>

<script>
export default {
  data(){
    return {
      isActivated: false,
    }
  },
  mounted(){
    var that = this;
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        that.isActivated = true;
      }
      else {
        that.isActivated = false;
      }};
  },
  methods: {
    listenScroll(){
      var that = this;
      document.addEventListener("scroll", function(){
        if(document.documentElement.scrollTop > 250){
          that.isActivated = true;
        }
        else{
          that.isActivated = false;
        }
      });
    },

    goBack($event){
      $("html,body").animate({ scrollTop: 0 }, "slow");
    }
  },

}
</script>

<style scoped>
  #back2Top {
      overflow: hidden;
      z-index: 999;
      cursor: url(../assets/element/cursor-click.png) 14 0,pointer;;
      position: fixed;
      bottom: -0.5rem;
      right: 0;
      text-decoration: none;
  }
  img {
    height: 10rem;
    object-fit: contain;
    object-position: center;
  }
  @media only screen and (max-width: 600px) {
    img {
      height: 10rem;
    }
  }
</style>
