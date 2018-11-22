<template lang="html">
  <div class="mainHolder">
    <p id="titleHolder">相信的心就是你的魔法</p>
    <div class="single_row">
      <div class="collapse_title" @click='changeShow(0)'>
        <span class="titleText">轻音</span>
      </div>
      <div class="collapse_text" :style="{maxHeight: maxHeight[0] + 'px'}">
        <p class="articleText">aa</p>
        <p class="articleText">aa</p>
      </div>
    </div>

    <div class="single_row">
      <div class="collapse_title" @click='changeShow(1)'>
        <span class="titleText">this is title</span>
      </div>
      <div class="collapse_text" :style="{maxHeight: maxHeight[1] + 'px'}">
        <p class="articleText">aa</p>
        <p class="articleText">aa</p>
      </div>
    </div>

    <div class="single_row">
      <div class="collapse_title" @click='changeShow(2)'>
        <span class="titleText">this is title</span>
      </div>
      <div class="collapse_text" :style="{maxHeight: maxHeight[2] + 'px'}">
        <p class="articleText">aa</p>
        <p class="articleText">aa</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      maxHeight: [0, 0, 0,],
    }
  },
  methods: {
    changeShow(index){
      let nowText = document.getElementsByClassName('collapse_text')[index];
      console.log(nowText.scrollHeight);
      if(!this.maxHeight[index]){
        for(let i = 0; i < this.maxHeight.length; i ++){
          this.$set(this.maxHeight, i, 0);
        }
        this.$set(this.maxHeight, index, nowText.scrollHeight);
      }
      else{
        this.$set(this.maxHeight, index, 0);
      }
    },
  },

}
</script>

<style scoped>

  * {
    box-sizing: border-box;
  }
  #titleHolder {
    font-size: 3rem;
    text-align: center;
  }
  .collapse_title {
    height: 4rem;
    font-size: 3rem;
    cursor: pointer;
    transition: padding-left 0.7s ease-out;
  }
  .collapse_title:hover {
    padding-left: 5rem;
    font-weight: bold;
    transition: padding-left 0.7s ease-out;
  }
  .collapse_text {
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    color: #606266;
    padding-left: 2rem;
  }
  .single_row {
    padding-left: 3rem;
    margin-bottom: 1rem;
  }
  .titleText {
    color: #303133;

  }
  .articleText {
    font-size: 2rem;
    color: #EBEEF5;
  }
  .articleText::first-letter {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .mainHolder {
  }
</style>
