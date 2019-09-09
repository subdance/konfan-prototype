<template lang="html">
    <div class="mainContainer">
    <theater></theater>
    <div class="backgroundHolder">
        <crossTable></crossTable>
        <interview></interview>
        <div class="bottomHolder">
        <img class="bottomImg" src="https://konfan.oss-cn-beijing.aliyuncs.com/image/home/10.png" alt="">
        </div>
    </div>
    </div>
</template>

<script>
import eventBus from '@/eventbus.js'
import interview from '@/components/homepage/homePage_interview.vue'
import theater from '@/components/homepage/homePage_theater.vue'
import crossTable from '@/components/homepage/homePage_cross_table.vue'
export default {
    components: {
        interview,
        theater,
        crossTable,
    },
    created(){
        eventBus.$emit('changeFixPlayer', true);
        eventBus.$emit('stopMusic', false);
    },
    methods: {
        setDisplay(index){
            this.$set(this.innerDisplayArray, index, true);
        },
        setHide(index){
            this.$set(this.innerDisplayArray, index, false);
        },
    },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .backgroundHolder {
    background: #ff6e7f;
    background: -webkit-linear-gradient(to bottom, #bfe9ff, #ff6e7f);
    background: linear-gradient(to bottom, #bfe9ff, #ff6e7f);
  }
  .mainContainer {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .bottomHolder {
    margin-top: -5rem;
    width: 100%;
    overflow: hidden;
  }
  .bottomImg {
    margin: auto;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
  .floatingImg {
    display: block;
    position: absolute;
    height:100vh;
    left: 0;
    transform: translate(-50%, 0) rotateZ(-90deg);
    top: 250vh;
    z-index: 0;
  }
  @media only screen and (max-width:600px) {
    .bottomImg, .bottomHolder {
      height: 30vh;
    }
    .bottomHolder {
      margin-top: 1.5rem;
    }
  }
</style>
