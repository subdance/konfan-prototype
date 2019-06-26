<template>
  <div class="mainContainer">
    <p> {{ article.title }} </p>
    <p> {{ article.intro }} </p>
    <p v-for='(paragraph, index) in article.para' :key='index'> {{ paragraph }} </p>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
export default {
  data() {
    return {
      article: {},
    }
  },

  created() {
    this.fetchData();
    setTimeout(() => {
      this.checkContent();
    }, 1000)
  },

  mounted() {
    
  },

  methods: {
    fetchData() {
      eventBus.$on('showArticle', reg => {
        this.article = Object.assign({}, this.article, {...reg});
        console.log(this.article);
        eventBus.$off('showArticle');
        this.renderContent();
      });
    },

    checkContent() {
      if (!Object.keys(this.article).length) {
        this.$router.push('/t');
      }
    },

    renderContent() {

    }
  },

}
</script>


<style scoped>
  .mainContainer {
    padding-top: 60px;
    min-height: 800px;
    background: #009FFF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #ec2F4B, #009FFF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #ec2F4B, #009FFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

</style>



