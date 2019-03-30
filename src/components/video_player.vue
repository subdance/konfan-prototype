<template lang="html">
  <div class="mainHolder">
    <div class="videoHolder">
      <video
        class="player"
        :src="nowPlaying.src"
        :poster='nowPlaying.poster'
        controls>
      </video>
    </div>
    <div class="listHolder">
      <div
        class="listBlock"
        :class="{selectedList: isVideoSelected[index], notSelectedList:!isVideoSelected[index]}"
        v-for='(item, index) in videoList'
        @click='changeVideo(index)'
        >
        <div class="thumbnailHolder" :class="{selectedSmall: isVideoSelected[index], notSelectedSmall:!isVideoSelected[index]}">
          <img
          class="thumbnail"
          :class="{selected: isVideoSelected[index], notSelected:!isVideoSelected[index]}"
          :src="item.poster"
          :alt="item.name">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '@/eventbus.js'
  export default {
    data(){
      return {
        isVideoSelected: [true, false, false, false, false, false, false, false,],
        nowPlaying: {
          id: 8,
          name: '',
          poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/1.jpg',
          src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/3.mp4',
        },
        videoList: [
          {
            id: 1,
            name: '',
            poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/1.jpg',
            src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/3.mp4',
          },
          {
            id: 2,
            name: '',
            poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/2.jpg',
            src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/2.mp4',
          },
          {
            id: 3,
            name: '',
            poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/3.jpg',
            src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/1.mp4',
          },
          {
            id: 4,
            name: '',
            poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/4.jpg',
            src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/4.mp4',
          },
          {
            id: 5,
            name: '',
            poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/5.jpg',
            src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/5.mp4',
          },
          {
            id: 6,
            name: '',
            poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/6.jpg',
            src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/6.mp4',
          },
          {
            id: 7,
            name: '',
            poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/7.jpg',
            src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/8.mp4',
          },
          {
            id: 8,
            name: '',
            poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/8.jpg',
            src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/7.mp4',
          },
        ]
      }
    },
    created(){
      eventBus.$emit('stopMusic', true)
    },
    methods:{
      changeVideo(index){
        this.nowPlaying.id = this.videoList[index].id;
        this.nowPlaying.name = this.videoList[index].name;
        this.nowPlaying.poster = this.videoList[index].poster;
        this.nowPlaying.src = this.videoList[index].src;
        for(let i = 0; i < this.isVideoSelected.length; i ++){
          this.$set(this.isVideoSelected, i, false);
        }
        this.$set(this.isVideoSelected, index, true);
        eventBus.$emit('changeVideo', this.nowPlaying.id)
      },
    },
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .mainHolder {
    position: relative;
    min-height: 100rem;
  }
  .videoHolder {
    position: relative;
    padding-top: 15rem;
    min-height: 80rem;
    overflow: hidden;
    text-align: center;
    padding-bottom: 4rem;
  }
  .player {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    height: 60rem;
    border: 2px solid white;
  }
  /* special k-blaze effect */
  .listHolder {
    width: 100%;
    position: relative;
    top: -10rem;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    overflow: hidden;
  }
  .listBlock {
    cursor: url(../assets/element/cursor-click.png) 14 0,pointer;
    color: white;
    width: 15rem;
    transition: all 0.2s ease-in-out;
    z-index: 1;
  }
  .listBlock:not(:last-child) {
    margin-left: -4rem;
  }
  .listBlock:hover {
    color: white;
    width: 35rem;
    transform: skewX(0deg);
  }
  .thumbnailHolder {
    transform: skewX(-8deg);
    overflow: hidden;
    box-shadow: 2px 2px 4px black;
  }
  .thumbnail {
    width: 100%;
    height: 13rem;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    margin-bottom: -0.5rem;
    transform: skewX(8deg) scale(1.1, 1.1);
  }
  .selected {
    height: 18rem;
    border-radius: 0 0 10px 10px;
  }
  .notSelected {
    width: 100%;
    height: 13rem;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    margin-bottom: -0.5rem;
    transform: skewX(8deg) scale(1.1, 1.1);
  }
  .selectedList {
    margin-left: 0rem;
    color: white;
    width: 35rem;
    transform: skewX(0deg);
  }
  .notSelectedList {
    cursor: url(../assets/element/cursor-click.png) 14 0,pointer;
    color: white;
    width: 15rem;
    transition: all 0.2s ease-in-out;
    z-index: 1;
  }
  @media only screen and (max-width:600px) {
    .mainHolder {
      position: relative;
      height: auto;
      min-height: 600px;
    }
    .videoHolder {
      padding-top: 0px;
      position: relative;
      min-height: 360px;
      overflow: hidden;
      text-align: center;
      padding-bottom: 4rem;
    }
    .player {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translate(-50%, -0);
      display: block;
      width: 100%;
      height: auto;
      border: 2px solid white;
    }
    .listHolder {
      width: 100%;
      position: relative;
      top: -5rem;
      display: flex;
      justify-content: space-around;
      flex-direction: row-reverse;
      overflow: hidden;
      flex-wrap: wrap;
      margin-bottom: -5rem;
    }
    .listBlock {
      cursor: url(../assets/element/cursor-click.png) 14 0,pointer;
      color: white;
      width: 50%;
      transition: all 0.2s ease-in-out;
      z-index: 1;
    }
    .listBlock:hover {
      margin-left: 0rem;
      color: white;
      width: 50%;
    }
    .listBlock:not(:last-child) {
      margin-left: 0;
    }
    .thumbnailHolder {
      transform: skewX(0deg);
      overflow: hidden;
      box-shadow: 2px 2px 4px black;
      border-radius: 10px;
      box-sizing: border-box;
      margin: 1rem 1rem;
    }
    .thumbnail {
      width: 100%;
      height: 13rem;
      object-fit: cover;
      transition: all 0.2s ease-in-out;
      margin-bottom: -0.5rem;
      transform: skewX(0deg) scale(1.1, 1.1);
      border: 6px solid transparent;
      border-radius: 10px;
    }
    .selectedList {
      margin-left: 0rem;
      color: white;
      width: 50%;
      transform: skewX(0deg);
    }
    .selected {
      height: 13rem;
      border-radius: 0 0 10px 10px;
    }
    .selectedSmall {
      box-sizing: content-box;
      border: 4px solid white;
    }
    .notSelectedSmall {
      box-sizing: border-box;
      border: 4px solid transparent;
    }
  }
</style>
