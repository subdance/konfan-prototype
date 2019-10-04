<template lang="html">
    <div class="mainHolder">
        <div class="titleHolder">
        <div class="textHolder">
            <div class="text">
            <span class="iconStyle">
                <i class="fa fa-camera-retro fa-5x"></i>
                &nbsp &nbsp
                <i class="fa fa-diamond fa-5x"></i>
                &nbsp &nbsp
                <i class="fa fa-heart fa-5x"></i>
                &nbsp &nbsp
                <i class="fa fa-music fa-spin fa-5x"></i>
            </span>
            <span class="titileText">捕捉轻音部的闪光瞬间(●'◡'●)</span>
            </div>
        </div>
        </div>

        <div class="carouselPart">
            <el-carousel
                :indicator-position="carouselIndicator"
                :height='carouselHeightCard'
                :type="carouselType"
                trigger='click'
                :inerval='interval'
                >
                <el-carousel-item
                    v-for="item in 5"
                    :key="item" 
                    >
                    <div class="detailHolderOuter">
                        <div class="detailHolderInnerCard">
                            <span class="detailText">{{ nowText1[ item - 1 ] }}</span>
                        </div>
                    </div>
                    <img class="carouselPicCard" :src='nowPic1[ item - 1 ]' alt=""></img>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="carouselPart" v-for='(carousel, index) in picSet'>
            <el-carousel
                :indicator-position="carouselIndicator"
                trigger='click'
                :autoplay='autoplay'
                arrow='always'
                :height="carouselHeight"
                >
                <el-carousel-item
                    v-for="item in carousel.text.length"
                    :key="item"
                    >
                    <div class="detailHolderOuter">
                        <div class="detailHolderInnerCard">
                        <span class="detailText">{{ carousel.text[ item - 1 ] }}</span>
                        </div>
                    </div>
                    <div classs='carouselPicWraper'>
                        <div class="carouselPicHolder">
                            <img class="carouselPic" :src='carousel.pic[ item - 1 ]' alt="">
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="bottomText">
        <span>投稿功能正在研发中！！</span>
        </div>

    </div>

</template>

<script>
export default {
    data(){
        return {
            interval: 1800,
            autoplay: false,
            carouselType: 'card',
            carouselIndicator: '',
            carouselHeight: '50rem',
            carouselHeightCard: '40rem',
            nowPic1: [
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set1/1.jpg',
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set1/2.jpg',
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set1/3.jpg',
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set1/4.jpg',
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set1/5.png',
            ],
            nowText1: [
                '澪：Fender japan JB62-DMC/VSP/3TS LH',
                '律：Yamaha Hipgig HG6T46RMMY',
                '唯：Gibson 2008 Les Paul Standard Heritage Cherry Sunburst',
                '紬：KORG Triton Extreme 76、KORG RK-100',
                '梓：Fender Japan Mustang MG69/MH CAR',
            ],
            picSet: [
                {
                text: [
                    '烟花下的唯抱着吉他兴奋地跳着',
                    '那无拘无束地样子，羞涩的澪从来不敢想象',
                    '滑动着拨片，唯望着澪',
                    '梦...演唱会...武道馆...',
                    '这样啊，原来我的梦想只是永远和你们在一起',
                    '永远一起唱我们的歌'
                ],
                pic: [
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set2/3.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set2/2.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set2/1.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set2/4.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set2/5.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set2/6.jpg',
                ],
                },
                {
                text: [
                    '“澪会生我的气吗？”',
                    '“不生气啊，那还用说...”',
                    '“只是，没有律的鼓，会有点寂寞”',
                    '“虽然有点抢，但我还是喜欢律充满气势，力道十足的鼓点”',
                    '“那就陪我到睡着嘛~求你啦澪”',
                    '“哎...真受不了你...”',
                ],
                pic: [
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set3/1.png',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set3/2.png',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set3/3.png',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set3/4.png',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set3/5.png',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set3/6.png',
                ],
                },
                {
                text: [
                    '“（可真是让人兴奋呢）—紬”',
                    '“走别的路行吗...”—澪',
                    '“没事的啦~”—律',
                    '“小狗乖哦小狗乖哦”—唯',
                ],
                pic: [
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set4/1.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set4/2.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set4/3.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set4/4.jpg',
                ],
                },
                {
                text: [
                    '音乐教室传来了熟悉的声响',
                    '“前辈怎么会在这儿？”“被...被发现啦”',
                    '落日的余晖照在走廊，彼此的告白都有些仓促',
                    '悸动，兴奋，少女们你追我赶',
                    '无因的浪漫与乐观将与你分别的一切伤感都冲淡',
                    '我们向着学校，向着你告别',
                    '真幸福啊，我们拥有彼此的青春',
                ],
                pic: [
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set5/1.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set5/2.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set5/3.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set5/4.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set5/5.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set5/9.jpg',
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/album/set5/10.jpg',
                ],
                },
            ],
        }
    },
    created(){
        // this.isSmallScreen();
    },
    mounted() {
        this.generateHeight();
    },
    methods:{
        generateHeight() {
            let tempWidth = document.querySelector('.el-carousel').offsetWidth;
            this.carouselHeight = tempWidth * (9 / 16) + 'px';
            if(window.innerWidth < 600) {
                this.carouselIndicator = 'outside'
                this.carouselType = '';
                this.carouselHeightCard = '250px';
            }
        },
    }
}
</script>

