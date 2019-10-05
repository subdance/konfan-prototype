<template>
    <div class="main-container">
        <div class="main-wrapper">
            <div class="title-wrapper">
                <div
                    v-for="(item, index) in article"
                    :key="index"
                    class="title-holder"
                    :class="{'showing-title': index == showingIndex}"
                    >
                    <p 
                        class="title-text" 
                        @click="toggleArticle(index)"
                        >
                        <i v-show="showingIndex == index" class="fa fa-dot-circle-o list-icon"></i>
                        <i v-show="showingIndex !== index" class="fa fa-circle-o list-icon"></i>
                        {{item.title}}
                    </p>
                    <p class="intro-text">{{item.intro}}</p>
                </div>
                <div
                    v-show="!isCoverShow"
                    class="title-holder"
                    @click="toCover"
                    >
                    <span class="switch-text">
                        合上书
                        <i class="fa fa-book"></i>
                    </span>
                </div>
            </div>
            <div class="content-wrapper">
                <transition name="el-fade-in">
                    <div
                        v-show="isCoverShow"
                        class="cover-holder"
                        @click="toggleArticle(0)"
                        >
                        <div class="cover-text-holder">
                            极东乐园笔记
                        </div>
                    </div>
                </transition>
                <transition name="el-fade-in">
                    <div 
                        class="content-holder"
                        v-if="visibleController && !isCoverShow"
                        >
                        <p>
                            <span class="para-title">{{articleInShow.title}}</span>
                            <span class="para-intro">{{articleInShow.intro}}</span>
                        </p>
                        <p
                            v-for="(item, index) in articleInShow.para"
                            :key="index"
                            class="paragraph"
                            :class="{'quote': quoteChecker(index)}"
                            >
                            {{item}}
                        </p>
                    </div>
                </transition>
            </div>
            <div class="title-wrapper">

            </div>
        </div>
    </div>
</template>

<script>
import { articleData } from '@/components/tea_room/article.js'
export default {
    data() {
        return {
            isCoverShow: true,
            visibleController: false,
            statusController: null,
            articleInShow: null,
            showingIndex: null,
            article: []
        }
    },
    created() {
        this.generateStausController();
        this.article = articleData;
    },
    computed: {
    },
    methods: {
        quoteChecker(index) {
            return this.articleInShow.para[index][0] == 'q';
        },
        generateStausController() {
            let controllerSum = this.article.length;
            this.statusController = [...new Array(controllerSum).fill(false)];
        },
        toCover() {
            this.showingIndex = null;
            this.isCoverShow = true;
        },
        toggleArticle(index) {
            if (this.showingIndex == index) return;
            this.showingIndex = index;
            this.isCoverShow = false;
            this.visibleController = false;
            this.articleInShow = {...{}};
            setTimeout(() => {
                this.articleInShow = {...this.article[index]};
                this.visibleController = true;
            }, 300)
        }
    }
}
</script>

<style lang="css" scoped>
    * {
        box-sizing: border-box;
    }
    p {
        padding: 0px;
        margin: 0px;
        color: #303133;
    }
    .list-icon {
        color: #df000a;
    }
    .main-container {
        position: relative;
        padding-top: 40px;
    }
    .main-wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;  
        align-items: flex-start;
    }
    .main-wrapper > div {
        /* border-right: 1px solid black; */
    }
    .title-wrapper {
        flex: 0 0 220px;
        position: relative;
    }
    .title-wrapper:first-child {
        /* border-right: 1px solid #df000a; */
    }
    .title-wrapper:first-child .title-holder * {
        transition: 0.2s;
        opacity: 0.2;
    }
    .title-wrapper:first-child:hover * {
        opacity: 1;
    }
    .title-wrapper .title-holder {
        margin-bottom: 10px;
    }
    .switch-text {
        border-bottom: 1px solid #909399;
        cursor: pointer;
        transition: 0.2s;
        color: #909399;
        font-size: 12px;
    }
    .switch-text:hover {
        color: #409EFF;
        border-bottom: 1px solid #409EFF;
    }
    .title-text {
        font-weight: bold;
        font-size: 12px;
        line-height: 12px;
        cursor: pointer;
        transition: 0.2s;
    }
    .title-text:hover {
        color: #409EFF
    }
    .intro-text {
        font-size: 12px;
        color: #606266;
    }
    .showing-title .title-text {
        opacity: 1 !important;
    }
    .showing-title .intro-text {
        opacity: 1 !important;
    }
    .showing-title i {
        opacity: 1 !important;
    }
    .content-wrapper {
        flex: 0 0 500px;
        position: relative;
        padding: 20px 50px 40px 10px;
        margin: 0px 0px 60px 40px;
        /* border-right: 1px solid #df000a; */
    }
    .content-wrapper > .cover-holder {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 600px;
        background-position: center;
        background-size: contain;
        background-image: url('https://konfan.oss-cn-beijing.aliyuncs.com/image/article/cover.jpg');
        box-shadow: 0px 0px 20px black;
        transition: 0.5s;
        cursor: pointer;
    }
    .content-wrapper > .cover-holder:hover {
        transform: scale(1.05) rotate(5deg);
        box-shadow: 6px 6px 10px black;
    }
    .cover-text-holder {
        color: white;
        display: block;
        position: absolute;
        top: 10%;
        left: 75%;
        font-size: 50px;
        font-weight: bold;
        font-family: 'ZCOOL XiaoWei', serif;
        text-orientation: upright;
        writing-mode: vertical-rl;
    }
    .paragraph {
        line-height: 18px;
        font-size: 16px;
        margin-bottom: 10px;
        font-family: 'Times New Roman', Times, serif
    }
    .para-title {
        font-weight: bold;
        font-size: 30px;
        line-height: 3px;
        padding-left: 20px;
        font-family: 'ZCOOL XiaoWei', serif;
    }
    .para-intro {
        text-align: right;
        display: block;
        font-size: 12px;
        font-style: italic;
        color: #909399;
        margin-bottom: 10px;
    }
    .quote {
        font-size: 16px;
        color: #909399;
        border-left: 2px solid #909399;
        padding: 10px 10px;
        padding-bottom: 15px;
        font-family: 'Times New Roman', Times, serif;
        line-height: 18px;

    }
    .quote::first-letter {
        opacity: 0;
        color: transparent;
        margin-right: -10px;
    }
    .paragraph::first-letter {
        padding-left: 20px;
    }
</style>