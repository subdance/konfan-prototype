<template>
    <div class="main-container">
        <div class="title-wrapper-button">
            <el-button @click="drawer = true" type="danger" plain>
                <span style="font-family: 'ZCOOL XiaoWei', serif; font-size: 20px;">✮目录召唤✮</span>
            </el-button>
        </div>
        <div class="content-wrapper">
            <transition name="el-fade-in">
                <div
                    v-if="isCoverShow"
                    class="cover-holder"
                    @click="toggleArticle(0)"
                    >
                    <div class="cover-text-holder">
                        极东<br />乐<br />园笔记
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
        <div class="title-wrapper-bottom">
        </div>
        <el-drawer
            title="目录"
            :visible.sync="drawer"
            :direction="direction"
            size='80%'
            :modal="false"
            >
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
        </el-drawer>
    </div>
    
</template>

<script>
import { articleData } from '@/components/tea_room/article.js'
export default {
    data() {
        return {
            drawer: false,
            direction: 'ltr',
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
            this.drawer = false;
        },
        toggleArticle(index) {
            if (this.showingIndex == index) return;
            this.showingIndex = index;
            this.isCoverShow = false;
            this.visibleController = false;
            this.articleInShow = {...{}};
            this.drawer = false;
            setTimeout(() => {
                this.articleInShow = {...this.article[index]};
                this.visibleController = true;
            }, 300)
        },
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
    .title-wrapper-button {
        text-align: center;
    }
    .list-icon {
        color: #df000a;
    }
    .main-container {
        position: relative;
        padding-top: 20px;
        max-width: 375px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        margin: auto;
    }
    .title-wrapper {
        text-align: center;
        position: relative;
    }
    .title-wrapper .title-holder {
        margin-bottom: 10px;
    }
    .title-wrapper-bottom {
        margin-bottom: 80px; 
    }
    .switch-text {
        border-bottom: 1px solid #909399;
        cursor: pointer;
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
    .content-holder {
        min-height: 400px;
    }
    .content-wrapper > .cover-holder {
        background-position: center;
        background-size: contain;
        background-image: url('https://konfan.oss-cn-beijing.aliyuncs.com/image/article/cover.jpg');
        box-shadow: 0px 0px 20px black;
        transition: 0.4s;
    }
    .content-wrapper > .cover-holder:hover {
        transform: rotate(30deg) scale(0.8);
    }
    .cover-text-holder {
        color: white;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 50px;
        font-weight: bold;
        font-family: 'ZCOOL XiaoWei', serif;
        text-orientation: upright;
        writing-mode: vertical-rl;
    }
    .paragraph {
        line-height: 20px;
        font-size: 16px;
        margin-bottom: 10px;
        font-family: 'Times New Roman', Times, serif
    }
    .para-title {
        font-weight: bold;
        font-size: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-family: 'ZCOOL XiaoWei', serif;
    }
    .para-intro {
        text-align: right;
        display: block;
        font-size: 12px;
        line-height: 12px;
        font-style: italic;
        color: #909399;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .quote {
        font-size: 16px;
        color: #909399;
        border-left: 2px solid #909399;
        padding: 10px 10px;
        padding-bottom: 15px;
        font-family: 'Times New Roman', Times, serif;
        line-height: 20px;
    }
    .quote::first-letter {
        opacity: 0;
        color: transparent;
        margin-right: -10px;
    }
    .paragraph::first-letter {
        padding-left: 20px;
    }
    .title-text:hover {
        color: #303133;
    }
    .content-wrapper {
        margin-top: 20px;
        width: 100%;
        padding: 10px 25px;
        min-height: 500px;
    }
    .content-wrapper > .cover-holder {
        position: relative;
        height: 500px;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
