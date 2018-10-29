<template lang="html">
  <div class="homePageHolder">
    <div class="showBox" id="box1">
    </div>
    <div class="showBox" id="box2">
      <table>
        <tr>
          <td><img class="introPic" src="./assets/home_pic/7.jpg"></td>
          <td><div class="introText"></div></td>
        </tr>
        <tr>
          <td><div class="introText"></div></td>
          <td><img class="introPic" src="./assets/home_pic/4.jpg"></td>
        </tr>
        <tr>
          <td><img class="introPic" src="./assets/home_pic/6.jpg"></td>
          <td><div class="introText"></div></td>
        </tr>
        <tr>
          <td><div class="introText"></div></td>
          <td><img class="introPic" src="./assets/home_pic/5.jpg"></td>
        </tr>
      </table>
    </div>
    <div class="showBox" id="box3">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  td {
    text-align: center;
    width: 45%;
  }
  .homePageHolder {
    position: relative;
  }
  .showBox {
    background-size: cover;
    width: 100%;
    height: 760px;
    border-radius: 3px;
    margin-bottom: 4rem;
  }
  .subText {
    color: white;
    font-size: 1rem;
  }
  .mainText {
    color: white;
    font-size: 1.3rem;
  }
  .introPic {
    width: 85%;

  }
  #box1 {
    background-image: url('assets/home_pic/1.jpg');
    background-position: center;
    box-shadow: 3px 3px 3px grey;
  }
</style>
