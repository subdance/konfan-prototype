<template>
  <div>
    <div class="sentenceContainer" v-for='(singleSentence) in sentence'>
      <div class="wordHolder" v-for='(word) in singleSentence.content'>
        <span class="word">{{ word }}</span>
        <link async href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei" rel="stylesheet">
      </div>
      <div class="sourceHolder" v-for='(word) in singleSentence.source'>
        <span class="source">{{ word }}</span>
        <link async href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei" rel="stylesheet">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      rawSentence: [
        {
          content: '不被人取笑的人生，我反而觉得超级无聊呢。人们不都是喜欢看着大家的笑容活下去吗？',
          source: '化物语',
        },
        {
          content: '正因为这些对你不重要，你才可以毫无顾忌地讲出来不是吗？',
          source: '  化物语'
        },
        {
          content: '我的刻薄话使用铜四十克、锌二十五克、镍十五克、害羞五克、再加上恶意九十七公斤配成的。顺便说一下，害羞是骗人的。',
          source: '  化物语'
        },
      ],
      sentence: [],
    }
  },
  created(){
    this.generateSentence();
  },
  methods: {
    generateSentence(){
      for(let i = 0; i < this.rawSentence.length; i ++){
        this.sentence.push({});
        this.sentence[i].content = this.rawSentence[i].content.split('');
        this.sentence[i].source = this.rawSentence[i].source.split('');
      }
    }
  },
}
</script>

<style scoped>
  .sentenceContainer {
    display: inline-flex;
    flex-direction: column;
    max-height: 600px;
    width: 100px;
    flex-wrap: wrap-reverse;
    align-items: flex-start;
    margin-right: 10px;
  }
  .wordHolder {
    text-align: center;
    border: 1px solid black;
  }
  .word {
    font-size: 2rem;
    font-family: 'ZCOOL XiaoWei', serif;
  }
  .sourceHolder {
    text-align: center;
    align-self: stretch;
  }
  .source {
    font-size: 2rem;
    font-family: 'ZCOOL XiaoWei', serif;
    color: white;
  }
</style>
