<template>
    <div class="main-container">
        <div>
            <input type="text" v-model="slogan" @change="shuffle">
        </div>
        <div class="flex-holder">
            <div v-for="(item, index) in words" :key="index">
                <div>{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            words: [],
            slogan: 'xxxxxxxxxx'
        }
    },
    created() {
        this.words = this.slogan.split('')
    },
    methods: {
        shuffle() {
            console.log('aa')
            this.words = [...this.words.sort(() => Math.random() - 0.5)];
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
.main-container {
    width: 100%;
    padding-top: 60px;
}
.main-container > div:first-child {
    position: absolute;
    z-index: 999;
}
.flex-holder {
    display: flex;
    flex-flow: row wrap;
    min-height: 100vh;
    /* align-items: center; */
    align-content: center;
}
.flex-holder > div {
    text-align: center;
    min-width: 100px;
    height: 100px;
    font-size: 100px;
    flex-grow: 1;
    border: 1px solid red;
    position: relative;
}
.flex-holder > div > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>