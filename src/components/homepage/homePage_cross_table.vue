<template lang="html">
    <div class="main-container">
        <link async href="https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe" rel="stylesheet">
        <div class="single-line" v-for="(item, index) in introText">
            <div class="pic-holder" :class="{'pic-holder-odd': index % 2 !== 0 }">
                <img class="main-pic" :src="item.backgroundPic"></img>
                <div class="inner-text-holder">
                    {{ item.innerText }}
                </div>
            </div>
            <div class="text-holder" :class="{'text-holder-odd': index % 2 !== 0 }">
                <p>
                    {{ item.upperText }}
                </p>
                <p>
                    {{ item.bottomText }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            introText: [
                {
                    backgroundPic: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/9.jpg',
                    upperText: 'K-ON是“轻音部”这一高中社团的简称',
                    bottomText: '在这一社团中，五位少女成立了名为“放学后下午茶”（HTT）的乐队',
                    innerText: '于2009年播出的轻音少女，成为了大热的现象级作品，甚至有了强国之源的美誉。'
                },
                {
                    backgroundPic: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/4.jpg',
                    upperText: '两位吉他手，一个键盘手，一个贝斯手，一个鼓手',
                    bottomText: '和一位贪吃的顾问，便是这个社团的全部成员',
                    innerText: '校园，废萌，社团，音乐等在当时新鲜无比的动画元素让轻音迅速走红。'
                },
                {
                    backgroundPic: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/8.jpg',
                    upperText: '可口的点心，悠闲的午后',
                    bottomText: '以及些许手忙脚乱的练习，构成了云朵般的日常',
                    innerText: ' 五位主角的声优成为了行业内的新星，日后多次在名作中出演主役。'
                },
                {
                    backgroundPic: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/3.jpg',
                    upperText: '生活，音乐，懵懂的梦想',
                    bottomText: '还有最最,最重要的——互相陪伴的彼此',
                    innerText: '轻音的漫画依然在连载着，也许某一天这段温暖的故事会再次回归。'
                }
            ],
    }
  },
  methods: {
  },
}
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    .main-container {
        width: 100%;
        padding-top: 30px;
    }
    .single-line {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }
    .single-line:nth-child(2n + 1) {
        flex-flow: row-reverse nowrap;
    }
    .pic-holder {
        flex: 0 0 600px;
        height: 400px;
        margin-right: 100px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .inner-text-holder {
        color: black;
        font-size: 2rem;
        position: relative;
        flex: 0 0 400px;
        z-index: 2;
        opacity: 0;
        animation: innerTextFade 0.6s ease-in-out;
    }
    .pic-holder:hover .inner-text-holder {
        opacity: 1;
        animation: innerTextShow 0.2s ease-in-out;
    }
    .pic-holder:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 337.5px;
        transform: translate(-50%, -50%);
        background-color: rgba(255, 255, 255, 0.432);
        z-index: 1;
        opacity: 0;
        animation: innerTextFade 0.6s ease-in-out;
    }
    .pic-holder:hover:before {
        opacity: 1;
        animation: innerTextShow 0.2s ease-in-out;
    }
    @keyframes innerTextShow {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes innerTextFade {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    .pic-holder-odd {
        margin-right: 0px;
        margin-left: 100px;
    }
    .main-pic {
        flex: 0 0 600px;
        height: 337.5px;
        position: absolute;
        z-index: 0;
        box-shadow: 0 0 3px black;
    }
    .pic-holder:hover .main-pic {
        box-shadow: 0 0 6px black;
    }
    .text-holder {
        flex: 0 0 600px;
    }
    .text-holder > p {
        text-align: left;
        font-size: 1.8rem;
        text-shadow: 0 -0.05em 0.1em rgba(0,0,0,.3);
    }
    .text-holder-odd > p {
        text-align: right;
    }


    /*  */
    /*  */
    @media (max-width: 600px) {
        * {
            overflow: hidden;
        }
        .single-line {
            display: block;
            width: 100%;
            height: auto;
            overflow: hidden;
            position: relative;
        }
        .pic-holder {
            width: 100%;
            display: block;
            height: auto;
        }
        .pic-holder:before {
            height: calc( 350 * 9 / 16 * 1px);
            width: 350px;
        }
        .inner-text-holder {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 80%;
            transform: translate(-50%, -50%);
            font-size: 17px;
        }
        .main-pic {
            margin: auto;
            width: 350px;
            height: calc( 350 * 9 / 16 * 1px);
            display: block;
            position: static;
        }
        .text-holder > p {
            text-align: center;
            font-size: 15px;
        }
        .pic-holder-odd {
            margin-left: 0px;
        }

    }
</style>
