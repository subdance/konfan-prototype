<template lang="html">
  <div class="main-container">
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe&display=swap" rel="stylesheet">
    <div id="box1">
        <video autoplay muted loop id="my-video" ref='myVideo'>
            <source src="https://konfan.oss-cn-beijing.aliyuncs.com/video/trim1.mp4" type="video/mp4">
        </video>
        <transition 
            name="el-fade-in-linear"
            @after-leave="afterLeave"
            >
            <div class="main-intro" v-show='isTextShow'>
                <span class="intro-text">{{ nowShowingText }}</span>
            </div>
        </transition>
    </div>
    <div id="box2">
        <div id="p1"><img class="icon" src='../../assets/background/3.png'></div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isTextShow: false,//默认为文字为不显示状态
            currentIndex: 0,//当前文字的索引
            textArray: [
                "“如果你说最喜欢我 我会用最最喜欢回应你。”—【相遇天使】 ",
                "“请不要毕业 就算只是喝茶不排练也没关系 请不要毕业”— 梓",
                "“要是喜欢的概率 能用公式算出来 那该有多好”—【订书机之恋】",
                "“没有过分显眼的地方，但也不会埋没于大家的音色之中。我就一直想做那样的贝斯手”— mio",
                "“也就是说，放学后下午茶是把现在高中生的‘摇滚精神’表现出来的乐队吧”— 律",
                "“大家都好厉害，不要扔下我独自长大哦”— 唯"
            ]
        }
    },
    beforeMount(){
        this.triggerSwitching();//触发轮播
    },
    mounted(){
        // this.checkHeight();
    },
    computed: {
        nowShowingText() {
            return this.textArray[this.currentIndex];
        }
    },
    methods:{
        triggerSwitching() {
            setTimeout(() => {
                this.isTextShow = true;
            }, 0)
            setInterval(() => {//触发afterleave
                this.isTextShow = false;
            }, 4500)
        },
        afterLeave() {
            this.currentIndex = this.currentIndex == 5 ? 0 : this.currentIndex + 1 ;
            this.isTextShow = true;
        },
        checkHeight(){
            if (document.getElementById('box1').clientHeight > 803) {
                document.getElementById('box1').style.height = '804px';
            }
        },
    },
}
</script>

<style scoped>
    .intro-text {
        font-size: 3rem;
        color: #F2F6FC;
        font-family: 'ZCOOL KuaiLe', cursive;
    }
    .main-container {
        width: 100%;
        position: relative;
        background-color: #F2F6FC;
    }
    .main-intro {
        padding: 1rem 2rem 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: 1;
        border-radius: 10px;
        overflow: hidden;
    }
    .main-intro::after {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #303133;
        opacity: 0.6;
        z-index: -1;
    }
    .main-intro::first-letter {
        font-size: 4rem;
    }
    #box1 {
        width: 100%;
        height: 100vh;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }
    #box2 {
        display: none
    }
    #my-video {
        position: absolute;
        width: 100%;
    }
  @media only screen and (max-width: 600px) {
    .main-container {
        padding-top: 60px;
    }
    #box1 {
        height: auto;
        display: none;
    }
    #box2 {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height:300px;
        background-image: url('https://konfan.oss-cn-beijing.aliyuncs.com/image/home/1.jpg');
        background-position: left;
        background-size: cover;
    }
    #my-video {
        position: static;
        width: 100%;
        -ms-transform: translate(0, 0);
        transform: translate(0, 0);
        margin: 0;
    }
    .transPart {
        position: absolute;
        bottom: 0;
    }
    .intro-text {
        font-size: 1.3rem;
    }
    .main-intro {
        box-sizing: border-box;
        padding: 0.3rem 2rem 0.3rem;
        width: 100%;
        position: absolute;
        top: auto;
        right: auto;
        bottom: 0;
        left: 0;
        -ms-transform: translate(0, 0);
        transform: translate(0, 0);
        border-radius: 0;
    }
    .main-intro::after {
        position: absolute;
        content: '';
        top: 0;
        bottom: 1px;
        left: 0;
        background-color: black;
        opacity: 0.5;
    }
    .main-intro::first-letter {
        font-size: 1.3rem;
    }
    #p1 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-45%, -50%);
        font-size: 3rem;
        font-weight: bolder;
        margin-bottom: 10px;
    }
    .icon {
        width: 70vw;
        object-fit: cover;
    }
  }
</style>
