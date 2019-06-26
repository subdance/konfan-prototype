<template>
  <div id="sec">
    <div class="section-container">
     <div>
       <span class="special-text">What's this all about</span>
       <p class="intro-text">我是<span class='strike'>练习时长两年半的</span>星衡前端开发实习生吴承远。在今天上午进行实习总结之后，博士希望我再把自己的学习方法总结一下，并且还说了一句："形式不限，每次都是DOC有点无聊了，可以有点interaction."</p>
       <p class="intro-text">于是我便用网页的形式做了个小总结，and that's where we are.🍻</p>
     </div>
    </div>
    <div class="intro">6/26/2019 @NOVASPACE</div>
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
  a:hover {
    color: rgb(236, 10, 10);
  }
  .intro {
    position: absolute;
    right: 10px;
    bottom: 10px;
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
    transform: rotateZ(15deg);
    padding: 20px ;
    width: 300px;
    margin: 0 20px;
    box-shadow: 6px 6px 5px #606266;
    transition: 0.3s;
    background-color: #f5f6f9;
    text-align: left;
  }
  .section-container > div:hover {
    box-shadow: 0 0 5px #606266;
    animation: fun 4s ease-in-out infinite;
  }
  @keyframes fun {
    65% {
      transform: rotateZ(-3deg);
    }
    100% {
      transform: rotateZ(15deg);
    }
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
  .strike {
    position: relative;
  }
  .strike::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #fc2f70;
    transform-origin: center right;
    transform: scaleX(0) translateY(-50%);
    transition: transform 0.3s ease;
  }
  .section-container > div:hover .strike {
    color: hsla(0, 0%, 100%, 0.8);
  }
  .section-container > div:hover .strike::before {
    transform-origin: center left;
    transform: scaleX(1) translateY(-50%);
  }
</style>

