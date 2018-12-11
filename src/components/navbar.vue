<template lang="html">
  <div class="navHolder">
    <div><router-link to="/"  @click='changeFixPlayer(true)'><span class="navTextHome">HTT活动室&nbsp<i class="fa fa-home fa-lg" style="color: white;"></i></span></router-link></div>
    <div><router-link to="/c" @click='changeFixPlayer(true)'><span class="navTextHome">部员册&nbsp<i class="fa fa-address-book fa-lg" style="color: white;"></i></span></router-link></div>
    <div><router-link to="/a" @click='changeFixPlayer(true)'><span class="navTextHome">茶色相簿&nbsp<i class="fa fa-image fa-lg" style="color: white;"></i></span></router-link></div>
    <div><router-link to="/v" @click='changeFixPlayer(true)'><span class="navTextHome">放映机&nbsp<i class="fa fa-video-camera fa-lg" style="color: white;"></i></span></router-link></div>
    <div><router-link to="/t" ><span class="navTextHome">雲上茶屋&nbsp<i class="fa fa-coffee fa-lg" style="color: white;"></i></span></router-link></div>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
export default {
  data(){
    return {
    }
  },
  methods: {
    changeFixPlayer(reg){
      eventBus.$emit('changeFixPlayer', reg)
    },
  },

}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .navTextHome:hover {
    color: red;
    text-shadow: 2px 2px 2px grey;
    transition: all 200ms ease-in-out;
  }
  .navHolder {
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
  .navHolder > div {
    text-align: center;
    width: 8%;
  }
  .navHolder > div::after {
    content: '';
    display: block;
    border-bottom: 2px solid white;
    transform: scale(0);
    transition: transform 250ms ease-in-out;
  }
  .navHolder > div:hover::after {
    transform: scale(1);
  }
  .navTextHome {
    font-size: 1.6rem;
    color: #df000a;
    font-weight: bold;
  }
</style>
