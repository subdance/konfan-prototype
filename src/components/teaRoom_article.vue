<template lang="html">
  <div class="mainHolder">
    <div class="mainHolder">
      <p>相信的<i class="fa fa-heart-o"></i>就是你的魔法</p>
    </div>
    <div class="collapseHolder">
      <button class="accordion" @click='changeShow(1)'>Section 1</button>
      <div :class="{ active: isActive[0] ,panel: isDefault[0]}">
        <p>Lorem ipsum...</p>
      </div>

      <button class="accordion" @click='changeShow(2)'>Section 2</button>
      <div :class="{ active: isActive[1] ,panel: isDefault[1]}">
        <p>Lorem ipsum...</p>
      </div>

      <button class="accordion" @click='changeShow(3)'>Section 3</button>
      <div :class="{ active: isActive[2] ,panel: isDefault[2]}">
        <p>Lorem ipsum...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isActive: [false, false, false],
      isDefault: [true, true, true,],
    }
  },
  methods: {
    changeShow(index){
      if(this.isActive[index - 1]){
        this.$set(this.isActive, index - 1, false);
        this.$set(this.isDefault, index - 1, true);
      }
      else{
        for(let i = 0; i < this.isActive.length; i ++){
          this.$set(this.isActive, i, false);
          this.$set(this.isDefault, i, true);
        }
        if(!this.isActive[index - 1]){
          this.$set(this.isActive, index - 1, true);
          this.$set(this.isDefault, index - 1, false);
        }
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
  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
  }
  .active, .accordion:hover {
    background-color: #ccc;
  }
  .panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
  .active {
    padding: 0 18px;
    background-color: white;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
</style>