<style scoped>
    .carouselPicCard {
        border-radius: 10px;
        width: 100%;
        height: 40rem;
        object-fit: cover;
    }
    .carouselPicHolder {
        position: relative;
        padding-bottom: 56.2%;
        height: 0px;
        overflow: hidden;
    }
    .carouselPicWraper {
        width: 2420px;
    }
    .carouselPic {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    .titleHolder {
        height: 30rem;
    }
    .textHolder {
        padding-top: 170px;
    }
    .titileText {
        font-size: 4rem;
        color: #303133;
    }
    .icon {
        text-align: left;
        display: inline-block;
        padding-left: 3rem;
    }
    .iconStyle {
        text-shadow: 2px 2px 2px grey;
    }
    .text {
        text-align: center;
    }
    .introText {
        color: #606266;
        font-size: 2rem;
        padding-left: 5rem;
        margin-bottom: 0;
        font-style: italic;
    }
    .carouselPart {
        width: 95%;
        margin: 3rem auto;
    }
    .carouselPart:last-child {
        padding-bottom: 10rem;
        width: 95%;
        margin: auto;
    }
    .detailHolderOuter {
        text-align: center;
        position: relative;
    }
    .detailHolderInnerCard {
        position: absolute;
        top: 0rem;
        width: 100%;
        z-index: 999;
    }
    .detailText {
        padding: 0px 5px;
        text-align: center;
        width: 100%;
        font-size: 2rem;
        color: #F2F6FC;
        font-weight: bold;
        position: relative;
        z-index: 999;
        mix-blend-mode: exclusion;
        background-color: rgba(0, 0, 0, 0.342);
        border-radius: 5px;
    }
    .bottomText {
        text-align: center;
        color: white;
        font-size: 1.5rem;
        padding-bottom: 4rem;
        margin-top: 4rem;
    }
    @media only screen and (max-width: 600px) {
        .carouselPicCard {
        width: 100%;
        height: 250px;
        object-fit: contain;
        }
        .carouselPic {
        width: 100%;
        height: 250px;
        object-fit: contain;
        }
        .introText {
        color: #606266;
        font-size: 1.7rem;
        text-align: center;
        padding-left: 0;
        margin-bottom: 0;
        font-style: italic;
        }
        .detailText {
        text-align: center;
        width: 100%;
        font-size: 1.5rem;
        color: #F2F6FC;
        font-weight: bold;
        mix-blend-mode: exclusion;
        }
        .textHolder {
        padding-top: 70px;
        }
        .titileText {
        font-size: 2rem;
        color: #303133;
        }
        .icon {
        text-align: left;
        display: inline-block;
        padding-left: 3rem;
        }
        .iconStyle {
        font-size: 0.5rem;
        text-shadow: 2px 2px 2px grey;
        }
        .titleHolder {
        height: auto;
        }
        .carouselPart {
        margin-bottom: 6rem;
        width: 100%;
        margin: auto;
        }
        .bottomText {
        text-align: center;
        color: white;
        font-size: 1.5rem;
        padding-bottom: 4rem;
        margin-top: 1rem;
        }
    }
</style>
