<template lang="html">
  <transition name="el-fade-in-linear">
    <a v-show='isActivated' id="back2Top" title="点我试试看" href="#" @click='goBack()'>
      <img src="../assets/element/2.png" alt="">
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
    this.$nextTick(function() {
      this.listenScroll();
    });
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

    goBack(){
      $('html,body').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    }
  },

}
</script>

<style scoped>
  #back2Top {
      overflow: hidden;
      z-index: 999;
      cursor: pointer;
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
      height: 7rem;
    }
  }
</style>
