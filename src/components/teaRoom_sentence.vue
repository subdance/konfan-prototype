<template>
  <div :class="{leftSentenceContainer: type, rightSentenceContainer: !type}">
    <transition-group class="singleSentenceContainer" v-for='(singleSentence, index) in sentence' tag='div' name='flip-list' :key='index + 100'>
      <div class="wordHolder" v-for='(word, index) in singleSentence.content' :key='word.id'>
        <span class="word">{{ word.word }}</span>
      </div>
      <div class="sourceHolder" v-for='(word, index) in singleSentence.source' :key='index - 9'>
        <span class="source">{{ word }}</span>
        <link async href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei" rel="stylesheet">
      </div>
    </transition-group>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
export default {
  props:{
    type: Boolean,
  },
  data(){
    return {
      rawSentence1: [
        {
          content: '你觉得一个真正努力的人会觉得自己很努力吗？',
          source: '化物语',
        },
        {
          content: '当你无法回头的时候，才是真正的旅行',
          source: '比宇宙更遥远的地方'
        },
        {
          content: '做你自己，因为别人都有人做了',
          source: '奥斯卡-王尔德'
        },
      ],
        rawSentence2: [
          {
            content: '这是一个考验，来自过去的考验，人的成长，就是战胜自己不成熟的过去。',
            source: 'JOJO的奇妙历险',
          },
          {
            content: '不过傲慢分为两种。一种是能力过于低下，还有一种是志向异常远大的。前者显得非常愚蠢，后者是难得一见的珍贵种类。',
            source: 'Fate/Zero'
          },
        ],
      sentence: [],
      isWordOrdered: true,
    }
  },
  created(){
    this.generateSentence();
    this.listenOrderStatus();
    setTimeout(this.wordTrick, 1500);
  },
  mounted(){
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js')
    document.head.appendChild(recaptchaScript)
  },
  watch: {
    isWordOrdered: function(){
      var that = this;
      if (this.isWordOrdered){
        setTimeout(function(){that.generateSentence()}, 800);
      }
      else {
        setTimeout(function(){that.wordTrick()}, 800);
      }
    }
  },
  methods: {
    generateSentence(){
      this.sentence = [];
      if (this.type) {
        for(let i = 0; i < this.rawSentence1.length; i ++){
          this.sentence.push({});
          this.sentence[i].content = this.rawSentence1[i].content.split('');
          this.sentence[i].source = this.rawSentence1[i].source.split('');
          for(let j = 0; j < this.sentence[i].content.length; j ++){
            let temp = this.sentence[i].content[j];
            this.sentence[i].content[j] = {};
            this.sentence[i].content[j].word = temp;
            this.sentence[i].content[j].id = j;
          }
        }
      }
      else {
        for(let i = 0; i < this.rawSentence2.length; i ++){
          this.sentence.push({});
          this.sentence[i].content = this.rawSentence2[i].content.split('');
          this.sentence[i].source = this.rawSentence2[i].source.split('');
          for(let j = 0; j < this.sentence[i].content.length; j ++){
            let temp = this.sentence[i].content[j];
            this.sentence[i].content[j] = {};
            this.sentence[i].content[j].word = temp;
            this.sentence[i].content[j].id = j;
          }
        }
      }

    },
    wordTrick(){
      for(let i = 0; i < this.sentence.length; i ++){
        this.sentence[i].content = _.shuffle(this.sentence[i].content);
        var temp = this.sentence[i]
        this.$set(this.sentence, i, temp );
      }
    },
    listenOrderStatus(){
      eventBus.$on('orderArticle', reg => {
        this.isWordOrdered = reg;
      });
    },
  },
}
</script>

<style scoped>
  .leftSentenceContainer {
    position: absolute;
    top: 300px;
    left: 0px;
    min-height: 200px;
  }
  .rightSentenceContainer {
    position: absolute;
    top: 300px;
    right: 30px;
    min-height: 200px;
    /* display: none; */
  }
  .singleSentenceContainer {
    display: inline-flex;
    flex-direction: column;
    max-height: 500px;
    width: 100px;
    flex-wrap: wrap-reverse;
    align-content: center;
  }
  .wordHolder {
    width: 25px;
    overflow: hidden;
    text-align: center;
    border: 1px solid black;
    transition: background-color 0.2s,
                transform 1s;
    margin-left: 3px;

  }
  .wordHolder:hover {
    background-color: white;
    border: 1px solid white;
  }
  .word {
    display: inline-block;
    font-size: 2rem;
    font-family: 'ZCOOL XiaoWei', serif;
    transition: transform 0.3s;
  }
  .word:hover {
    transform: scale(2, 2);
  }
  .source {

    display: inline-block;
    font-size: 2rem;
    font-family: 'ZCOOL XiaoWei', serif;
    color: white;
    transition: transform 0.3s;
  }
  .source:hover {
    transform: scale(2, 2);
  }
  .sourceHolder {
    width: 25px;
    overflow: hidden;
    text-align: center;
    border: 1px solid black;
    transition: background-color 0.2s,
                transform 1s;
    margin-left: 3px;
  }
  .sourceHolder:hover {
    background-color: black;
  }
  @media only screen and (max-width: 600px) {
    .leftSentenceContainer, .rightSentenceContainer {
      display: none;
    }
  }
</style>
