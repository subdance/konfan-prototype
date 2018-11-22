<template lang="html">
  <div class="mainContainer">
    <teaArticle></teaArticle>
  </div>
</template>

<script>
import teaArticle from '@/components/teaRoom_article.vue'
export default {
  components: {
    teaArticle
  },
}
</script>

<style scoped>
  .mainContainer {
    background: #009FFF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #ec2F4B, #009FFF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #ec2F4B, #009FFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    min-height: 200rem;
    padding-top: 62px;
  }
</style>
