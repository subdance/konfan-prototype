<template lang="html">
  <div class="navHolder">
    <table>
      <tr>
        <td><router-link to="/"><span class="navTextHome">HTT活动室&nbsp<i class="fa fa-home fa-lg" style="color: white;"></i></span></router-link></td>
        <td><router-link to="/c"><span class="navTextHome">部员册&nbsp<i class="fa fa-address-book fa-lg" style="color: white;"></i></span></router-link></td>
        <td><router-link to="/a"><span class="navTextHome">茶色相簿&nbsp<i class="fa fa-image fa-lg" style="color: white;"></i></span></router-link></td>
        <td><router-link to="/"><span class="navTextHome">放映机&nbsp<i class="fa fa-video-camera fa-lg" style="color: white;"></i></span></router-link></td>
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
    width: 140px;
    height: 54px;
    text-align: center;
    text-shadow: 1px 1px 1px #666666;
  }
  td::after {
    display:block;
    content: ' ';
    border-bottom: 1px solid white;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  td:hover::after {
    transform: scaleX(1);
  }
  .navHolder {
    margin-top: 6px;
    float: left;
    width: 43%;
    height: 60px;
    position: relative;
    margin-bottom: 20px;
  }
  .navTextHome {
    font-size: 1.6rem;
    color: #df000a;
    font-weight: bold;
  }
</style>
