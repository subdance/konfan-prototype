<template>
  <div id="sec">
    <div class="intro">有点重要的事儿...</div>
    <div class="section-container">
     <div>
       <span class="special-text">🏃翻墙</span>
       <p class="intro-text">我所利用到的学习资源很大一部分是墙外的。所以翻墙是大前提。翻墙对我的学习方式起到了极大的改变。</p>
       <p class="intro-text">星衡自己有买的SSR服务，结合客户端可以方便的翻墙</p>
       <p class="intro-text">另外，推荐使用<a href="https://www.vultr.com/">Vultr云服务器</a>和<a href="https://github.com/hwdsl2/setup-ipsec-vpn">此篇教程</a>来搭建自己的的VPN服务，从此翻墙不求人</p>
       <span class="special-text">🇺🇸使用英语与谷歌</span>
       <p class="intro-text">刚开始的一段时间会很不适应：无法组织我想表达的问题。但是习惯后就会发现英语结合谷歌，搜索结果的质量确实比汉语结合百度强太多。</p>
       <p class="intro-text">优先使用英文文档，这样可以锻炼自己提问时的语言组织能力。</p>
       <p class="intro-text">当熟练后，可以直接在程序社区提问，对话开发者。这样对解决问题的效率有极大提升。</p>
       <span class="special-text">📒笔记</span>
       <p class="intro-text">即时记笔记可以方便以后的总结，也会为以后的开发提供参考与效率。</p>
       <p class="intro-text">笔记的内容可以是代码片段，特殊函数，或者工作环境的搭建提示。我会把我认为以后会用到的全部分类记载。</p>
       <p class="intro-text">上面提到的语雀是一个很好的平台。我以前使用EverNote印象笔记，但是有些笨重，所以将其放弃了。</p>
       <p class="intro-text">笔记是一个长期的过程。不能一曝十寒。养成习惯就好了</p>
       <span class="special-text">❤️Enjoy</span>
       <p class="intro-text">Woking, as well as having fun!</p>
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
    color: #67C23A;
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
    padding: 20px ;
    height: 80%;
    width: 80%;
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
    color: #409EFF;
  }
</style>

