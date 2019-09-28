<template lang="html">
  <div class="mainHolder">
    <link async href="https://fonts.googleapis.com/css?family=Noto+Serif+SC|ZCOOL+XiaoWei" rel="stylesheet">
    <p class="mainTitle">或远或近的记录</p>
    <div class="single_row" v-for='(item, index) in articleSet' :id="'article' + index" >
        <div 
            class="collapse_title" 
            :class="{'collapse_title_selected': classController[index]}" 
            @click='toggle(index)'
            >
            <span class="title_text">{{ item.title }}</span>
            <p class="title_text_adding">
                {{ item.intro }}
            </p>
        </div>
        <div class="collapse_text" :class="{'expand-text': classController[index]}">
            <p
                class="article_text"
                v-for='(paragraph, index) in item.para'
                :v-key='index'
                > 
                &nbsp &nbsp {{ paragraph }}
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
export default {
    data(){
        return {
            classController: [],
            backUp: [],
            articleSet: [
                {
                title: '那一日的梦',
                intro: '献给永远的轻音',
                para: [
                    '在轻音部第一次合宿的那个海边的夜晚，唯晃晃悠悠地将放音机搬到了澪的面前',
                    '一瞬间，早已准备好的烟花在唯的背后划向天空。唯夸张地划动着拨片，开怀地跳跃着',
                    '澪的眼前被点亮了。是被绚丽的烟火，或许也是被眼前的唯',
                    '唯像摇滚巨星一样、像站在最灿烂的舞台上一样，忘我地表演',
                    '向来羞涩的澪已经忘了自己的表情，痴痴地望着唯',
                    '还可以这样呀!',
                    '原来就算弹着不成调的曲子，就算舞台只是海滩，也可以演奏地如此盛大，开心',
                    '澪心里软软的地方被触动了',
                    '是那个存放着梦想的地方',
                    '海风拂过澪的眼角，肌肤传来些许的清凉感',
                    '"我们的目标，武道馆！"律曾经夸下的海口，似乎在此刻变得不那么遥远了',
                    '梦想啊，好像总是很遥远，就像烟火之上淡淡的星光那样遥远',
                    '可那又是为什么，烟花下的众人，在这一瞬间，都感觉到了最真切的永恒呢？',
                    '烟花的光晕随着海潮消散，海风又起。带着汗珠的唯，傻傻地笑着',
                    '原来是这样啊',
                    '原来我的梦想并不是要站在最大的舞台上演奏',
                    '原来我的梦想，只是一边演奏，一边和你们在一起',
                    '"这里就是我们的武道馆"',
                ],
                },
                {
                title: '故事的起因与未完待续',
                intro: '关于这个网站-18/10.01/夜',
                para: [
                    '第五还是第六遍看轻音了',
                    '在联想前端开发实习了两个月，想着除了公司的东西，自己也该做点什么',
                    '曾经做的一个轻音的网站，但是各方面都有点幼稚',
                    '欸，那不如推翻重做一个吧！',
                    '就这样，这个网站的制作开始了',
                    '前端框架还是用了Vue.国人（华裔）在开源社区的力量真是让人振奋',
                    '后端还是无奈的苦手，最近在读《JavaScript高级程序设计》，也正是为了把JS学精一点，好发展后端（Node.js）',
                    '我很喜欢轻音少女',
                    '我有很多想法，想用自己也许幼稚的实现方式，融入这个网站',
                    '我很开心，能用自己的双手创造些什么，尤其是为自己喜欢的东西去创造',
                    '这就是故事的起因',
                    '剩下的就期待未完待续吧',
                ],
                },
                {
                title: '一些小事',
                intro: '让我感到开心的事情-18/12.2/午夜',
                para: [
                    '冬天的周末，一起床发现窗外下雪了',
                    '周五最后一节课的大扫除',
                    '新年去超市买完年货坐在返程的公交车上',
                    '在圣诞节看到烟火',
                    '看到老朋友，控制不住的想笑，想讲又老又俗的段子',
                    '跟别人谈梦想，别人也在认真地听',
                    '掌握一点美妙的知识',
                    '别人对我说这个小站很棒'
                ],
                },
                {
                title: '一岁除',
                intro: '2018的离去-19/1.6/夜',
                para: [
                    '“似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢愉和不幸”',
                    '在2018的末尾注视这一年，感觉自己越来越迷糊了',
                    '‘不甘于成为被豢养的家畜，于是有些人来到了高墙之外他们想看看外面的世界’',
                    '但是那一天',
                    '在中关村科技中心，无数和我年龄相仿的人从四面八方涌来，然后再交汇到百度，新浪微博等中国一线公司，我感到一种手足无措的惊讶：',
                    '在面试中受到打击的我，一瞬间意识到：',
                    '原来这个世界上满是跟你差不多年纪，却比你更加努力，更加聪明，更加有价值的人',
                    '我从小以来的优越感不见了，取而代之的是悔恨',
                    '以前的我也知道世界很大，强人很多，但当这一事实用逼真的方式将我笼罩在其中时，我才理解到这一点',
                    '‘你很弱，你自幼以来的成功，优越，满足感毫无意义，你的家乡只是一个池塘，你只是池塘里的一条小鱼’',
                    '就是在那时，我不再想呆在那个南方小城的温柔乡了。我想去外面看看',
                    '我想知道，自己的‘器’',
                    '以上，是我2018最想记录的一件事',
                    '其他的事，如鱼饮水就好',
                    '跨年夜时，我窝在寝室里，一边擦鼻涕（感冒了）一边看红白歌会。虽然独自一人，但我却不知从何处感到了升腾的幸福感',
                    '地球只是公转一周，却足够让人世手舞足蹈，这就是人类伟大的浪漫吧',
                    'This is the stand-alone-complex',
                    '所以，以上，新年快乐',
                ],
                },
                {
                title: '爷爷奶奶',
                intro: '我离开家乡之后-19/2.23/夜',
                para: [
                    '爷爷今年84，奶奶72',
                    '我从他们家出发的时候，奶奶没有向往常一样躲在厕所里。她扶着门，一遍又一遍叮嘱我注意安全，奶奶在慈祥地笑',
                    '爷爷也没有向往常一样笑着说“你要好点”，而是有些严肃在奶奶背后望着我，我笨拙地装作没看到爷爷哭了',
                    '我即将参加工作了，在北京。他们也知道，这次离别，以后见面越来越难了',
                    '',
                    '奶奶为我做了18年的饭',
                    '爷爷很喜欢我和我的两个姐姐，每次回家都能感到他的牵挂与喜悦。我无法形容准确，但是很浓烈',
                    '也许他们不懂我，也不了解我的苦闷，但是和他们呆在一起总是很安心',
                    '这是18年朝夕相处的默契吧',
                    '',
                    '在回京的火车上，云彩飞驰，山风在窗外的田间穿梭',
                    '',
                    '下次再回家，应该是2020年的除夕了吧',
                    '下次再看到爷爷奶奶，我会说：“我过的很好，我回家了”',
                ],
                },
                {
                title: '再见，然后吹响下一曲',
                intro: '离开联想-19/3.25/午后',
                para: [
                    '上周从联想前端开发离职了！',
                    '也舍不得。半年的实习，我很感谢联想。作为我的第一份工作，这是一个有某种意义的地方',
                    '多年以后，我也许仍会记得在这儿面试那天，悠悠的风与颠簸的333路。还有那个手心冒汗的自己，在联想大厦气派的穹顶下不安地等待',
                    '',
                    '离开时，中关村的天空依然像那个遥远的夏日般，碧空如洗',
                ],
                },
                {
                title: '致两千年后的你',
                intro: '毕业-19/7.10/午夜',
                para: [
                    '毕业了。实在有点措不及防',
                    '离校前一天的夜里，大伙儿挤到打好的地铺上，喝啤酒玩儿游戏。还是嘻嘻哈哈没心没肺的，没半点伤感的样子，就算到最后，也没有一个人开口提明天寝室就散了这件事',
                    '是不是对于那些避免不了的事情，平平淡淡的迎接它的到来，才是最温柔的方式呢？',
                    '四年也太久了，久到我都忘了大家只是从天涯海角而来暂居的过客。“总有一天得分别的”，时间竟然让人忘了这么重要的事',
                    '“你暑假什么时候回寝啊？”已经听不到这样的话了',
                    '寝室里的四年，有室友们陪伴着，我过得很快乐。这些记忆是我的财富，我会好好收藏着',
                    '我拖着行李，站在再也不会进入的宿舍楼前，突然感觉这一切好像一场很漫长的梦，也许睁开眼，就会回到四年前那个树影婆娑的夏天',
                ],
                },
                {
                title: '向一塌糊涂的人生索求幸福',
                intro: '读《少女不十分》-19/7.17/凌晨',
                para: [
                    '真厉害啊，这本书。',
                    '一开始，大段大段想到哪说哪的的随笔式写法真的有点劝退，但毕竟号称用了十年写成的书，我倒想看看后面到底是怎样一番惊天动地，能让西尾维新说出这样的话。',
                    '少女U对日常用语的一丝不苟，是一个非常非常漂亮的伏笔。巧妙，有误导性，但却又顺理成章，震撼人心。我第一次看到少女U专程下楼对“我”说晚安时的场景，反应是欸这小孩子有点可爱啊，倒没有多想。之后因为"我"在吃晚饭时没有说"我开动了"而导致少女U的情绪爆发，我也仅仅是当成了二次元里很常见的那种“必须讲礼貌的偏执少女”那种设定。而最后，当“我”查看少女的笔记本时，我与书中的“我”才恍然大悟：',
                    '原来U一直是一个不能再乖的好孩子。她根本称不上乖张或心里畸形，她只是在那个已经被过世的父母搞砸了的世界里，天真地，不，应该说是顽固吧，顽固地看护着爸爸和妈妈留下的唯一遗产。',
                    '“我”最后与少女摊牌，少女用属于少女的语调，虚弱地要求"我"，像"爸爸妈妈过去那样"给她讲睡前故事——我是从这里开始流泪的。',
                    '',
                    '“我对U说的……从我嘴里编织出的故事，是关于非一般的人类就用非一般的方式得到了幸福；思想怪异的人就维持着怪异的思想，然后获得幸福；异常的人就当个异常的人，从此也能得到幸福，不管是没有朋友的家伙、没办法用语言表达心中所想的家伙、无法适应周遭的家伙、个性扭曲的家伙、喜欢唱反调的家伙，都这么抱有自我本色最终得到幸福的故事。得不到恩惠的人就算得不到恩惠，也能好好活下去的故事。”',
                    '',
                    '本来是一段有点没头没尾的话。但是，若是出自此时抱着这个误入歧途的少女的“我”之口，对这个千疮百孔却不自知的娇小少女而说的话，那么这段话便显得完整了。',
                    '',
                    "“黄昏不知何时已悄悄降临，纵使夜幕升起，我们还是什么都没做，我依然为U说着'故事'，U就继续听我说。”",
                    '',
                    "U认真的听着。是因为爸爸妈妈留下的那句“别人说话时要注意听”，还是因为我的'故事'本就动听呢？",
                    '',
                    '“没问题的。虽然有很多的谬误，虽然出了很多纰漏，虽然搞砸了很多事情，虽然造成了许多无法挽回，或许再也无法回到正常的人生轨道，但是没关系的，这种事情也没什么大不了的……我一而再地这么告诉她。不是英雄的故事，也不是救世主的故事，仿佛没有尽头般，我持续不断的净是说些关于异端者的故事”',
                    '',
                    '虽然在前面多次表现自己的“与社会不和”、“不会与人打交道”、“为人铁石心肠”，到头来却还是干起了“这种事”的“我”，已经把西尾老师这十年来小说的核心，或者说眼前那个不十分的少女所带给我的触动，娓娓道来了。',
                    '',
                    '“所以仔细听我说吧，U。那被你父母称为真面目——那天我所目击到的你的本质，确实是只要活在这个世上就不得不隐藏起来的一面，但你绝不能因此感到羞愧。虽然你的人生早已经一塌糊涂了……但无论如何，这也不表示你就不能得到幸福。”',
                    '看到这里的我，好像已经泪流满面了。也许书中的“我”，也是如此。',
                    '幸福并不意味着健康，金钱，爱情。也许这些东西确实可以带来幸福，但是幸福的凭依之物却难以被世界所标准化。生活可以让你不幸，但是你总有办法再向生活讨回自己的幸福。这是西尾老师所相信的，也是“我”所希望那个不十分的“少女U”所相信的。',
                    '我也不知道我为什么哭了。我并没有悲惨的家庭经历、也没有被欺负的校园生活、恋情也都是和平分手(至少我认为是和平的)、没有忘不掉的人、我也不会浅薄狂妄到做把自己比较尴尬的二次元兴趣所带来的疏离感来和少女U的身世对比说自己也有共鸣这种蠢事，但等我反应过来时，就已经流泪了。上一次哭还是看你的名字，听到卡司背景音乐中的那一句“僕らタイムフライヤー 時を駆け上がるクライマー”时。',
                    '',
                    "“分别搭上两辆警车，让我没有多余的时间可以和U告别，没有从她口中听到'再见'这两个字，当然我也没有说。”",
                    '',
                    '对了，“我”对“U”所讲的故事，用原文概括的话，就是下面这段话了：',
                    '',
                    '“比如说，光靠语言勉强维持着生计的少年和支配世界的蓝发天才少女的故事。再比如说，病态地溺爱着妹妹的兄长和无论如何也无法容忍事物的暖昧性的女高中生的故事。企图单凭着智慧与勇气挽救地球的小学生和梦想着能够实现成长和成熟的魔法少女的故事。注重家族爱的杀人狂和被杀人狂的魅力所吸引的毛线帽少女的故事。挽救了一个濒死怪物的伪善者和爱上了他的吸血鬼的故事。讨厌去电影院的男人和他的第十七个妹妹的故事。在与世隔绝的小岛上长大的没有感情的高大男人和浑身都被怨恨和愤怒所占据的小姑娘的故事。认识到挫折滋味的格斗家和无视挫折的格斗家的故事。出乎意料地赢得了人气的流行作家和求职中的侄女的故事。有着奇妙偏向的读书迷和住在书店里的怪人的故事。不管做什么都总是失败的受托人和心甘情愿地被她耍得团团转的刑警的故事。光凭意志生存下去的女忍者和默默地守望着她的头领的故事。”',
                    '',
                    '现在我知道，那个真真假假的“十年之久”到底是什么意思了(笑)',
                    '',
                    '“我从小就很喜欢老师的作品，能和您见面，我真的很高兴。以后还要请您多多指教了。请说出更多有趣的故事给我听吧”',
                    '',
                    '最后的最后，也就是“十年之久”后的现在，“我”竟再一次与那个名为夕暮诱(Yuugure Yuu)的“少女U”相遇了。这回，有备而来的她，成为了我的新责任编辑。不过这里，与其用“竟”，是不是用“果然”比较好？毕竟，U的笔记本上，可是写着“要说再见”呢。'
                    
                ]
                },
                {
                title: '我',
                intro: '早上，中午，晚上好',
                para: [
                    'How are you doing today?',
                    '我是sub/dance，湖北人，97年，北京211在读',
                    '我好像是一个悲观的理想主义者',
                    '喜欢大卫芬奇的电影、制作手工模型、听OASIS领衔的一众英伦摇滚。当然还有代码',
                    '近些年（3年）爱好一直在向游戏，动画片上转移（大概就是变宅了◕ˇ∀ˇ◕）',
                    'reddit重度用户，各账号合计有 30k+ karma， 不大喜欢微博',
                    '大多数时间话比较少',
                    '相信梦想；相信“你也可以改变世界”这种事情；相信“英雄”',
                    '崇拜那些为了某些东西奋斗的人',
                    '享受用冷酷的代码，来“构造美妙的页面，实现精准的操作”这一过程',
                    '愿自己能stay hungry stay foolish，同时不放弃对内心满足的追求',
                ],
                },
            ],
        }
    },
    created() {
        this.classController = this._generateClassController();
        this.backUp = this._generateClassController();
    },
    methods: {
        _generateClassController() {//生成用于控制扩张/收缩样式的控制数组
            let length = this.articleSet.length;
            return new Array(length).fill(false);
        },
        toggle(index) {//切换收缩/扩张显示，手风琴效果
            let x = !this.classController[index];
            this.classController = [...this.backUp];
            this.$set(this.classController, index, x);
        },
        collectInfo(){
            var infoSet = [];
            for (let i = 0; i < this.articleSet.length; i ++) {
                infoSet.push(this.articleSet[i].title);
            }
            eventBus.$emit('catalogInfo', infoSet);
        }
  },
    mounted(){
        this.collectInfo();
    },
}
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    .collapse_title {
        margin: auto;
        width: 600px;
        height: 13rem;
        padding-top: 1rem;
        padding-left: 2rem;
        transition: 0.6s;
        margin-bottom: 1rem;
        position: relative;
        border: 2px solid transparent;
        box-shadow: 2px 2px 5px black;
    }
    .collapse_title:hover {
        transform: translate(0, -5%);
        border: 2px solid white;
        cursor: pointer;
    }
    .collapse_title_selected {
        border: 2px solid white;
    }
    .collapse_text {
        overflow: hidden;
        transition: height 1s;
        padding-left: 2rem;
        width: 600px;
        margin: auto;
        margin-top: 1rem;
        position: relative;
        max-height: 0px;
        animation: 2s ease-in-out closeArticle
    }
    .expand-text {
        max-height: 9999px;
        animation: 2s ease-in-out openArticle
    }
    /* @keyframes openArticle {
        0% {
            max-height: 0px;
        }
        60% {
            max-height: 900px;
        }
        100% {
            max-height: 9999px;
        }
    }
    @keyframes closeArticle {
        0% {
            max-height: 9999px;
        }
        60% {
            max-height: 900px;
        }
        100% {
            max-height: 0px;
        }
    } */
    .single_row {
        padding-bottom: 3rem;
    }
    .single_row:first-of-type .title_text {
        background-color: white;
        color: #f25d8e;
    }
    .single_row:first-of-type .title_text_adding {
        font-style: normal;
    }
    .single_row:last-of-type .title_text {
        background-color: white;
        color: #f25d8e;
    }
    .single_row:last-of-type .title_text_adding {
        font-style: normal;
    }
    .title_text {
        font-weight: bold;
        font-variant: small-caps;
        font-size: 3rem;
        color: #303133;
        font-family: 'ZCOOL XiaoWei', serif;
    }
    .article_text {
        margin: 0;
        font-size: 1.8rem;
        color: #F2F6FC;
        font-family: 'Noto Serif SC', serif;
    }
    .article_text::first-letter {
        font-size: 1.9rem;
    }
    .title_text_adding {
        margin-top: 3.5rem;
        text-align: right;
        padding-right: 1rem;
        font-size: 1.3rem;
        color: #F2F6FC;
        font-style: italic;
    }
    .mainTitle {
        margin-top: 1rem;
        font-size: 4rem;
        text-align: center;
        color: white;
    }
    .articleImg {
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-sizing: border-box;
        border: 10px solid white;
        border-bottom: 40px solid white;
        transform: rotate(3deg);
        box-shadow: 4px 4px 8px black;
        width: 35%;
        object-position: center;
        object-fit: cover;
    }
    .imgText {
        color: #606266;
        position: absolute;
        bottom: 2rem;
        left:50%;
        transform: rotate(3deg);
    }
    @media only screen and (max-width: 600px) {
        .single_row:first-of-type .title_text {
        background-color: white;
        color: #f25d8e;
        }
        .single_row:first-of-type .title_text_adding {
        font-style: normal;
        }
        .single_row:last-of-type .title_text {
        background-color: white;
        color: #f25d8e;
        }
        .single_row:last-of-type .title_text_adding {
        font-style: normal;
        }
        .collapse_title {
        margin: auto;
        width: 80vw;
        height: 10rem;
        padding-top: 1rem;
        padding-left: 1rem;
        transition: 0.6s;
        margin-bottom: 0rem;
        position: relative;
        border: 2px solid transparent;
        box-shadow: 2px 2px 5px black;
        }
        .single_row {
        padding-bottom: 1rem;
        }
        .collapse_text {
        overflow: hidden;
        transition: max-height 0.6s ;
        padding-left: 1rem;
        width: 80vw;
        margin: auto;
        margin-top: 1rem;
        position: relative;
        }
        .single_row:last-child {
        padding-bottom: 4rem;
        }
        .articleImg {
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-sizing: border-box;
        border: 4px solid white;
        border-bottom: 10px solid white;
        transform: rotate(3deg);
        box-shadow: 4px 4px 8px black;
        width: 35%;
        object-position: center;
        object-fit: cover;
        }
        .imgText {
        display: none;
        }
        .title_text {
        font-size: 1.8rem;
        }
        .title_text_adding {
        margin-top: 3.5rem;
        text-align: right;
        padding-right: 1rem;
        font-size: 1.1rem;
        color: #F2F6FC;
        font-style: italic;
        }
        .article_text {
        font-size: 1.5rem;
        }
        .article_text::first-letter {
        font-size: 1.5rem;
        }
        .collapse_title:hover {
        border: 2px solid white;
        }
  }
</style>
