<template lang="html">
  <div class="">
    <div class="tabHolder" :style="{ backgroundImage: 'url(' + nowBackPic + ')' }">
      <div class="tabHeaderHolder">
        <ul>
          <li @click='showCharacter(1)'>平泽 唯</li>
          <li @click='showCharacter(2)'>田井中 律</li>
          <li @click='showCharacter(3)'>秋山 澪</li>
          <li @click='showCharacter(4)'>琴吹</li>
          <li @click='showCharacter(5)'>中野 梓</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nowBackPic: require('../assets/home_pic/1.jpg'),
      backPic: ['../assets/home_pic/1.jpg',]
    }
  },
  methods: {
    showCharacter(index){

    },
  },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  ul, li {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }
  .tabHolder {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 600px;
    border: 2px solid red;
  }
  .tabHeaderHolder {
    margin-top: 120px;
    border: 2px solid red;
    display: inline-block;
  }
</style>
