<template lang="html">
  <div class="mainHolder">
    <div class="mainHolder">
      <p>相信的<i class="fa fa-heart-o"></i>就是你的魔法</p>
    </div>
    <div class="single_row">
      <div class="collapse_title" @click='changeShow(0)'>
        <span>this is title</span>

      </div>
      <div class="collapse_text" :style="{maxHeight: maxHeight[0] + 'px'}">
        <span>this is text</span>
        <p>aa</p>
        <p>aa</p>
      </div>
    </div>

    <div class="single_row">
      <div class="collapse_title" @click='changeShow(1)'>
        <span>this is title</span>
      </div>
      <div class="collapse_text" :style="{maxHeight: maxHeight[1] + 'px'}">
        <span>this is text</span>
      </div>
    </div>

    <div class="single_row">
      <div class="collapse_title" @click='changeShow(2)'>
        <span>this is title</span>
      </div>
      <div class="collapse_text" :style="{maxHeight: maxHeight[2] + 'px'}">
        <span>this is text</span>
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
  p {
    color: #303133;
    font-size: 3rem;
    text-align: center;
  }
  * {
    box-sizing: border-box;
  }
  .collapse_title {
    height: 4rem;
    font-size: 3rem;
  }
  .collapse_title:hover {
    cursor: pointer;
  }
  .collapse_text {
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    color: #606266;
  }
  .single_row {
    border-bottom: 2px solid #F56C6C;
    color: #303133;
  }
</style>
