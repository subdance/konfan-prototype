<template lang="html">
  <div class="mainHolder">
    <div class="cache">
      <div class="cacheyui">

      </div>
      <div class="cacheritsu">

      </div>
      <div class="cachemio">

      </div>
      <div class="cachemugi">

      </div>
      <div class="cacheazusa">

      </div>
    </div>
    <div id="addTextHolder">
      <p id="addText"><i class="el-icon-star-on"></i>下方绝密档案,非粉丝会成员禁止点击！<i class="el-icon-star-on"></i></p>
    </div>
    <div class="tableHolder">
      <div class="girlList">
        <div @click='changeDetail(1)' :class="{ picTd: true, blurTd: isBlur[0] }" id="yui"></div>
        <div @click='changeDetail(2)' :class="{ picTd: true, blurTd: isBlur[1] }" id="ritsu"></div>
        <div @click='changeDetail(3)' :class="{ picTd: true, blurTd: isBlur[2] }" id="mio"></div>
        <div @click='changeDetail(4)' :class="{ picTd: true, blurTd: isBlur[3] }" id="mugi"></div>
        <div @click='changeDetail(5)' :class="{ picTd: true, blurTd: isBlur[4] }" id="azusa"></div>
      </div>
      <div class="detailHolder">
        <transition name="el-fade-in-linear">
          <div v-show='isDetailShowe' class="flexHolder">
            <div class="detailTd">
              <p class="introPara" v-for='(paragraph) in backDetail1[index1].intro'> &nbsp  {{ paragraph }} </p>
            </div>
            <div class="detailTd">
              <p class="introPara" v-for='(paragraph) in backDetail2[index2].intro'> &nbsp  {{ paragraph }}</p>
            </div>
            <div class="detailTd">
              <p class="introPara"> &nbsp &nbsp {{ nowDetail3 }}</p>
              <table style="text-align: center; position: relative;">
                <tr v-for='(basic, index) in basicIntro[index1].info'>
                  <th>{{ basic.header }}</th>
                  <td>{{ basic.detail }}</td>
                </tr>
              </table>
              <div class="outerHolder">
                <span class="outerText">本文部分引自<a href="https://zh.moegirl.org/" target="_blank">萌娘百科</a>,文字内容遵守【知识共享 署名-非商业性使用-相同方式共享 3.0】协议。</span></br>
                <span class="outerText">本文部分引自<a href="https://wiki.komica.org/" target="_blank">KomicaWiki</a></span>
              </div>
            </div>
          </div>
        </transition>
        <transition name="el-fade-in-linear">
          <div
            :class='{altHolder: isBigPic, smallAltHolder: !isBigPic}'
            @click='togglePic'
            >
            <img class="altImg" :src="backPic[randomIndex]" alt="">
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
export default {
  data(){
    return{
      isBigPic: true,
      isBlur: [true, true, true, true, true],
      backPic: [
        'http://35.244.189.64/k-on-fan/image/video-room/1.jpg',
        'http://35.244.189.64/k-on-fan/image/video-room/2.jpg',
        'http://35.244.189.64/k-on-fan/image/video-room/3.jpg',
        'http://35.244.189.64/k-on-fan/image/video-room/4.jpg',
      ],
      randomIndex: 0,
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
          '是少数具有黑丝属性的女主角',
          '轻音部的吉他手，同时兼任主唱。天然呆指数爆灯。在学会弹吉他后练就了名为“绝对音感”的特殊能力',
          '不用辅助工具就能听出1/8的细微走音，令梓喵惊讶不已但是调音经常会请求梓喵帮忙',
          '能"专注于一件事情"并且做到非常好的地步,常被调侃为内存不足的单线程超级CPU',
          '加入轻音部后从头开始学习吉他。平日生活闲散，又很爱吃甜食，却无论如何也不会变胖。喜欢可爱的东西（会买现在用的这把吉他也是因为它看起来非常可爱）。给自己的吉他起名为吉太。太冷或太热本人都不喜欢。官配是中野梓，把中野梓叫做“梓喵”。且喜欢拥抱梓。做事纯凭直觉，很难把精神同时集中在两件事上。不过一旦集中精力到同一件事情上，唯的潜力是很棒的。',
          '运动学习样样不行，但认真起来可以在补考中取得满分',
          '加入轻音部后从头开始学习吉他。平日生活闲散，又很爱吃甜食，却无论如何也不会变胖。',
          '官配是中野梓，把中野梓叫做“梓喵”，且喜欢拥抱梓。有一个姐控，能干的妹妹——平泽忧，姐妹之间的关系非常好。与真锅和是青梅竹马',
          '最后与四人一同考上同所大学',
        ]},
        {
          intro: [
          '元气少女，有着男孩子般的性格，说话带点关西口音。经常是凭着冲劲热情做事，但常常会后劲不足，甚至半途而废',
          '性格大大咧咧，哪怕是重要的社团活动也会忘记，如忘记填写轻音部活动申请表格、忘记参加部长会议等等',
          '喜欢并善于交际，大学开学没多久就能和高年级生搞好关系并获得大量旧的学习资料',
          '善于观察发现周围出现的细节而马上做出反应，善于激励乐队士气，故意搞笑地演绎小剧场来舒缓澪的紧张心态，有着这样使部室的气氛明亮高涨的能力',
          '茶色短发，且用发箍把额前的刘海箍起，露出额头。冬季制服为解开外套的衣钮，而且不把袖衫的末端放进裙筒内，夏季制服也是如此。便服以休闲且容易动的裤式服装为主。刘海放下来后，人设与平泽唯极为相似',
          '善于模仿他人，有着模仿他人到惟妙惟肖的能力，轻音部内的搞笑主力，昵称为律队或律酱',
          '据本人说练习音乐是为了预防老年痴呆',
          '擅长料理，曾为轻音部成员亲手做菜，说出过“日本人就应该吃米饭”的豪言',
          '經常性的忘東忘西，甚至連自己社團的成立名單、學園祭舞台申請表等等必要之事都會發生忘記交給學生會的慘況',
        ]},
        {
          intro: [
          '樱丘高中1年级生。在轻音部担任贝司手。左撇子，以黑色长直发为显著特征。身材高挑，帅气文静，性格纤细，容易害羞脸红，寒性体质（手冷），对恐怖话题苦手',
          '用老式胶卷相机拍照（使用的相机应该是LOMO LC-A）',
          '虽然长着一张傲娇脸，但其实并不是典型的傲娇，更倾向于软妹子类。外表是强气女王型，内在却很少女',
          '学习成绩优秀，因此在考试前经常被田井中律拉来抱佛脚。因为性格腼腆而选择了贝司手，理由是吉他手通常站在乐队的前面，太引人注目，使得自己会不好意思',
          '负责轻音部歌曲的歌词，会写出很肉麻、可爱、甜蜜的歌词',
          '歌词曾经被《轻音少女》英文版翻译者吐槽过“日文版和英文版一样听上去傻乎乎的”',
          '在第一年学园祭公演之后获得巨大的人气而出现了“秋山澪Fans Club”（还有蓝白事件，澪个人不愿提及的黑历史）',
          '在11区还引发了澪妹病毒M型流感病，属性类似于钉宫病',
          '自己的贝斯被唯改名为伊丽莎白（结尾日文发音和贝斯相近）',
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
          '53公斤的䌷酱经常背着17公斤的琴上学放学',
          '能轻松地搬动两个人才能抬动的音响设备还哼着歌',
          '轻轻一拳把和田晶打翻滚了两圈倒栽在墙上',
          '唯一一次生氣是因為小佐和建議要找學園祭時代替律打鼓的人選',
          '對待自己家中的僕人則是相反地十分嚴厲',
          '絲毫不會感到害羞',
        ]},
        {
          intro: [
          '故事开始的第二年轻音部新加入的吉他手，与优在同一班級',
          '在新生欢迎会上看过轻音部的演出後，被唯的吉他演奏感动而加入了轻音部。',
          '原本想加入爵士樂社，在同班的憂拐帶一同前往大禮堂聽輕音樂部的演奏後，改變心意加入輕音樂部',
          '剛加入轻音部時是個容易被牵着鼻子走的严肃双马尾少女，雌心壮志要跟学姐們在乐坛闯出一片天，對轻音部的散漫作风感到不满，一度流下失望的泪水，但最終在大家的合奏下，梓拭去眼泪露出欣慰的微笑。從此走上了大众宠物的不归来路。',
          '对吉他十分精通，水平远在平泽唯之上',
          '本人非常尊敬秋山澪。且很適合戴貓耳,有很多可愛的表现。被唯称为「梓喵」',
          '為了使吃醋中的律前輩平復情緒、使大家正常練習，以免學園祭live演唱會開天窗，自願戴上貓耳來引起大家注意',
          '情緒激動的時候會暴走（無誤XD），靠唯的安撫就能平靜下',
          '據梓喵自稱，從小就因為這頭黑髮而常被騎腳踏車撞到的人說像是日本娃娃',
          '手掌是輕音樂部成員中最小的，相對的體態身型也是成員中最嬌小的',
        ]},
      ],
      backDetail2: [
        {
          intro: [
          '轻松及天然呆的女子。平日也是发呆的多，悠闲自在地在家里无所事事或滚来滚去',
          '性格和善，1年级时鼓励紧张的澪及与觉得冷的妹妹一起戴同一个围巾',
          '本身有冒失娘性格，做任何事都是做不好：如温习时很难集中，将酱油和砂糖混淆，拿鸡蛋时不慎打破',
          '虽说如此；但当别人生气时，看见她傻里傻气的笑容，总是会原谅她',
          '有着小孩子一样的性格，被赞扬的话会感到非常喜悦',
          '平时虽然什么事也做不好，但是本身认真专心去做的话，其效果十分惊人',
          '偶然在某些事情上会突然有令人意想不到之怪点子。例如因天气太热，突然从小猪身上想到换上泳衣消暑解热',
          '在家通常都是由妹妹忧打点她的一切。姊妹两人的感情也相当好，虽然本身完全没有身为姐姐的威严，但有时也会尽到当姐姐的责任，像高三学园祭前忧生病时为她煮了稀饭，在此也领悟到了“最重要、最珍惜的东西总是在身边，但总是当成理所当然而没察觉到”的道理，并以这样的心情作了一首歌词“U&I”，充分展现出了姊妹之情'
        ]},
        {
          intro: [
          '家庭环境相对比较自由开放,与秋山澪是青梅竹马，俩人感情非常要好，都视对方是自己最信赖的人',
          '幼年时起就经常“骚扰”澪，但现时在言语或行动上对澪恶作剧时，通常都会被澪吐槽并予以拳头回敬',
          '对体育以外的科目都不擅长，经常拉澪来临时抱佛脚',
          '与平泽唯相性极佳，是轻音部内耍宝二人组',
          '被琴吹紬宠爱着，在很多轻音部决策上紬都是站在律一边',
          '中野梓的榜样，高三时为了当好部长梓多次刻意模仿了律的以前的举动。',
          '有男孩子气息的元气娘，性格粗枝大叶，经常忘交轻音部活动申请表，女工什么的完全不会，但意外地对缝扣子非常在行。和秋山澪小时候就认识，喜欢讲让澪害怕的事，经常被用拳头制裁。因为觉得“吉他或键盘等要手指不停的按来按去而感到难以应付，而打鼓则不需要而且很帅”而选择当鼓手，但是曾对于演出时鼓手在后排无法成为焦点懊恼过。憧憬的鼓手是现实乐队“THE WHO”中的Keith Moon',
          '會因為澪交到新朋友而吃醋無理取鬧大鬧脾氣',
        ]},
        {
          intro: [
          '身材很好，一般认为仅次于山中佐和子。与梓除了发型之外很难区分开，反正后来也有了轻音脸的。',
          '秋山澪是左撇子，使用左手手指弹贝司，一般不使用拨片',
          '可以輕鬆地(？)把律整個人垂直抓舉起來',
          '萬年損友兼相聲組，與律分別擔綱KY和吐嘈',
          '手掌是輕音樂部成員中最大的。手又大內心又冰冷的女人',
          '第一次表演学园祭結束跌倒而春光外洩，画面中以一個藍白碗來示意，成為經典畫面之一',
          '澪所用的耳机为AKG K701耳机，对播放器电流输出能力有很高的要求，一般需搭配高级耳放及解码器使用，若以较为低端的播放器推动则不能发挥正常水平',
          'K701在日本一度被炒作到70000日元以上',
          '澪所用的手机为三菱FOMO手机的D902i，2005上市，滑盖，2.8英寸240×400像素的QVGA液晶屏，200万像素CCD相机等，澪用的是莹白色的。目前已经很难买到了',
          '世萌2010, 力压御坂美琴夺得萌王',
          '截至2018为止,一共取得11个萌王,萌王总数仅次于御坂美琴(33个)、夏娜(12.5个),列最多萌王榜第三位,同时亦是京阿尼角色中萌战成绩最佳一人',
        ]},
        {
          intro: [
          '在轻音部担任键盘手。虽然是有钱人家的大小姐但是在家里以外完全没有大小姐的气派，不过因此会对一些奇怪的东西感兴趣（如一下子能把窗户擦干净的布）',
          '性格上还有些小孩子气，经常被部员们的话题吸引而参与其中',
          '从四岁起开始练钢琴，获奖无数。轻音部的曲子几乎都是她创作出来的。成绩优秀',
          '有养乌龟的经验(因为家里养了不少乌龟)，提出照顾“小猪”的伙食',
          '毕业时的愿望是使用一下擦窗布来擦窗',
          '当地的乐器店是䌷父亲旗下的的企业（乐器打折无压力）',
          '优先处理朋友的事，曾今为了律的暑假计划取消了出国旅游，被律邀请去玩的时候也很高兴的取消了当日行程',
          '名字来源于P-MODEL乐队组合',
          '部室的點心和茶具都是她帶來的,造成輕音樂部主要活動內容變成喝茶吃點心的元兇',
          '和其它部員發生親密接觸,對任何新奇、沒接觸過的事物都充滿興趣',
          '認為像澪及律平時那樣打打鬧鬧正是百合友情的表現，因此曾主動請求律和澪打自己的頭，甚至故意做一些怪事來討打。看來是個M??',
        ]},
        {
          intro: [
          '在律、澪、唯、紬等三年級生畢業之後，接任輕音部部長',
          '好姐妹优和纯也一起加入轻音部',
          '個性比較一板一眼，對輕音樂部散漫的氣氛相當不習慣。但後來還是被同化了。',
          '此外對待唯的態度則是無限傲嬌',
          '父母都是爵士樂團成員，從小學四年級就開始學吉他',
          '經常被唯抱住',
          '在新欢演唱会上，呆唯的一番“滑滑蛋”战术后，感动了演唱会上的所有人。对于她们的表演感到十分崇拜的中野梓就想加入到轻音部这个团体里。但是经过轻音部制装控顾问山中佐和子一番观察细腻眼光，觉得有某用途的道具“猫”“很配”中野梓。万般无奈傲娇的梓喵戴上猫耳后，还在呆唯的强烈要求淫威下，终于十分可爱地细细叫出“喵”的拟声词。天然呆，潇洒女和最强人妻沉浸在中野梓的那声喵叫声，都觉得十分可爱。然后就自然而然地成为了大众宠物于是呆唯就把中野梓称之为“梓喵”。',
          '看到澪露內褲的錄影畫面後反應居然是流鼻血,可見又是個...',
        ]},
      ],
      backDetail3: [
        '电吉他：Gibson 2008 Les Paul Standard Heritage Cherry Sunburst;扩音器：Marshall MG15CDR;响板',
        '鼓组Yamaha Hipgig HG6T46RMMY;铙钹/踏钹组Zildjian',
        '贝斯Fender japan JB62-DMC/VSP/3TS LH;扩音器Fender Japan BMC-20CE',
        '合成器：KORG Triton Extreme 76、KORG RK-100;扩音器：Roland KC-880',
        '吉他Fender Japan Mustang MG69/MH CAR',
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
              detail: '天然呆、百合、姐姐、呆毛、父母双忙，有妹有房(无误)、黑丝、绝对音感',
            },
            {
              header: '兴趣',
              detail: '吃、睡、吉他、梓喵、摟吻',
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
              detail: '百合，看别人百合,準備各式茶點',
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
              detail: '雙馬尾、傲嬌、天然萌、女王、貧乳、學妹、貓耳、黑絲、長髮',
            },
            {
              header: '兴趣',
              detail: '唯前輩、鯛魚燒、澪前輩',
            },
          ],
        },//azusa

      ],
    }
  },
  created(){
    this.generateRandom();
  },
  methods:{
    changeDetail(index){
      this.isBigPic = false;
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

    togglePic(){
      var that  = this;
      that.isDetailShowe = false;
      setTimeout(function(){
        that.isBigPic = true;
      }, 200);
    },

    generateRandom(){
      var sum = this.backPic.length;
      var that = this;
      setInterval(function(){
        if(that.randomIndex < sum  - 1 ){
          that.randomIndex++;
        }
        else {
          that.randomIndex = 0;
        }
      }, 4000)
    },
  },
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #F56C6C;
  }
  * {
    box-sizing: border-box;
  }
  table {
    margin: auto;
    width: 80%;
  }
  .flexHolder {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
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
    transition: 0.5s ease-in-out;
    width: 100%;
    padding-bottom: 1rem;
    background-image: url(../assets/background/4.png);
  }
  .girlList {
    display: flex;
    justify-content: space-around;
    margin-bottom: 4rem;
  }
  .tableHolder {
    width: 100%;
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
    border: 4px solid white;
    box-shadow: 8px 8px 2px black;
  }
  .blurTd {
    filter: blur(3px);
  }
  .introPara {
    text-align:justify;
    margin-top: 0;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #DCDFE6;
    color: #C0C4CC;
  }
  #yui {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/yui1.jpg');
  }
  #yui:hover {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/yui2.jpg');
    filter: blur(0px);
    transform: scale(1.2) rotate(15deg);;
    z-index: 999;
  }
  #ritsu {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/ritsu1.jpg');
  }
  #ritsu:hover {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/ritsu2.jpg');
    filter: blur(0px);
    transform: scale(1.1) rotate(-15deg);;
  }
  #mio {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/mio1.jpg');
  }
  #mio:hover {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/mio2.jpg');
    filter: blur(0px);
    transform: rotate(-30deg);;
  }
  #mugi {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/mugi1.jpg');
  }
  #mugi:hover {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/mugi2.jpg');
    filter: blur(0px);
    transform: rotate(10deg);
  }
  #azusa {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/azusa1.jpg');
  }
  #azusa:hover {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/azusa2.jpg');
    filter: blur(0px);
    transform: scale(1.3);
  }
  .cache > div {
    position: absolute;
    opacity: 0;
  }
  .cacheyui {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/yui2.jpg');
  }
  .cacheritsu {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/ritsu2.jpg');
  }
  .cachemio {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/mio2.jpg');
  }
  .cachemugi {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/mugi2.jpg');
  }
  .cacheazusa {
    background-image: url('http://35.244.189.64/k-on-fan/image/element/character/azusa2.jpg');
  }
  .detailHolder {
    overflow: hidden;
    min-height:50rem;
    position: relative;
    transition: 0.5s ease-in-out;
  }
  .detailTd {
    margin: 0 1rem;
    color: #F2F6FC;
    font-size: 1.7rem;
    max-width: 40rem;
    padding: 1rem 2rem;
    vertical-align: top;
    border-right: 1px solid #C0C4CC;
    position: relative;
  }
  .detailTd:last-of-type {
    border-right: 0px solid #C0C4CC;
  }
  .altHolder {
    margin: auto;
    width: 80%;
    border: 2rem solid white;
    box-shadow: 8px 8px 2px black;
    transition: 0.5s ease-in-out;
  }
  .smallAltHolder {
    background-position: center;
    background-size: cover;
    position: absolute;
    left: -10rem;
    top: 8rem;
    width: 20rem;
    border: 0.5rem solid white;
    transform: rotate(-20deg);
    box-shadow: 4px 4px 2px black;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    overflow: hidden;
    opacity: 0.4;
  }
  .outerHolder {
    text-align: right;
  }
  .outerText {
    font-size: 1.1rem;
    color: #909399;
  }
  .altImg {
    width: 100%;
    margin-bottom: -1rem;
  }
  @media only screen and (max-width:600px) {
    .mainHolder {
      min-height: 550px;
      padding-bottom: 4rem;
    }
    .detailHolder  {
      min-height: 0;
      border-top: 5px solid #303133;
    }
    .girlList {
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 2rem;
    }
    .picTd {
      width: 30vw;
      height: 30vw;
    }
    .altHolder {
      width: 90vw;
      border: 10px solid white;
      border-bottom: 20px solid white;
    }
    .smallAltHolder {
      background-position: center;
      background-size: cover;
      position: absolute;
      left: -8rem;
      top: -8rem;
      width: 20rem;
      border: 0.5rem solid white;
      transform: rotate(-45deg);
      box-shadow: 4px 4px 2px black;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      opacity: 0.5;
    }
    .flexHolder {
      flex-wrap: wrap;
    }
    .detailTd {
      max-width: 100%;
      padding: 0 2rem;
    }
    .outerHolder {
      width: 90vw;
      display: block;
      position: static;
      text-align: right;
      margin-bottom: 1rem;
    }
    .introPara {
      font-size: 1.1rem;
    }
  }
</style>
