<template lang="html">
  <div class="mainHolder">
    <p id="titleHolder">相信的心就是你的魔法</p>
    <div class="single_row">
      <div class="collapse_title" @click='changeShow(0)'>
        <span class="title_text">this is title</span>
        <p class="title_text_adding"> a short intro to title</p>
      </div>
      <div class="collapse_text" :style="{maxHeight: maxHeight[0] + 'px'}">
        <p class="article_text">aa</p>
        <p class="article_text">aa</p>
      </div>
    </div>

    <div class="single_row">
      <div class="collapse_title" @click='changeShow(1)'>
        <span class="title_text">this is title</span>
        <p class="title_text_adding"> a short intro to title</p>
      </div>
      <div class="collapse_text" :style="{maxHeight: maxHeight[1] + 'px'}">
        <p class="article_text">aa</p>
        <p class="article_text">aa</p>
      </div>
    </div>

    <div class="single_row">
      <div class="collapse_title" @click='changeShow(2)'>
        <span class="title_text">this is title</span>
        <p class="title_text_adding"> a short intro to title</p>
      </div>
      <div class="collapse_text" :style="{maxHeight: maxHeight[2] + 'px'}">
        <p class="article_text">aa</p>
        <p class="article_text">aa</p>
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
  .collapse_title {
    margin: auto;
    width: 600px;
    height: 8rem;
    padding-left: 2rem;
    transition: padding 0.5s ease-out;
    /* border: 1px solid #F2F6FC; */
    margin-bottom: 1rem;
    position: relative;
    box-shadow: 2px 2px 5px black;
  }
  .collapse_title:hover {
    cursor: pointer;
    padding-left: 5rem;
    padding-right: 5rem;
  }
  .collapse_text {
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    padding-left: 4rem;
    width: 600px;
    margin: auto;
    margin-bottom: 1rem;
  }
  .single_row {
  }
  .title_text {
    font-weight: bold;
    font-variant: small-caps;
    font-size: 3rem;
    color: #303133;
  }
  .article_text {
    font-size: 2rem;
    color: #F2F6FC;
  }
  .article_text::first-letter {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .title_text_adding {
    text-align: right;
    padding-right: 1rem;
    font-size: 1.5rem;
    color: #F2F6FC;
  }
</style>
