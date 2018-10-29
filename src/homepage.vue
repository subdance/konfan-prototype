<template lang="html">
  <div class="homePageHolder">
    <div class="showBox" id="box1">
    </div>
    <div class="showBox" id="box2">
      <table border="1">
        <tr>
          <td><img class="introPic" src="./assets/home_pic/3.jpg"></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td><img class="introPic" src="./assets/home_pic/3.jpg"></td>
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
