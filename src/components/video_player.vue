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
      <div class="listBlock" v-for='(item, index) in videoList' @click='changeVideo(index)'>
        <!-- <span class="listText"> {{ item.id }} </span> -->
        <img class="thumbnail" :src="item.poster" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        nowPlaying: {
          id: 8,
          name: '',
          poster: 'http://35.244.189.64/k-on-fan/image/video-cover/8.jpg',
          src: 'http://35.244.189.64/k-on-fan/video/7.mp4',
        },
        videoList: [
          {
            id: 1,
            name: '',
            poster: 'http://35.244.189.64/k-on-fan/image/video-cover/1.jpg',
            src: 'http://35.244.189.64/k-on-fan/video/3.mp4',
          },
          {
            id: 2,
            name: '',
            poster: 'http://35.244.189.64/k-on-fan/image/video-cover/2.jpg',
            src: 'http://35.244.189.64/k-on-fan/video/2.mp4',
          },
          {
            id: 3,
            name: '',
            poster: 'http://35.244.189.64/k-on-fan/image/video-cover/3.jpg',
            src: 'http://35.244.189.64/k-on-fan/video/1.mp4',
          },
          {
            id: 4,
            name: '',
            poster: 'http://35.244.189.64/k-on-fan/image/video-cover/4.jpg',
            src: 'http://35.244.189.64/k-on-fan/video/4.mp4',
          },
          {
            id: 5,
            name: '',
            poster: 'http://35.244.189.64/k-on-fan/image/video-cover/5.jpg',
            src: 'http://35.244.189.64/k-on-fan/video/5.mp4',
          },
          {
            id: 6,
            name: '',
            poster: 'http://35.244.189.64/k-on-fan/image/video-cover/6.jpg',
            src: 'http://35.244.189.64/k-on-fan/video/6.mp4',
          },
          {
            id: 7,
            name: '',
            poster: 'http://35.244.189.64/k-on-fan/image/video-cover/7.jpg',
            src: 'http://35.244.189.64/k-on-fan/video/8.mp4',
          },
          {
            id: 8,
            name: '',
            poster: 'http://35.244.189.64/k-on-fan/image/video-cover/8.jpg',
            src: 'http://35.244.189.64/k-on-fan/video/7.mp4',
          },
        ]
      }
    },
    methods:{
      changeVideo(index){
        this.nowPlaying.id = this.videoList[index].id;
        this.nowPlaying.name = this.videoList[index].name;
        this.nowPlaying.poster = this.videoList[index].poster;
        this.nowPlaying.src = this.videoList[index].src;
      },
    },
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .mainHolder {
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
  .listHolder {
    width: 100%;
    position: relative;
    top: -10rem;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }
  .listBlock {
    cursor: pointer;
    color: white;
    width: 15rem;
    transition: all 0.2s ease-in-out;
    font-size: 3rem;
  }
  .listBlock:not(:last-child) {
    margin-left: -8rem;
  }
  .listBlock:hover {
    color: white;
    width: 40rem;
    z-index: 1;
  }
  .thumbnail {
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: 10rem;
    object-fit: cover;
    border-left: 2px solid #F2F6FC;
    border-right: 2px solid #F2F6FC;
    border-bottom: 2px solid #F2F6FC;
  }
  .thumbnail:hover {
    border-radius: 0 0 10px 10px;
  }
</style>
