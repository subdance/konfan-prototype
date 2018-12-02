<template lang="html">
  <div class="mainHolder">
    <div id="addTextHolder">
      <p id="addText"><i class="el-icon-star-on"></i>下方绝密档案,非粉丝会成员禁止翻阅！<i class="el-icon-star-on"></i></p>
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
      </table>
      <div class="detailHolder">
        <transition name="el-fade-in-linear">
          <div v-show='isDetailShowe'>
            <table>
              <tr>
                <td class="detailTd">
                  <p class="introPara" v-for='(paragraph) in backDetail1[index1].intro'> &nbsp  {{ paragraph }} </p>
                </td>
                <td class="detailTd">
                  <p class="introPara" v-for='(paragraph) in backDetail2[index2].intro'> &nbsp  {{ paragraph }}</p>
                </td>
                <td class="detailTd">
                  <p class="introPara"> &nbsp {{ nowDetail3 }}</p>
                  <table>
                    <tr v-for='(basic, index) in basicIntro[index1].info'>
                      <th>{{ basic.header }}</th>
                      <td>{{ basic.detail }}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </transition name="el-fade-in-linear">

        <transition name="el-fade-in-linear">
          <div class="altHolder" v-show='isAltShow'>
          </div>
        </transition name="el-fade-in-linear">
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
export default {
  data(){
    return{
      isBlur: [true, true, true, true, true],
      isDetailShowe: false,
      isAltShow: true,
      nowDetail1: null,
      nowDetail2: null,
      nowDetail3: null,
      index1: 0,
      index2: 0,
      backDetail1: [
        {
          intro: [
          '姓氏源自乐团P-MODEL主唱兼吉他手平泽进',
          '轻音部的吉他手，同时兼任主唱。天然呆指数爆灯。在学会弹吉他后练就了名为“绝对音感”的特殊能力。',
          '能"专注于一件事情"并且做到非常好的地步,常被调侃为内存不足的单线程超级CPU。',
          '运动学习样样不行，但认真起来可以在补考中取得满分。',
          '加入轻音部后从头开始学习吉他。平日生活闲散，又很爱吃甜食，却无论如何也不会变胖。',
          '喜欢可爱的东西。给自己的吉他起名为吉太。',
          '官配是中野梓，把中野梓叫做“梓喵”，且喜欢拥抱梓。有一个姐控，能干的妹妹——平泽忧，姐妹之间的关系非常好。与真锅和是青梅竹马。',
          '最后与四人一同考上同所大学。',
        ]},
        {
          intro: [
          '元气少女，有着男孩子般的性格，说话带点关西口音。经常是凭着冲劲热情做事，但常常会后劲不足，甚至半途而废',
          '性格大大咧咧，哪怕是重要的社团活动也会忘记，如忘记填写轻音部活动申请表格、忘记参加部长会议等等',
          '喜欢并善于交际，大学开学没多久就能和高年级生搞好关系并获得大量旧的学习资料。',
          '善于观察发现周围出现的细节而马上做出反应，善于激励乐队士气，故意搞笑地演绎小剧场来舒缓澪的紧张心态，有着这样使部室的气氛明亮高涨的能力。',
          '茶色短发，且用发箍把额前的刘海箍起，露出额头。冬季制服为解开外套的衣钮，而且不把袖衫的末端放进裙筒内，夏季制服也是如此。便服以休闲且容易动的裤式服装为主。刘海放下来后，人设与平泽唯极为相似。',
          '善于模仿他人，有着模仿他人到惟妙惟肖的能力，轻音部内的搞笑主力，昵称为律队或律酱。',
        ]},
        {
          intro: [
          '樱丘高中1年级生。在轻音部担任贝司手。左撇子，以黑色长直发为显著特征。身材高挑，帅气文静，性格纤细，容易害羞脸红，寒性体质（手冷），对恐怖话题苦手。',
          '用老式胶卷相机拍照（使用的相机应该是LOMO LC-A）。',
          '虽然长着一张傲娇脸，但其实并不是典型的傲娇，更倾向于软妹子类。外表是强气女王型，内在却很少女。',
          '学习成绩优秀，因此在考试前经常被田井中律拉来抱佛脚。因为性格腼腆而选择了贝司手，理由是吉他手通常站在乐队的前面，太引人注目，使得自己会不好意思。',
          '负责轻音部歌曲的歌词，会写出很肉麻、可爱、甜蜜的歌词。',
          '在第一年学园祭公演之后获得巨大的人气而出现了“秋山澪Fans Club”（还有蓝白事件，澪个人不愿提及的黑历史）。',
          '在11区还引发了澪妹病毒M型流感病，属性类似于钉宫病。自己的贝斯被唯改名为伊丽莎白（结尾日文发音和贝斯相近）。',
        ]},
        {
          intro: [
          '樱丘高中生，后来与轻音部3人（梓除外）考上同一所大学。在轻音部担任键盘手',
          '虽然是有钱人家的大小姐但是在家里以外完全没有大小姐的气派，不过因此会对一些奇怪的东西感兴趣（如一下子能把窗户擦干净的布）',
          '性格上还有些小孩子气，经常被部员们的话题吸引而参与其中。',
          '从四岁起开始练钢琴，获奖无数。轻音部的曲子几乎都是她创作出来的。',
          '成绩优秀。粗粗的眉毛很有特点。经过呆唯考证，其实那是腌萝卜,呆唯吃掉后的评语是好吃？？？据本人供述将其拿掉的话本体就会融化',
          '对山中佐和子老师抱有憧憬，常常为了留住她和避免尴尬而拿出点心诱惑她而且还是百分百成功',
          '曾被律澪二人误解为喜欢佐和子老师。其本人表示“女同什么的也不错嘛”澪听后松了一口气',
          '对百合非常感兴趣，唯梓二人喂食PLAY时在左下角一脸痴汉满足的欣赏。',
        ]},
        {
          intro: [
          '故事开始的第二年轻音部新加入的吉他手，与优在同一班級',
          '在新生欢迎会上看过轻音部的演出後，被唯的吉他演奏感动而加入了轻音部。',
          '剛加入轻音部時是個容易被牵着鼻子走的严肃双马尾少女，雌心壮志要跟学姐們在乐坛闯出一片天，對轻音部的散漫作风感到不满，一度流下失望的泪水，但最終在大家的合奏下，梓拭去眼泪露出欣慰的微笑。從此走上了大众宠物的不归来路。',
          '对吉他十分精通，水平远在平泽唯之上。',
          '本人非常尊敬秋山澪。且很適合戴貓耳,有很多可愛的表现。被唯称为「梓喵」',
          '在学姐们毕业时成为部长，同時好姐妹优和纯也一起加入轻音部',
        ]},
      ],
      backDetail2: [
        {
          intro: [
          '轻松及天然呆的女子。平日也是发呆的多，悠闲自在地在家里无所事事或滚来滚去',
          '性格和善，1年级时鼓励紧张的澪及与觉得冷的妹妹一起戴同一个颈巾。',
          '本身有冒失娘性格，做任何事都是做不好：如温习时很难集中，将酱油和砂糖混淆，拿鸡蛋时不慎打破。',
          '虽说如此；但当别人生气时，看见她傻里傻气的笑容，总是会原谅她',
          '有着小孩子一样的性格，被赞扬的话会感到非常喜悦。',
          '平时虽然什么事也做不好，但是本身认真专心去做的话，其效果十分惊人。',
          '偶然在某些事情上会突然有令人意想不到之怪点子。例如因天气太热，突然从小猪身上想到换上泳衣消暑解热',
        ]},
        {
          intro: [
          '家庭环境相对比较自由开放,与秋山澪是青梅竹马，俩人感情非常要好，都视对方是自己最信赖的人。',
          '幼年时起就经常“骚扰”澪，但现时在言语或行动上对澪恶作剧时，通常都会被澪吐槽并予以拳头回敬。',
          '与平泽唯相性极佳，是轻音部内耍宝二人组。',
          '被琴吹紬宠爱着，在很多轻音部决策上紬都是站在律一边。',
          '中野梓的榜样，高三时为了当好部长梓多次刻意模仿了律的以前的举动。',
        ]},
        {
          intro: [
          '身材很好，一般认为仅次于山中佐和子。与梓除了发型之外很难区分开，反正后来也有了轻音脸的。',
          '秋山澪是左撇子，使用左手手指弹贝司，一般不使用拨片。',
          '澪所用的耳机为AKG K701耳机，对播放器电流输出能力有很高的要求，一般需搭配高级耳放及解码器使用，若以较为低端的播放器推动则不能发挥正常水平。',
          'K701在日本一度被炒作到70000日元以上。',
          '澪所用的手机为三菱FOMO手机的D902i，2005上市，滑盖，2.8英寸240×400像素的QVGA液晶屏，200万像素CCD相机等，澪用的是莹白色的。目前已经很难买到了。',
          '澪的姓氏来源于秋山胜彦，直接取自于79年结成2000年解散的音乐组合P-MODEL。',
        ]},
        {
          intro: [
          '有养乌龟的经验(因为家里养了不少乌龟)，提出照顾“小猪”的伙食。',
          '毕业时的愿望是使用一下擦窗布来擦窗。',
          '当地的乐器店是䌷父亲旗下的的企业（乐器打折无压力）。',
          '优先处理朋友的事，曾今为了律的暑假计划取消了出国旅游，被律邀请去玩的时候也很高兴的取消了当日行程。',
          '名字来源于P-MODEL乐队组合。',
        ]},
        {
          intro: [
          '新生欢迎会上，呆唯的一番‘滑滑蛋’战术，感动了在座的所有人。对于她們的表演感到十分崇拜的中野梓就想加入到轻音部這個团体里。',
          '但是經過輕音部服装顾问山中佐和子一番观察，覺得有某用途的道具「貓耳」很适合中野梓。',
          '万般无奈傲娇的梓喵戴上貓耳後，在呆唯的強烈要求淫威下，最终十分可愛地細細叫出「喵」的擬聲詞。',
          '天然呆，假小子和最強人妻沉浸在中野梓的那声喵叫，都觉得十分可愛。从此就自然而然地成為了大众宠物，呆唯也把中野梓稱之為「梓喵」。',
        ]},
      ],
      backDetail3: [
        '电吉他：Gibson 2008 Les Paul Standard Heritage Cherry Sunburst；昵称: ギー太;扩音器：Marshall MG15CDR;还有神一般的响板！',
        '鼓组Yamaha Hipgig HG6T46RMMY、铙钹/踏钹组Zildjian。',
        '贝斯是Fender japan JB62-DMC/VSP/3TS LH。扩音器是Fender Japan BMC-20CE。',
        '合成器：KORG Triton Extreme 76、KORG RK-100；扩音器：Roland KC-880。',
        '吉他Fender Japan Mustang MG69/MH CAR。爱称木炭。',
      ],
      basicIntro: [
        {
          name: 'yui',
          info:[
            {
              header: '姓名',
              detail: '平沢 唯',
            },
            {
              header: '别号',
              detail: '唯、呆唯',
            },
            {
              header: '身高',
              detail: '156cm',
            },
            {
              header: '体重',
              detail: '50kg',
            },
            {
              header: '生日',
              detail: '11月27日',
            },
            {
              header: '血型',
              detail: 'O型',
            },
            {
              header: '声优',
              detail: '丰崎爱生',
            },
            {
              header: '萌点',
              detail: '天然呆、不使用能力的天才少女、姐姐、短发、发卡、呆毛、平地摔跤、父母双忙，有妹有房(无误)、黑丝、LV4.绝对音感',
            },
            {
              header: '兴趣',
              detail: '吃、睡、吉他、梓喵',
            },
          ],
        },//yui
        {
          name: 'ritsu',
          info:[
            {
              header: '姓名',
              detail: '田井中 律',
            },
            {
              header: '别号',
              detail: '律队、律酱、部长、律堆、朱律叶',
            },
            {
              header: '身高',
              detail: '154cm',
            },
            {
              header: '体重',
              detail: '48kg',
            },
            {
              header: '生日',
              detail: '8月21日',
            },
            {
              header: '血型',
              detail: 'B型',
            },
            {
              header: '声优',
              detail: '佐藤聪美',
            },
            {
              header: '萌点',
              detail: '元气娘、微傲娇、微电波、百合、高额头、制服、短发、发卡，放下发卡后令人意外地漂亮',
            },
            {
              header: '兴趣',
              detail: '摇滚，捉弄澪，逗大家笑，赚钱',
            },
          ],
        },//ritsu
        {
          name: 'mio',
          info:[
            {
              header: '姓名',
              detail: '秋山 澪',
            },
            {
              header: '别号',
              detail: 'Mio，Mio酱，小澪，变装王，澪碳，罗mio',
            },
            {
              header: '身高',
              detail: '160cm',
            },
            {
              header: '体重',
              detail: '54kg',
            },
            {
              header: '生日',
              detail: '1月15日',
            },
            {
              header: '血型',
              detail: 'A型',
            },
            {
              header: '声优',
              detail: '	日笠阳子 （阳子豁出去了之前的几乎唯一一个好角色）',
            },
            {
              header: '萌点',
              detail: '吐槽、隐藏巨乳、水手服、黑长直、左撇子、蓝白胖次、软妹、黑化、傲娇、换发型、歌姬',
            },
            {
              header: '兴趣',
              detail: '逛乐器店、写很肉麻的歌词，',
            },
          ],
        },//mio
        {
          name: 'mugi',
          info:[
            {
              header: '姓名',
              detail: '琴吹 紬',
            },
            {
              header: '别号',
              detail: '䌷酱、MUGI',
            },
            {
              header: '身高',
              detail: '157cm',
            },
            {
              header: '体重',
              detail: '53kg',
            },
            {
              header: '生日',
              detail: '7月2日',
            },
            {
              header: '血型',
              detail: 'O型',
            },
            {
              header: '声优',
              detail: '寿美菜子',
            },
            {
              header: '萌点',
              detail: '大小姐，粗眉，百合，怪力（53公斤的䌷酱经常背着17公斤的琴上学放学）',
            },
            {
              header: '兴趣',
              detail: '百合，看别人百合',
            },
          ],
        },//mugi
        {
          name: 'azusa',
          info:[
            {
              header: '姓名',
              detail: '中野梓',
            },
            {
              header: '别号',
              detail: '梓喵、阿梓喵、梓cat',
            },
            {
              header: '身高',
              detail: '150cm',
            },
            {
              header: '体重',
              detail: '46kg',
            },
            {
              header: '生日',
              detail: '11月11日',
            },
            {
              header: '血型',
              detail: 'AB型',
            },
            {
              header: '声优',
              detail: '竹達彩奈',
            },
            {
              header: '萌点',
              detail: '雙馬尾、傲嬌、天然萌、女王、貧乳、學妹、貓耳、幼兒體型、黑絲、長髮',
            },
            {
              header: '兴趣',
              detail: '也许是被唯前辈抱住然后嘴上说讨厌心里却窃喜？',
            },
          ],
        },//azusa

      ],
    }
  },
  methods:{
    changeDetail(index){
      // eventBus.$emit('changeCharacter', index);
      var that  = this;
      this.isAltShow = false;
      this.isDetailShowe = false;
      for(let i = 0; i < this.isBlur.length; i++){
        this.isBlur[i] = true;
      }
      this.isBlur[ index - 1 ] = false;
      setTimeout(function(){
        that.index1 = index - 1;
        that.index2 = index - 1;
        that.nowDetail3 = that.backDetail3[ index - 1 ];
        that.isDetailShowe = true;
      }, 100);
    },
  },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  table {
    margin: auto;
  }
  #addTextHolder {
    font-size: 1.6rem;
    text-align: center;
  }
  #addText {
    color: #DCDFE6;
    margin-top: 0;
  }
  .introHolder {
    position: relative;
    z-index: 1;
    margin: auto;
  }
  .mainHolder {
    width: 100%;
    padding-bottom: 1rem;
    background: #12c2e9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .tableHolder {
    width: 100%;
    text-align: center;
    position: relative;
  }
  .picTd {
    width: 19rem;
    height: 19rem;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    transition: 0.2s;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid white;
  }
  .blurTd {
    filter: blur(3px);
  }
  .introPara {
    text-align:justify;
    margin-top: 0;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #DCDFE6;
    color: #303133;
  }
  #yui {
    background-image: url('../assets/character_element/yui1.jpg');
  }
  #yui:hover {
    background-image: url('../assets/character_element/yui2.jpg');
    filter: blur(0px);
    transform: scale(1.2) rotate(15deg);;
    z-index: 999;
  }
  #ritsu {
    background-image: url('../assets/character_element/ritsu1.jpg');
  }
  #ritsu:hover {
    background-image: url('../assets/character_element/ritsu2.jpg');
    filter: blur(0px);
    transform: scale(1.1) rotate(-15deg);;
  }
  #mio {
    background-image: url('../assets/character_element/mio1.jpg');
  }
  #mio:hover {
    background-image: url('../assets/character_element/mio2.jpg');
    filter: blur(0px);
    transform: rotate(-30deg);;
  }
  #mugi {
    background-image: url('../assets/character_element/mugi1.jpg');
  }
  #mugi:hover {
    background-image: url('../assets/character_element/mugi2.jpg');
    filter: blur(0px);
    transform: rotate(360deg);
  }
  #azusa {
    background-image: url('../assets/character_element/azusa1.jpg');
  }
  #azusa:hover {
    background-image: url('../assets/character_element/azusa2.jpg');
    filter: blur(0px);
    transform: scale(1.3);
  }
  .detailHolder {
    min-height:50rem;
  }
  .detailTd {
    color: #606266;
    font-size: 1.7rem;
    max-width: 40rem;
    padding: 1rem 1rem 0rem 1rem;
    vertical-align: top;
    border-right: 1px solid #C0C4CC;
  }
  .altHolder {
    margin: auto;
    width: 80%;
    height: 60rem;
    background-image: url('../assets/background/2.png');
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 2px grey;
  }
</style>
