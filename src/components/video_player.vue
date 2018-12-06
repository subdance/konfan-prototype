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
      <ul>
        <li v-for='(item, index) in videoList' @click='changeVideo(index)'>
          <span class="listText"> {{ item.id }} </span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        nowPlaying: {
          id: 1,
          name: '',
          poster: 'http://35.244.189.64/k-on-fan/image/video-cover/1.jpg',
          src: 'http://35.244.189.64/k-on-fan/video/3.mp4',
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
  .videoHolder {
    min-height: 60rem;
    padding-top: 8rem;
    text-align: center;
    padding-bottom: 4rem;
  }
  .player {
    height: 50rem;
    margin: auto;
  }
  .listHolder {
    position: absolute;
    right: 0;
    top: 20rem;
    width: 18rem;
    overflow: hidden;
  }
  ul {
    margin-top: 0;
    padding-left: 0;
    padding-top: 0;
  }
  li {
    line-height: 6rem;
    padding-left: 1rem;
    height: 6rem;
    margin-top: -2px;
    margin-left: 12rem;
    list-style-type: none;
    color: white;
    font-size: 2rem;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    transition-property: margin-left;
    transition-duration: 1s;
    cursor: pointer;
    border-radius: 30px 0 0 30px ;
    overflow: hidden;
  }
  li:hover {
    /* border-top: 2px solid white; */
    margin-left: 0;
  }
</style>
