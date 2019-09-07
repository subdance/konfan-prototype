<template>
  <div id="sec">
    <div class="intro">有趣的网站...</div>
    <div class="section-container">
     <div>
       <span class="special-text">前端方面</span>
       <p class="intro-text"><a target='_blank' href="https://caniuse.com/">前端API兼容性检查🌟</a></p>
       <p class="intro-text"><a target='_blank' href="https://30-seconds.github.io/30-seconds-of-css/">30秒CSS</a></p>
       <p class="intro-text"><a target='_blank' href="https://javascript.info/">现代JS参考🌟</a></p>
       <p class="intro-text"><a target='_blank' href="https://github.com/airbnb/javascript">爱彼迎JS规范</a></p>
       <p class="intro-text"><a target='_blank' href="https://khan4019.github.io/front-end-Interview-Questions/sort.html#bubbleSort">JS排序算法</a></p>
     </div>
     <div>
       <span class="special-text">资源方面</span>
       <p class="intro-text"><a target='_blank' href="https://uigradients.com/#Celestial">快速生成渐变色🌟</a></p>
       <p class="intro-text"><a target='_blank' href="https://leaverou.github.io/bubbly/">CSS对话框</a></p>
       <p class="intro-text"><a target='_blank' href="https://nostalgic-css.github.io/NES.css/">像素风CSS库</a></p>
       <p class="intro-text"><a target='_blank' href="https://app.astralapp.com/dashboard">GITHUB Star管理器</a></p>
       <p class="intro-text"><a target='_blank' href="https://alvarotrigo.com/fullPage/#page1">整页滑动效果的JS实现🌟</a></p>
       <p class="intro-text"><a target='_blank' href="http://css3lib.alloyteam.com/">腾讯团队的CSS playground</a></p>
       <p class="intro-text"><a target='_blank' href="https://alvarotrigo.com/fullPage/#page1">整页滑动效果的JS实现</a></p>
       <p class="intro-text"><a target='_blank' href="http://ping.chinaz.com/">服务器测速工具（搭梯子时很重要</a></p>
       <p class="intro-text"><a target='_blank' href="https://cssfx.dev/">复制即用的CSS样式库</a></p>
     </div>
     <div>
       <span class="special-text">有趣方面</span>
       <p class="intro-text"><a target='_blank' href="https://webcache.googleusercontent.com/search?q=cache:5JR8vwL4UOwJ:https://henix.github.io/feeds/yinwang/+&cd=4&hl=zh-CN&ct=clnk&gl=cn">王垠博客的网页快照🌟</a></p>
       <p class="intro-text"><a target='_blank' href="http://www.ruanyifeng.com/blog/">阮一峰的博客🌟</a></p>
       <p class="intro-text"><a target='_blank' href="https://github.com/ruanyf/weekly">阮一峰的每周分享</a></p>
       <p class="intro-text"><a target='_blank' href="http://ni.siois.in/">日本作家西尾维新的网站，建议桌面端浏览</a></p>
       <p class="intro-text"><a target='_blank' href="https://openai.com/blog/musenet/">人工智能生成古典音乐</a></p>
       <p class="intro-text"><a target='_blank' href="https://www.hanakomon.jp/about/">花徽章</a></p>
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
  a {
    text-decoration: none;
    color: #F56C6C;

  }
  a {
    position: relative;
  }
  a::before, a::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #F56C6C;
    transform-origin: center top;
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }
  a::before {
    left: -8px;
  }

  a::after {
    right: -8px;
  }

  a:hover::before, a:hover::after {
    transform-origin: center bottom;
    transform: scaleY(1);
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
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
  }
  .section-container > div {
    border-radius: 20px;
    padding: 20px ;
    /* width: 300px; */
    margin: 0 20px;
    box-shadow: 6px 6px 5px #606266;
    transition: 0.3s;
    background-color: #f5f6f9;
    text-align: left;
  }
  .section-container > div:hover {
    box-shadow: 0 0 5px #606266;
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
    font-size: 20px;
    font-weight: bold;
    color: #303133;
  }
</style>

