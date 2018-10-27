<template lang="html">
  <div id="footHolder">
    <p>this is place for cure</p>
    <el-popover
      placement="top-start"
      title="WPC Beijing"
      width="350"
      trigger="hover"
      content="Rui Rui3 Luo/Chengyuan CY13 Wu/Bao Bao1 Liu">
      <el-button
        id="popOverButton"
        slot="reference"
        type='warning'
        >
        Contact us
      </el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  #footHolder {
    color: #606266;
    background-color: #DCDFE6;
    border-radius: 10px;
    height: 30px;
    text-align: center;
    line-height: 0.03;
    box-shadow: 3px 3px 5px grey;
  }
  p {
    display: inline-block;
  }
  #popOverButton {
    padding: 1px 1px;
  }
</style>
