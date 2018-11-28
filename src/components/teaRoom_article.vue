<template lang="html">
  <div class="mainHolder">
    <p class="mainTitle">或远或近的记录</p>
    <div class="single_row">
      <div class="collapse_title" @click='changeShow(0)'>
        <span class="title_text">{{ articleSet[0].title }}</span>
        <p class="title_text_adding">{{ articleSet[0].intro }}</p>
      </div>
      <div class="collapse_text" :style="{maxHeight: maxHeight[0] + 'px'}">
        <p
          class="article_text"
          v-for='(paragraph, index) in articleSet[0].para'
          :v-key='index'
          > &nbsp &nbsp {{ paragraph }}</p>
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
      articleSet: [
        {
          title: '轻音与梦',
          intro: '轻音少女动画中的瞬间-11.26/夜',
          para: [
            '在轻音部第一次合宿的那个夜晚，唯晃晃悠悠地将放音机搬到了澪的面前。',
            '一瞬间，早已准备好的烟花在唯的背后划向天空。唯夸张地滑动着拨片，开怀地跳跃着。',
            '澪的眼前被点亮了。是被绚丽的烟火，或许也是被眼前的唯。',
            '唯像摇滚巨星一样，像站在最灿烂的舞台上一样，忘我地表演。',
            '向来羞涩的澪已经忘了自己的表情，痴痴地望着唯。',
            '还可以这样呀。',
            '原来就算弹着不成调的曲子，就算舞台只是一个山坡，也可以演奏的如此盛大，开心。',
            '澪心里软软的地方被触动了。',
            '是那个存放着梦想的地方。',
            '海风拂过澪的眼角，肌肤传来些许的清凉感。',
            '"我们的目标，武道馆！"律曾经夸下的海口，似乎在此刻变得不那么遥远了。',
            '梦想啊，好像总是很遥远，就像烟火之上淡淡的星光那样永恒。',
            '可那又是为什么，烟花下的众人，在这一瞬间，都感觉到了最真切的永恒呢？',
            '烟花的光晕随着海潮消散，海风又起。带着汗珠的唯，傻傻地笑着。',
            '原来是这样啊。',
            '原来我的梦想并不是要站在最大的舞台上演奏。',
            '原来我的梦想，只是一边演奏，一边和你们在一起。',
            '"这里就是我们的武道馆。"',
          ],
        },
      ],
    }
  },
  methods: {
    changeShow(index){
      let nowText = document.getElementsByClassName('collapse_text')[index];
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
    height: 13rem;
    padding-top: 1rem;
    padding-left: 2rem;
    transition: padding 0.5s ease-out;
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
    padding-left: 2rem;
    width: 600px;
    margin: auto;
    margin-top: 1rem;
  }
  .single_row {
    padding-bottom: 3rem;
  }
  .title_text {
    font-weight: bold;
    font-variant: small-caps;
    font-size: 3rem;
    color: #303133;
  }
  .article_text {
    margin: 0;
    font-size: 1.8rem;
    color: #F2F6FC;
  }
  .article_text::first-letter {
    font-size: 1.9rem;
  }
  .title_text_adding {
    margin-top: 3.5rem;
    text-align: right;
    padding-right: 1rem;
    font-size: 1.5rem;
    color: #F2F6FC;
    font-style: italic;
  }
  .mainTitle {
    font-size: 4rem;
    text-align: center;
    color: white;
  }
</style>
