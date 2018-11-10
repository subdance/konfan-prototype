<template lang="html">
  <div class="mainHolder">
    <div id="addTextHolder">
      <p id="addText"><i class="el-icon-star-on"></i>下方绝密档案<i class="el-icon-star-on"></i></p>
    </div>
    <div class="tableHolder">
      <table style="margin:auto">
        <tr>
          <td class="picTd" id="yui"></td>
          <td class="picTd" id="ritsu"></td>
          <td class="picTd" id="mio"></td>
          <td class="picTd" id="mugi"></td>
          <td class="picTd" id="azusa"></td>
        </tr>
      </table>
      <div class="detailHolder">
        <table>
          <tr>
            <td class="detailTd">{{ nowDetail1 }}</td>
            <td class="detailTd">{{ nowDetail2 }}</td>
            <td class="detailTd">{{ nowDetail3 }}</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data(){
    return{
      nowDetail1: '姓氏源自乐团P-MODEL主唱兼吉他手平泽进。轻音部的吉他手，同时兼任主唱。天然呆指数爆灯。在学会弹吉他后练就了名为“绝对音感”的特殊能力，不用辅助工具就能听出1/8的细微走音，令梓喵惊讶不已但是调音经常会请求梓喵帮忙。入部时是连乐谱都不会读、只会打响板的新手。能"专注于一件事情"并且做到非常好的地步。天然呆、晕车、毫无节奏感、反应迟钝、缺少平衡感、经常脱线，运动学习样样不行，但认真起来可以在补考中取得满分，被称为“极端的家伙”。加入轻音部后从头开始学习吉他。平日生活闲散，又很爱吃甜食，却无论如何也不会变胖。喜欢可爱的东西（会买现在用的这把吉他也是因为它看起来非常可爱）。给自己的吉他起名为吉太。太冷或太热本人都不喜欢。官配是中野梓，把中野梓叫做“梓喵”。且喜欢拥抱梓。做事纯凭直觉，很难把精神同时集中在两件事上。不过一旦集中精力到同一件事情上。比如期中考试前狂练吉他和弦并且记住了很多，结果满分100的数学卷子只得了12分；为了能留在轻音部而忙于补考最后竟然得了100分，结果之前记住的吉他和弦全都忘光了。因此常被调侃为内存不足的单线程超级CPU。有一个姐控，能干的妹妹——平泽忧，姐妹之间的关系非常好。与真锅和是青梅竹马。平时昵称她为和和。在舞台剧上上演了"树G"的角色。最后与四人一同考上同所大学。',
      nowDetail2: '轻松及天然呆的女子。平日也是发呆的多，悠闲自在地在家里无所事事或滚来滚去。性格和善，1年级时鼓励紧张的澪及与觉得冷的妹妹一起戴同一个颈巾。本身有冒失娘性格，做任何事都是做不好：如温习时很难集中，将酱油和砂糖混淆，拿鸡蛋时不慎打破。虽说如此；但当别人生气时，看见她傻里傻气的笑容，总是会原谅她。有着小孩子一样的性格，被赞扬的话会感到非常喜悦。平时虽然什么事也做不好，但是本身认真专心去做的话，其效果十分惊人。偶然在某些事情上会突然有令人意想不到之怪点子。例如因天气太热，突然从小猪身上想到换上泳衣消暑解热',
      nowDetail3: '电吉他：Gibson 2008 Les Paul Standard Heritage Cherry Sunburst；昵称: ギー太;扩音器：Marshall MG15CDR;还有神一般的响板！'
    }
  },
}
</script>

<style scoped>
  table {
    margin: auto;
  }
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
    background-image: url('../assets/background/4.jpg');
    background-position: center;
    background-size: cover;
  }
  .picTd {
    width: 20rem;
    height: 25rem;
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
  .detailHolder {
  }
  .detailTd {
    color: #606266;
    font-size: 2rem;
    max-width: 40rem;
    padding: 1rem 1rem 0rem 1rem;
    vertical-align: top;
  }
  .detailTd::first-letter {
    font-size: 4rem;
    color: #df000a;
  }
</style>
