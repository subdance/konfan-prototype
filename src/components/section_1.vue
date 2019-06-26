<template>
  <div id="sec">
    <div class="intro">强力帮手...</div>
    <div class="section-container">
     <div @click="goto('https://stackoverflow.com')">
       <span class="title-text">Stack Overflow</span>
       <p class="intro-text"><span class="special-text">栈溢出</span>是全球最大的程序员解决问题平台</p>
       <p class="intro-text">合理利用搜索（基于英文），可以高效并且相对严谨的解决绝大多数问题</p>
       <p class="intro-text">另外，部分高赞问题与高赞答案有惊人的质量与启发性</p>
     </div>
     <div @click="goto('https://github.com')">
       <span class="title-text">Github</span>
       <p class="intro-text"><span class="special-text">Github</span>是全球最大的代码托管平台</p>
       <p class="intro-text">我时常浏览其中的开源项目（即使看不懂）</p>
       <p class="intro-text">在使用开源项目时，甚至可以直接提出issue，让开发团队亲自来帮你解答（如果他们愿意）</p>       
     </div>
     <div @click="goto('https://developer.mozilla.org')">
       <span class="title-text">MDN web docs</span>
       <p class="intro-text"><span class="special-text">MDN网络文档</span>是由火狐组织的网页开发技术文档</p>
       <p class="intro-text">十分权威，文档详细，有广度和深度</p>
       <p class="intro-text">可以参与他们的公共编辑，将文档汉语化。这样对提升英文文献的阅读力有不少提高</p>       
     </div>
     <div @click="goto('https://www.yuque.com/dashboard')">
       <span class="title-text">语雀</span>
       <p class="intro-text"><span class="special-text">语雀</span>是由阿里团队开发的笔记型知识库</p>
       <p class="intro-text">界面很干净舒服，支持markdown语法，我的笔记都在往此处转移</p>
       <p class="intro-text">语雀上有不少大厂的技术团队在发布文章，每次看都能学到不少东西</p>       
     </div>
     <div @click="goto('https://codepen.io/')">
       <span class="title-text">Codepen</span>
       <p class="intro-text"><span class="special-text">Codepen</span>是一个专注于前端样式的代码实验室</p>
       <p class="intro-text">你可以快速测试代码片段，也可以查看其他开发者新奇的样式实现</p>
       <p class="intro-text">在这里可以很方便的“抄代码”</p>   
       <p class="intro-text">🐂🍺</p>       
     </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto(dest) {
      window.location = dest;
    }
  }
  
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .intro {
    position: absolute;
    top: 70px;
    left: 10px;
    color: #606266;
  }
  #sec {
    background: #C9D6FF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .section-container {
    padding-top: 60px;

    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
  }
  .section-container > div {
    padding: 20px ;
    height: 300px;
    margin: 0 100px;
    width: 280px;
    box-shadow: 3px 3px 5px #606266;
    transition: 0.3s;
    background-color: #f5f6f9;
    overflow: hidden;
 
  }
  .section-container > div::after {
    content: '';
    z-index: -1;
    background-color: hsla(0, 2%, 47%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 100px;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }
    .section-container > div:hover::after {
    transition: transform 0.8s ease-in-out;
    transform: translate3d(600%, 0, 0) rotate(35deg);
  }

  .section-container > div:hover {
    cursor: pointer;
    box-shadow: 0 0 5px #606266;
    transform: translate(0, -20px);
  }
  .title-text {
    color: #303133;
    font-weight: bold;
  }
  .intro-text {
    text-shadow: 0 2px white;
    font-size: 16px;
    font-weight: bold;
    color: #b8bec5;
  }
  .special-text {
    color: #F56C6C;
  }
</style>

