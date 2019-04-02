<template lang="html">
  <div class="mainHolder">
    <link async href="https://fonts.googleapis.com/css?family=Noto+Serif+SC|ZCOOL+XiaoWei" rel="stylesheet">
    <p class="mainTitle">或远或近的记录</p>
    <div class="single_row" v-for='(item, index) in articleSet' :id=" 'article' + index" >
      <div class="collapse_title" @click='showArticle(index, $event)'>
        <span class="title_text">{{ item.title }}</span>
        <p class="title_text_adding">{{ item.intro }}</p>
      </div>
      <div class="collapse_text" :style="{maxHeight: maxHeight[index] + 'px'}">
        <p
          class="article_text"
          v-for='(paragraph, index) in item.para'
          :v-key='index'
          > &nbsp &nbsp {{ paragraph }}
        </p>
        <div style="text-align: center;" v-show='!(index - 5)'>
          <img class="articleImg" src="https://konfan.oss-cn-beijing.aliyuncs.com/image/article/1.jpg" alt="">
        </div>
        <p class="imgText" v-show='!(index - 5)'>摄于2016-秋</p>
      </div>
    </div>

  </div>
</template>

<script>
import eventBus from '@/eventbus.js'
export default {
  data(){
    return {
      maxHeight: [0, 0, 0, 0, 0, 0],
      articleSet: [
        {
          title: '那一日的梦',
          intro: '轻音少女动画中的瞬间-18/11.26/午夜',
          para: [
            '在轻音部第一次合宿的那个海边的夜晚，唯晃晃悠悠地将放音机搬到了澪的面前',
            '一瞬间，早已准备好的烟花在唯的背后划向天空。唯夸张地滑动着拨片，开怀地跳跃着',
            '澪的眼前被点亮了。是被绚丽的烟火，或许也是被眼前的唯',
            '唯像摇滚巨星一样，像站在最灿烂的舞台上一样，忘我地表演',
            '向来羞涩的澪已经忘了自己的表情，痴痴地望着唯',
            '还可以这样呀!',
            '原来就算弹着不成调的曲子，就算舞台只是沙滩，也可以演奏地如此盛大，开心',
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
          title: '一些小事',
          intro: '让我感到开心的事情-18/12.2/午夜',
          para: [
            '冬天的周末，一起床发现窗外下雪了',
            '周五最后一节课的大扫除',
            '新年去超市买完年货坐在返程的公交车上',
            '在圣诞节看到烟火',
            '看到朋友，控制不住的想笑，想讲很俗的段子',
            '在阶梯教室的课堂上看到她，给她发消息说今天她也很好看',
            '跟别人谈梦想，别人也在认真地听',
            '今晚可以熬夜',
          ],
        },
        {
          title: '故事的起因与未完待续',
          intro: '关于这个网站-18/10.01/夜',
          para: [
            '第五还是第六遍看轻音了',
            '在联想前端开发实习了两个月，想着除了公司的东西，自己也该做点什么',
            '想到曾经做的一个轻音的网站，点开看来，确实各方面都有点幼稚',
            '那就推翻重做一个吧！',
            '就这样，这个网站的制作开始了',
            '前端框架还是用了Vue.js，结合了些许Element.ui的组件.国人（华裔）在开源社区的力量真是让人振奋',
            '后端还是无奈的苦手，最近在读《JavaScript高级程序设计》，也正是为了把JS学精一点，好发展后端（Node.js）',
            '',
            '我很喜欢轻音少女',
            '我有很多想法，想用自己也许幼稚的实现方式，融入这个网站',
            '我很开心，能用自己的双手创造些什么，尤其是为自己喜欢的东西去创造',
            '',
            '这就是故事的起因',
            '剩下的就期待未完待续吧',
          ],
        },
        {
          title: '一岁除',
          intro: '2018的离去-19/1.6/夜',
          para: [
            '“似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢愉和不幸。”',
            '在2018的末尾注视这一年，感觉自己越来越迷糊了。',
            '',
            '‘不甘于成为被豢养的家畜，于是有些人翻山越岭来到了高墙之外。他们想看看外面的世界’',
            '但是那一天--',
            '在中关村科技中心，无数和我年龄相仿的人从四面八方涌来，然后再交汇到百度，新浪微博等中国一线公司，我感到一种手足无措的惊讶：',
            '原来这个世界上有这么多跟你差不多年纪，却比你更加努力，更加聪明，更加有价值的人',
            '我从小以来的优越感不见了，我感觉到了悔恨',
            '以前的我也知道世界很大，强人很多，但当这一事实用逼真的方式将我笼罩在其中时，我才理解到这一点',
            '‘你很弱，你自幼以来的成功，优越，满足感毫无意义，你的家乡只是一个池塘，你只是池塘里的一条小鱼’',
            '那一瞬间像钉子，钉在我心里',
            '也就是在那时，我不再想呆在温柔乡了。我想去外面看看',
            '我想知道，自己的‘器’',
            '以上，是我2018最想记录的一件事',
            '其他的事，如鱼饮水就好',
            '',
            '跨年夜时，我窝在寝室里，一边擦鼻涕（感冒了）一边看红白歌会。虽然独自一人，但我却不知从何处感到了升腾的幸福感',
            '地球只是公转一周，却足够让人世手舞足蹈，这就是人类伟大的浪漫吧',
            'This is the stand-alone-complex',
            '所以，新年快乐',
          ],
        },
        {
          title: '爷爷奶奶',
          intro: '我离开家乡之后-19/2.23/夜',
          para: [
            '爷爷今年84，奶奶72。',
            '我从他们家走的时候，奶奶没有向往常一样躲在厕所里。她扶着门，一遍又一遍叮嘱我注意安全，奶奶在慈祥地笑。',
            '爷爷也没有向往常一样笑着说“你要好点”，而是有些严肃在奶奶背后望着我，我笨拙地装作没看到爷爷哭了。',
            '我即将参加工作了，在北京。他们也知道，这次离别，以后见面越来越难了。',
            '',
            '奶奶为我做了18年的饭。',
            '爷爷很喜欢我和我的两个姐姐，每次回家都能感到他的牵挂与喜悦。我无法形容准确，但是很浓烈。',
            '也许他们不懂我，也不了解我的苦闷，但是和他们呆在一起总是很安心。',
            '这是18年默默朝夕相处的默契吧。',
            '',
            '下次再回家，应该是2020年的除夕了吧。',
            '下次再看到爷爷奶奶，我会说“我过的很好，我回家了”',
          ],
        },
        {
          title: '我',
          intro: '自我肖像-18/12.1/夜',
          para: [
            'Hi, how are you doing today?',
            '我是sub/dance，湖北人，97年，北京211在读',
            '我是一个悲观的理想主义者',
            '喜欢大卫芬奇与库布里克的电影，还有OASIS领衔的一众英伦摇滚的乐队。',
            '不过近些年（3年）爱好一直在向游戏，动画片，当然还有代码上转移。（大概就是变宅了◕ˇ∀ˇ◕）',
            '喜欢逛reddit，已经有 7k+ karma了',
            '大多数时间话比较少',
            '虽然难以启齿，但我相信梦想;相信“你也可以改变世界”这种事情;相信“英雄”',
            '崇拜那些为了理想奋斗的人',
            '我享受用冷酷，愚笨的代码，来“搭建出舒服的页面，实现精准的操作”，这一过程。十分享受',
            '愿自己能保持谦虚，保持勤奋，不放弃对幸福的追求',
          ],
        },
      ],
    }
  },
  methods: {
    getDOMArray(className){
      var temp = document.getElementsByClassName(className);
      return Array.prototype.slice.call(temp);
    },

    showArticle(index, $event){
      eventBus.$emit('changeList', true);
      let nowText = document.getElementsByClassName('collapse_text')[index];
      let nowTitle = this.getDOMArray('collapse_title');
      if(!this.maxHeight[index]){
        this.maxHeight.forEach(
          (item, forEachIndex, array) => {
            this.$set(array, forEachIndex, 0);
          }
        )//手风琴效果，全部卡片高度缩小
        nowTitle.forEach((item) => {item.style.boxShadow = '2px 2px 5px black';})
        this.$set(this.maxHeight, index, nowText.scrollHeight);
        nowTitle[index].style.boxShadow = '0px 0px 0px black';
      }
      else{
        this.$set(this.maxHeight, index, 0);
        nowTitle[index].style.boxShadow = '2px 2px 5px black';
      }
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
    eventBus.$on('openArticle', reg => {
      this.showArticle(reg);
    })
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
    /* padding-left: 5rem;
    padding-right: 5rem; */
    transform: translate(0, -5%);
    border: 2px solid white;
    cursor: url(../assets/element/cursor-click.png) 14 0,pointer;
  }
  .collapse_text {
    overflow: hidden;
    transition: max-height 0.6s;
    padding-left: 2rem;
    width: 600px;
    margin: auto;
    margin-top: 1rem;
    position: relative;
  }
  .single_row {
    padding-bottom: 3rem;
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
    box-shadow: 4px 4px 2px black;
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
      transform: rotate(-3deg);
      box-shadow: 4px 4px 2px black;
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
