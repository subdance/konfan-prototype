<template lang="html">
  <transition name="el-fade-in-linear">
    <a v-show='isActivated' id="back2Top" title="点我试试看" @click='goBack'>
      <img src="https://konfan.oss-cn-beijing.aliyuncs.com/image/element/element/2%20%281%29.png" class='pic'alt="">
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

    goBack(evt){
      window.scrollTo(0, 0);
      // $("html,body").animate(
      //   {
      //     scrollTop: 0
      //   }, 100);
    }
  },

}
</script>

<style scoped>
  #back2Top {
    display: inline-block;
    overflow: hidden;
    z-index: 999;
    cursor: pointer;
    position: fixed;
    bottom: -0.5rem;
    right: 0;
    text-decoration: none;
  }
  img {
    width: 80px;
  }
  @media only screen and (max-width: 600px) {
  }
</style>
