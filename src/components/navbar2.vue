<template lang="html">
  <div class="navHolder">
    <table>
      <tr>
        <td><router-link to="/"><span class="navTextHome">HTT活动部室</span></router-link></td>
        <td><router-link to="/"><span class="navTextHome">茶色相簿</span></router-link></td>
        <td><router-link to="/"><span class="navTextHome">放映机</span></router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  td {
    width: 120px;
    height: 54px;
    text-align: center;
    text-shadow: 1px 1px 1px #666666;
    margin-bottom: 20px;
    border-bottom: 1px solid grey;
  }
  td:hover {
    border-bottom: 2px solid white;
  }
  .navHolder {
    float: left;
    width: 50%;
    height: 60px;
    overflow: hidden;
  }
  .navTextHome {
    font-size: 1rem;
    color: #df000a;
    font-weight: bold;
  }
</style>
