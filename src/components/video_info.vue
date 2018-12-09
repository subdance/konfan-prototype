<template lang="html">
  <div class="mainContainer">
    <div class="imgHolder">
    </div>
    <div class="dialogHolder">
      <p class="infoText">
        <span class="videoName">{{ nowVideoInfo.name }}</span>
        <span></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      nowVideoInfo: {
        id: 1,
        name: 'aaaa',
        info: '',
        author: '',
      },

      backVideoInfo: [
        {
          id: 1,
          name: '',
          info: '',
          author: '',
        },
        {
          id: 2,
          name: '',
          info: '',
          author: '',
        },
        {
          id: 3,
          name: '',
          info: '',
          author: '',
        },
        {
          id: 4,
          name: '',
          info: '',
          author: '',
        },
      ],
    }
  },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .mainContainer {
    position: absolute;
    bottom:0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
  }
  .imgHolder {
    width: 10%;
    background-image: url(../assets/element/mc.png);
    background-position: top;
    background-size: cover;
  }
  .dialogHolder {
    position: relative;
    background: #DCDFE6;
    border-radius: 10px;
    width: 50%;
    top:-1rem;
    color:
  }
  .dialogHolder::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 17px solid transparent;
    border-right-color: #DCDFE6;
    border-left: 0;
    border-bottom: 0;
    margin-top: -8.5px;
    margin-left: -17px;
  }
  .infoText {
    margin: 0;
    padding-left: 4rem;
    line-height: 10rem;
    font-size: 4rem;
    color: #606266;
  }
</style>
