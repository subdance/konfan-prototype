<template>
  <div class="page-holder">
    <full-page ref="fullpage" :options='options'>
      <section1 class="section"></section1>
      <section2 class="section"></section2>
      <section3 class="section"></section3>
      <section4 class="section"></section4>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import section1 from '@/components/section_1.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
import section2 from '@/components/section_2.vue'
import section3 from '@/components/section_3.vue'
import section4 from '@/components/section_4.vue'




export default {
  name: 'home',
  components: {
    section1,
    section2,
    section3,
    section4
  },
  data() {
    return {
      options: {
        navigation: true,
        navigationPosition: 'right',
      }
    }
  },
}
</script>

<style scoped>
  * {
  }
</style>

