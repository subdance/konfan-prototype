<template lang="html">
  <div class="mainContainer" @click='changeShow'>
    <span class="titleText">{{ title }}</span>
    <div :class='{ contetHolderShow: isShow, contetHolderHide: !isShow }'>
      <div class="innerBlock" v-for='(item, index) in content' :key='item.id'>
        <span class="name">{{ item.name }}</span>
        <a target='_blank' :href="item.link">{{ item.info }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: Array,
  },
  data(){
    return {
      isShow: false,
    }
  },
  methods:{
    changeShow(){
      this.isShow = !this.isShow;
    },
  },
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #409EFF;
    font-weight: bold;
  }
  .mainContainer {
    box-sizing: border-box;
    border: 2px solid white;
    border-radius: 10px;
    padding: 0 1rem;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 8rem;
    cursor: pointer;
    color: #606266;
    transition: 0.2s;
    z-index: 9999;
  }
  .mainContainer:hover {
    background-color: white;
  }
  .contetHolderShow{
    width: 15rem;
    visibility: visible;
    position: absolute;
    left: -2px;
    top: -12rem;
    border: 2px solid white;
    cursor: default;
    -webkit-animation: fadeIn 0.5s;
    animation: fadeIn 0.5s;
    z-index: 9999;
  }
  .contetHolderShow:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
  }
  .contetHolderHide{
    visibility: hidden;
    position: absolute;
    left: -2px;
    top: -20rem;
    border: 2px solid white;
    cursor: default;
  }
  .titleText {
    font-size: 1rem;
    line-height: 2rem;
  }
  .name {
    color: white;
  }
  .innerBlock {
    position: relative;
    z-index: 9999;
  }
  @-webkit-keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  @keyframes fadeIn {
    from {opacity: 0;}
    to {opacity:1 ;}
  }
</style>
