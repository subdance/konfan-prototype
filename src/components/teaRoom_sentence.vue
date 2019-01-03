<template>
  <div class="sentenceContainer">
    <button type="button" name="button" @click='wordTrick'>aaaa</button>
    <transition-group class="singleSentenceContainer" v-for='(singleSentence) in sentence' tag='div'>
      <div class="wordHolder" v-for='(word, index) in singleSentence.content' :key='word.id'>
        <span class="word">{{ word.word }}</span>
      </div>
      <div class="sourceHolder" v-for='(word, index) in singleSentence.source' :key='index - 3'>
        <span class="source">{{ word }}</span>
        <link async href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei" rel="stylesheet">
      </div>
    </transition-group>
  </div>
</template>

<script>
// import _ from 'lodash.min.js'
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
          source: '化物语'
        },
        {
          content: '我的刻薄话使用铜四十克、锌二十五克、镍十五克、害羞五克、再加上恶意九十七公斤配成的。顺便说一下，害羞是骗人的。',
          source: '化物语'
        },
        {
          content: '能让封闭内心的人随心所欲地说出想说的话的对象只有两种。一种是被对方讨厌了也没关系的，还有一种是不必担心被对方讨厌。',
          source: '化物语'
        }
      ],
      sentence: [],
    }
  },
  created(){
    this.generateSentence();
  },
  mounted(){
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js')
    document.head.appendChild(recaptchaScript)
  },
  methods: {
    generateSentence(){
      for(let i = 0; i < this.rawSentence.length; i ++){
        this.sentence.push({});
        this.sentence[i].content = this.rawSentence[i].content.split('');
        this.sentence[i].source = this.rawSentence[i].source.split('');
        for(let j = 0; j < this.sentence[i].content.length; j ++){
          let temp = this.sentence[i].content[j];
          this.sentence[i].content[j] = {};
          this.sentence[i].content[j].word = temp;
          this.sentence[i].content[j].id = j;
        }
      }
      console.log(this.sentence[0].content);
    },
    wordTrick(){
      for(let i = 0; i < this.sentence.length; i ++){
        this.sentence[i].content = _.shuffle(this.sentence[i].content);
        this.sentence[i].source = _.shuffle(this.sentence[i].source);
        var temp = this.sentence[i]
        this.$set(this.sentence, i, temp );
      }
    },
  },
}
</script>

<style scoped>
  .flip-list-move {
    transition: transform 2s;
  }
  .sentenceContainer {
    display: none;
    position: absolute;
  }
  .singleSentenceContainer {
    display: inline-flex;
    flex-direction: column;
    max-height: 600px;
    width: 100px;
    flex-wrap: wrap-reverse;
    align-content: center;
    /* margin-right: 10px; */
  }
  .wordHolder {
    text-align: center;
    border: 1px solid black;
    transition: 0.3s;
    margin-left: 3px;
  }
  .word {
    font-size: 2rem;
    font-family: 'ZCOOL XiaoWei', serif;
  }
  .sourceHolder {
    text-align: center;
    border: 1px solid black;
    transition: 0.3s;
    margin-left: 3px;
  }
  .source {
    font-size: 2rem;
    font-family: 'ZCOOL XiaoWei', serif;
    color: white;
  }
  .wordHolder:hover {
    background-color: white;
    transform: scale(1.6, 1.6);
    transition: 0.15s;
    border: 1px solid white;
  }
  .sourceHolder:hover {
    background-color: black;
    transform: scale(1.6, 1.6);
    transition: 0.15s;
  }
</style>
