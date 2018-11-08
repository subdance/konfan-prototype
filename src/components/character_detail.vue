<template lang="html">
  <div class="mainHolder">
    <div id="addTextHolder">
      <p id="addText">！！下方绝密档案！！</p>
    </div>
    <div class="tableHolder">
      <table style="margin:auto">
        <tr>
          <td id="yui"></td>
          <td id="ritsu"></td>
          <td id="mio"></td>
          <td id="mugi"></td>
          <td id="azusa"></td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  #addTextHolder {
    font-size: 1.6rem;
    text-align: center;
  }
  #addText {
    color: #909399;
  }
.introHolder {
  position: relative;
  z-index: 1;
  margin: auto;
}
  .mainHolder {
    width: 100%;
  }
  .tableHolder {
    width: 100%;
    text-align: center;
  }
  td {
    width: 20rem;
    height: 24rem;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    transition: 0.2s;
  }
  #yui {
    background-image: url('../assets/character_element/yui1.jpg');
  }
  #yui:hover {
    background-image: url('../assets/character_element/yui2.jpg');
  }
  #ritsu {
    background-image: url('../assets/character_element/ritsu1.jpg');
  }
  #ritsu:hover {
    background-image: url('../assets/character_element/ritsu2.jpg');
  }
  #mio {
    background-image: url('../assets/character_element/mio1.jpg');
  }
  #mio:hover {
    background-image: url('../assets/character_element/mio2.jpg');
  }
  #mugi {
    background-image: url('../assets/character_element/mugi1.jpg');
  }
  #mugi:hover {
    background-image: url('../assets/character_element/mugi2.jpg');
  }
  #azusa {
    background-image: url('../assets/character_element/azusa1.jpg');
  }
  #azusa:hover {
    background-image: url('../assets/character_element/azusa2.jpg');
  }
</style>
