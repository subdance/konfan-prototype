<template lang="html">
  <div class="mainHolder">
    <div id="addTextHolder">
      <p id="addText"><i class="el-icon-star-on"></i>下方绝密档案<i class="el-icon-star-on"></i></p>
    </div>
    <div class="tableHolder">
      <table style="margin:auto">
        <tr>
          <td @click='changeDetail(1)' :class="{ picTd: true, blurTd: isBlur[0] }" id="yui"></td>
          <td @click='changeDetail(2)' :class="{ picTd: true, blurTd: isBlur[1] }" id="ritsu"></td>
          <td @click='changeDetail(3)' :class="{ picTd: true, blurTd: isBlur[2] }" id="mio"></td>
          <td @click='changeDetail(4)' :class="{ picTd: true, blurTd: isBlur[3] }" id="mugi"></td>
          <td @click='changeDetail(5)' :class="{ picTd: true, blurTd: isBlur[4] }" id="azusa"></td>
        </tr>
      </table></el-collapse-transition>
      <div class="detailHolder">
        <el-collapse-transition>
          <div v-show='isDetailShowed'>
            <table >
              <tr>
                <td class="detailTd">{{ nowDetail1 }}</td>
                <td class="detailTd">{{ nowDetail2 }}</td>
                <td class="detailTd">{{ nowDetail3 }}</td>
              </tr>
            </table>
          </div>
        </el-collapse-transition>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data(){
    return{
      isBlur: [true, true, true, true, true],
      isDetailShowed: false,
      nowDetail1: null,
      nowDetail2: null,
      nowDetail3: null,
      backDetail1: [
        '姓氏源自乐团P-MODEL主唱兼吉他手平泽进。轻音部的吉他手，同时兼任主唱。天然呆指数爆灯。在学会弹吉他后练就了名为“绝对音感”的特殊能力。能"专注于一件事情"并且做到非常好的地步,常被调侃为内存不足的单线程超级CPU。运动学习样样不行，但认真起来可以在补考中取得满分。加入轻音部后从头开始学习吉他。平日生活闲散，又很爱吃甜食，却无论如何也不会变胖。喜欢可爱的东西。给自己的吉他起名为吉太。官配是中野梓，把中野梓叫做“梓喵”，且喜欢拥抱梓。有一个姐控，能干的妹妹——平泽忧，姐妹之间的关系非常好。与真锅和是青梅竹马。最后与四人一同考上同所大学。',

        '元气少女，有着男孩子般的性格，说话带点关西口音。经常是凭着冲劲热情做事，但常常会后劲不足，甚至半途而废。性格大大咧咧，哪怕是重要的社团活动也会忘记，如忘记填写轻音部活动申请表格、忘记参加部长会议等等。喜欢并善于交际，大学开学没多久就能和高年级生搞好关系并获得大量旧的学习资料。善于观察发现周围出现的细节而马上做出反应，善于激励乐队士气，故意搞笑地演绎小剧场来舒缓澪的紧张心态，有着这样使部室的气氛明亮高涨的能力。茶色短发，且用发箍把额前的刘海箍起，露出额头。冬季制服为解开外套的衣钮，而且不把袖衫的末端放进裙筒内，夏季制服也是如此。便服以休闲且容易动的裤式服装为主。刘海放下来后，人设与平泽唯极为相似。善于模仿他人，有着模仿他人到惟妙惟肖的能力，轻音部内的搞笑主力，昵称为“小律（りっちゃん）”。',

        '樱丘高中1年级生。在轻音部担任贝司手。左撇子，以黑色长直发为显著特征。身材高挑，帅气文静，性格纤细，容易害羞脸红，寒性体质（手冷），对恐怖话题苦手。用老式胶卷相机拍照（使用的相机应该是LOMO LC-A）。虽然长着一张傲娇脸，但其实并不是典型的傲娇，更倾向于软妹子类。外表是强气女王型，内在却很少女。学习成绩优秀，因此在考试前经常被田井中律拉来抱佛脚。因为性格腼腆而选择了贝司手，理由是吉他手通常站在乐队的前面，太引人注目，使得自己会不好意思。负责轻音部歌曲的歌词，会写出很肉麻、可爱、甜蜜的歌词。在第一年学园祭公演之后获得巨大的人气而出现了“秋山澪Fans Club”（还有蓝白事件，澪个人不愿提及的黑历史）。在11区还引发了澪妹病毒M型流感病，属性类似于钉宫病。自己的贝斯被唯改名为伊丽莎白（结尾日文发音和贝斯相近）。',

      ],
      backDetail2: [
        '轻松及天然呆的女子。平日也是发呆的多，悠闲自在地在家里无所事事或滚来滚去。性格和善，1年级时鼓励紧张的澪及与觉得冷的妹妹一起戴同一个颈巾。本身有冒失娘性格，做任何事都是做不好：如温习时很难集中，将酱油和砂糖混淆，拿鸡蛋时不慎打破。虽说如此；但当别人生气时，看见她傻里傻气的笑容，总是会原谅她。有着小孩子一样的性格，被赞扬的话会感到非常喜悦。平时虽然什么事也做不好，但是本身认真专心去做的话，其效果十分惊人。偶然在某些事情上会突然有令人意想不到之怪点子。例如因天气太热，突然从小猪身上想到换上泳衣消暑解热。',

        '家庭环境相对比较自由开放,与秋山澪是青梅竹马，俩人感情非常要好，都视对方是自己最信赖的人。幼年时起就经常“骚扰”澪，但现时在言语或行动上对澪恶作剧时，通常都会被澪吐槽并予以拳头回敬。与平泽唯相性极佳，是轻音部内耍宝二人组。被琴吹紬宠爱着，在很多轻音部决策上紬都是站在律一边。中野梓的榜样，高三时为了当好部长梓多次刻意模仿了律的以前的举动。',

        '身材很好，一般认为仅次于山中佐和子。与梓除了发型之外很难区分开，反正后来也有了轻音脸的。秋山澪是左撇子，使用左手手指弹贝司，一般不使用拨片。澪所用的耳机为AKG K701耳机，对播放器电流输出能力有很高的要求，一般需搭配高级耳放及解码器使用，若以较为低端的播放器推动则不能发挥正常水平。目前该耳机为AKG的HIFI向旗舰耳机，在中国售价为2000元人民币左右但随着国产化和新旗舰K812登场已经沦为跳水王。S1EP05中使用的播放器疑为Panasonic CT-570，另K701亦有亮相。K701在日本一度被炒作到70000日元以上。澪所用的手机为三菱FOMO手机的D902i，2005上市，滑盖，2.8英寸240×400像素的QVGA液晶屏，200万像素CCD相机等，澪用的是莹白色的。目前已经很难买到了。澪的姓氏来源于秋山胜彦，直接取自于79年结成2000年解散的音乐组合P-MODEL。'
      ],
      backDetail3: [
        '电吉他：Gibson 2008 Les Paul Standard Heritage Cherry Sunburst；昵称: ギー太;扩音器：Marshall MG15CDR;还有神一般的响板！',
        '鼓组Yamaha Hipgig HG6T46RMMY、铙钹/踏钹组Zildjian。',
        '贝斯是Fender japan JB62-DMC/VSP/3TS LH。扩音器是Fender Japan BMC-20CE。',
      ],
    }
  },
  methods:{
    changeDetail(index){
      var that  = this;
      this.isDetailShowed = false;
      for(let i = 0; i < this.isBlur.length; i++){
        this.isBlur[i] = true;
      }
      this.isBlur[ index - 1 ] = false;
      setTimeout(function(){
        that.nowDetail1 = that.backDetail1[ index - 1 ];
        that.nowDetail2 = that.backDetail2[ index - 1 ];
        that.nowDetail3 = that.backDetail3[ index - 1 ];
        that.isDetailShowed = true;
      }, 600);
    },
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
    background-position: top;
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
  .blurTd {
    filter: blur(2px);
  }
  #yui {
    background-image: url('../assets/character_element/yui1.jpg');
  }
  #yui:hover {
    background-image: url('../assets/character_element/yui2.jpg');
    filter: blur(0px);
  }
  #ritsu {
    background-image: url('../assets/character_element/ritsu1.jpg');
  }
  #ritsu:hover {
    background-image: url('../assets/character_element/ritsu2.jpg');
    filter: blur(0px);
  }
  #mio {
    background-image: url('../assets/character_element/mio1.jpg');
  }
  #mio:hover {
    background-image: url('../assets/character_element/mio2.jpg');
    filter: blur(0px);
  }
  #mugi {
    background-image: url('../assets/character_element/mugi1.jpg');
  }
  #mugi:hover {
    background-image: url('../assets/character_element/mugi2.jpg');
    filter: blur(0px);
  }
  #azusa {
    background-image: url('../assets/character_element/azusa1.jpg');
  }
  #azusa:hover {
    background-image: url('../assets/character_element/azusa2.jpg');
    filter: blur(0px);
  }
  .detailHolder {
  }
  .detailTd {
    color: #606266;
    font-size: 2rem;
    max-width: 40rem;
    padding: 1rem 1rem 0rem 1rem;
    vertical-align: top;
    border-right: 1px solid #C0C4CC;
  }
  .detailTd::first-letter {
    font-size: 4rem;
    color: #df000a;
  }
</style>
