'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import NewsCard from './components/NewsCard';
import styles from './page.module.css';

export default function Home() {
  // 轮播图数据
  const carouselImages = [
    {
      url: '/images/banner1.jpg',
      alt: '深圳大学传播学院',
      title: '深圳大学传播学院',
      description: '培养具有国际视野和创新精神的传媒人才'
    },
    {
      url: '/images/banner2.jpg',
      alt: '学术研究',
      title: '学术研究',
      description: '推动传播学科发展，服务社会文化建设'
    },
    {
      url: '/images/banner3.jpg',
      alt: '创新实践',
      title: '创新实践',
      description: '理论与实践相结合，培养全方位传媒人才'
    }
  ];

  // 新闻数据
  const newsData = [
    {
      title: '用戏剧激活红色记忆：《亲爱的红军》剧作创新研讨会成功举办',
      date: '2025-03-03',
      summary: '2025年3月1日下午，《亲爱的红军》剧作创新研讨会在四川成都顺利举行。',
      imageUrl: '/images/news1.jpg',
      link: '/news/1'
    },
    {
      title: '行走的思政课——深圳大学香港学院主题班会、生涯导师学习交流会和思政观影',
      date: '2025-02-28',
      summary: '2月27日下午，深圳大学香港学院港籍在港学生在深圳大学参加了一次别开生面的"行走的思政课"',
      imageUrl: '/images/news2.jpg',
      link: '/news/2'
    },
    {
      title: '喜报！深圳大学在第 16 届大广赛中载誉而归',
      date: '2024-12-05',
      summary: '深圳大学在广东省赛阶段获省级一等奖31项、二等奖64项、三等奖90项；在全国角逐中，获国家一等奖4项、二等奖8项、三等奖8项、优秀奖34项。深圳大学以其卓越的创意和精湛的能力脱颖而出，也因其出色的竞赛表现荣获"优秀院校"奖项。',
      imageUrl: '/images/news3.jpg',
      link: '/news/3'
    },
    {
      title: '第四届全国马克思主义新闻观青年学者研讨会在深圳大学举办',
      date: '2024-11-21',
      summary: '11月2日，由深圳大学传播学院、中国新闻史学会中国特色新闻学专业委员会联合主办的第四届全国马克思主义新闻观青年学者研讨会在深圳大学顺利举行。',
      imageUrl: '/images/news4.jpg',
      link: '/news/4'
    },
    {
      title: '深大学子赴沙特探访学习 中沙青年交流启新篇',
      date: '2024-11-21',
      summary: '受沙特阿拉伯苏尔坦亲王大学的邀请，深圳大学传播学院11名师生组成的国际传播专业实践团远赴沙特，在利雅得与吉达两座城市开展了为期9天的交流活动，实地了解、实践国际传播工作，感受中沙文化融合。',
      imageUrl: '/images/news5.jpg',
      link: '/news/5'
    },
    {
      title: '2025年深圳大学新闻传播学博士研究生招生工作实施细则',
      date: '2025-01-20',
      summary: '播学院新闻传播学一级博士点2025年硕博连读和"申请-考核"制博士研究生招生工作实施方案公布如下：',
      imageUrl: '/images/news6.jpg',
      link: '/news/6'
    }
  ];

  // 瓶子君152风格的提示框状态
  const [showTips, setShowTips] = useState(false);
  const toggleTips = () => setShowTips(!showTips);

  // 师资力量模块状态
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [currentTeacherIndex, setCurrentTeacherIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('前辈教师');
  const [isAnimating, setIsAnimating] = useState(false);

  // 师资力量数据 - 按类别组织
  const teachersData = {
    '前辈教师': [
      {
        id: 1,
        name: "何道宽",
        title: "教授",
        photo: "/images/hdk.jpg",
        research: "跨文化传播学、西方传播学",
        education: "南京大学",
        experience: "美国新闻出版署特邀访问学者。任中国跨文化交际学会副会长。",
        awards: "主要论著《超越文化》、《论美国文化的显著特征》等，主要译著《裸猿》、《文化树》、《理解媒介》、《麦克卢汉精粹》等多种"
      },
      {
        id: 2,
        name: "辜晓进",
        title: "教授",
        photo: "/images/gxj.jpg",
        research: "新闻实务、大众传媒、国际传播",
        education: "中国人民大学新闻学院法学硕士",
        experience: "深圳大学传播学院特聘教授，新闻学学科带头人，博士生导师。曾任江苏科技报社编委兼采通部主任、深圳特区报社总编助理兼经济部主任、深圳报业集团系列报刊副总编兼深圳日报社总编辑。",
        awards: "美国纽约城市大学访问学者。兼任中国新闻史学会外国新闻传播史研究会副会长，中国科技新闻学会理事。"
      },
      {
        id: 3,
        name: "吴予敏",
        title: "教授",
        photo: "/images/wym.jpg",
        research: "传播理论、中国传播思想史、文化研究、美学研究",
        education: "中国社会科学院研究生院美学专业文学博士",
        experience: "1989年初到深圳大学任教。1990年任大众传播系广告学专业负责人。1990年至1997年任中国文化与传播研究所所长。",
        awards: "多部著作获奖"
      }
    ],
    '教授': [
      {
        id: 4,
        name: "王晓华",
        title: "教授/博士生导师",
        photo: "/images/teachers/B9F40DB9580FC868CC95145E65E_8BF16DFB_1837B.jpg",
        research: "传播效果、广告效果、城市文明创建与评估、舆情监测与分析",
        education: "武汉大学新闻学博士",
        experience: "曾任深圳大学文学院传播学系主任、传播学院副院长、党委书记、院长。连续两届担任教育部新闻传播学类专业教学指导委员会委员。",
        awards: "教育部中日广告人才培养项目专家组成员，中国广告协会学术委员会委员，深圳市广告协会副会长"
      },
      {
        id: 5,
        name: "周裕琼",
        title: "教授/博士生导师",
        photo: "/images/zyq.jpg",
        research: "新媒体传播、数据新闻、计算传播学",
        education: "清华大学新闻与传播学博士",
        experience: "曾任某知名媒体总编辑，发表学术论文30余篇，出版专著3部",
        awards: "国家级教学成果奖，省级优秀教师"
      },
      {
        id: 6,
        name: "李明伟",
        title: "教授/博士生导师",
        photo: "/images/teachers/70535A7CB0F8CBA727C0AB0AE3B_25AFB7BF_2BB85.jpg",
        research: "新媒体与社会变迁、数字媒体素养",
        education: "北京大学新闻与传播学博士",
        experience: "主持国家社科基金项目3项，省部级项目5项",
        awards: "教育部新世纪优秀人才，省级教学名师"
      },
      {
        id: 7,
        name: "常江",
        title: "教授/博士生导师",
        photo: "/images/teachers/3AE4F48DB295CFFF0F71C718DA8_EEB552A8_2B7BC.jpg",
        research: "数字媒体、计算传播学、新闻业创新",
        education: "复旦大学新闻学博士",
        experience: "曾任某知名媒体总编辑，发表学术论文40余篇，出版专著4部",
        awards: "国家级教学成果奖，省级优秀教师"
      },
      {
        id: 8,
        name: "丁未",
        title: "教授/博士生导师",
        photo: "/images/teachers/404BB4A6BC99EE91F5A51CFC196_7C3B70A3_2F0D8.jpg",
        research: "媒介经济学、传媒产业研究",
        education: "中国人民大学新闻学博士",
        experience: "主持国家社科基金重点项目2项，省部级项目6项",
        awards: "教育部优秀青年学者，省级教学名师"
      }
    ],
    '副教授': [
      {
        id: 9,
        name: "马春辉",
        title: "副教授/硕士生导师",
        photo: "/images/teachers/5E74430D0FACB18160DDF100A9D_D0575DC1_9DFA.jpg",
        research: "媒介融合、传播效果研究",
        education: "复旦大学新闻学博士",
        experience: "主持国家社科基金项目2项，省级项目3项",
        awards: "校级优秀教师，优秀科研工作者"
      },
      {
        id: 10,
        name: "王琛",
        title: "副教授",
        photo: "/images/teachers/9A08ADE08AE2C7A0E21C38317F8_85BAFA97_8039.jpg",
        research: "中国传播史、族群与区域文化、公共关系",
        education: "中山大学人类学博士",
        experience: "南京大学文学硕士，中山大学人类学博士",
        awards: "校级教学创新奖"
      },
      {
        id: 11,
        name: "潘晓慧",
        title: "副教授",
        photo: "/images/teachers/29FC52D5DDF8895910B9E4043B3_F4478125_123F9.jpg",
        research: "全球化与媒体、跨文化传播学以及研究方法",
        education: "香港城市大学传播学专业博士",
        experience: "齐齐哈尔师范大学英语学士，哈尔滨工业大学英语语言学硕士，哈尔滨工程大学英语专业副教授，美国加州州立大学FULLERTON分校高级访问学者",
        awards: "校级优秀教师"
      },
      {
        id: 12,
        name: "杨光",
        title: "副教授",
        photo: "/images/yg.jpg",
        research: "新媒体传播、数据新闻、计算传播学",
        education: "清华大学新闻与传播学博士",
        experience: "曾任某知名媒体总编辑，发表学术论文30余篇，出版专著3部",
        awards: "国家级教学成果奖，省级优秀教师"
      }
    ],
    '讲师/助理教授': [
      {
        id: 13,
        name: "黄晓东",
        title: "讲师",
        photo: "/images/teachers/AE4F4A955E51839A20DF186242B_ED680229_534A.jpg",
        research: "数字媒体传播理论、新媒体技术与应用，虚拟现实产业与市场",
        education: "华南师范大学教育技术硕士",
        experience: "1988-1991美国夏威夷大学新闻学院东西方中心高级访问学者，深圳大学国家级传媒实验教学示范中心副主任",
        awards: "校级优秀教师"
      },
      {
        id: 14,
        name: "陈建",
        title: "讲师",
        photo: "/images/teachers/578A13CF76F118E54349264D861_B0737F49_1E7E3.jpg",
        research: "新媒体传播、数据可视化",
        education: "中国传媒大学传播学硕士",
        experience: "曾在国际知名媒体工作，拥有丰富的行业实践经验",
        awards: "校级教学优秀奖"
      },
      {
        id: 15,
        name: "张文文",
        title: "讲师",
        photo: "/images/teachers/17252240A16E8400D32BD873812_E04A41CA_B65D.jpg",
        research: "数字媒体技术、交互设计",
        education: "香港中文大学传播学硕士",
        experience: "主持省级科研项目2项，参与国家级项目3项",
        awards: "校级优秀青年教师"
      },
      {
        id: 16,
        name: "王佳丽",
        title: "讲师",
        photo: "/images/wjl.jpg",
        research: "新媒体传播、数据新闻、计算传播学",
        education: "清华大学新闻与传播学博士",
        experience: "曾任某知名媒体总编辑，发表学术论文30余篇，出版专著3部",
        awards: "国家级教学成果奖，省级优秀教师"
      },
      {
        id: 17,
        name: "陈南平",
        title: "讲师",
        photo: "/images/cnp.jpg",
        research: "新媒体传播、数据新闻、计算传播学",
        education: "清华大学新闻与传播学博士",
        experience: "曾任某知名媒体总编辑，发表学术论文30余篇，出版专著3部",
        awards: "国家级教学成果奖，省级优秀教师"
      }
    ]
  };

  // 获取当前类别的教师
  const currentCategoryTeachers = teachersData[activeCategory] || [];

  // 确保currentTeacherIndex在有效范围内
  useEffect(() => {
    setCurrentTeacherIndex(0);
  }, [activeCategory]);

  // 打开教师详情
  const openTeacherDetail = (teacher) => {
    setSelectedTeacher(teacher);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };

  // 关闭教师详情
  const closeTeacherDetail = () => {
    setSelectedTeacher(null);
    document.body.style.overflow = 'auto'; // 恢复背景滚动
  };

  // 切换到下一位老师
  const showNextTeacher = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTeacherIndex((prevIndex) => (prevIndex + 1) % currentCategoryTeachers.length);
      setIsAnimating(false);
    }, 300);
  };

  // 切换到上一位老师
  const showPrevTeacher = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTeacherIndex((prevIndex) => (prevIndex - 1 + currentCategoryTeachers.length) % currentCategoryTeachers.length);
      setIsAnimating(false);
    }, 300);
  };

  // 获取当前显示的三个教师
  const getDisplayTeachers = () => {
    const total = currentCategoryTeachers.length;
    if (total === 0) return [null, null, null];

    const prev = (currentTeacherIndex - 1 + total) % total;
    const next = (currentTeacherIndex + 1) % total;

    return [
      currentCategoryTeachers[prev],
      currentCategoryTeachers[currentTeacherIndex],
      currentCategoryTeachers[next]
    ];
  };

  const [leftTeacher, centerTeacher, rightTeacher] = getDisplayTeachers();

  return (
    <main className={styles.main}>
      <Navbar />

      <div className={styles.container}>
        {/* 萌娘百科风格的提示框 */}
        <div className={styles.moegirlNotice}>
          <div className={styles.noticeIcon}>ℹ️</div>
          <div className={styles.noticeContent}>
            <strong>深大传播学院欢迎您参与学院建设☆</strong><br />
            欢迎正在浏览本网站的您了解我院情况。深圳大学传播学院致力于培养具有国际视野、创新精神和实践能力的高素质传媒人才。
          </div>
        </div>

        {/* 瓶子君152风格的名言 */}
        <div className={styles.quoteContainer}>
          <div className={styles.quote}>
            <span className={styles.quoteSymbol}>"</span>
            <span className={styles.quoteText}>传播学院nb 传播学院大气 传播学院大～（だぁぁぁい）好（す）き！</span>
            <span className={styles.quoteSymbol}>"</span>
          </div>
        </div>

        <section className={styles.heroSection}>
          <Carousel images={carouselImages} />
        </section>

        <section className={styles.welcomeSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>欢迎来到深圳大学传播学院</h2>
            <div className={styles.titleDecoration}></div>
          </div>
          <p className={styles.welcomeText}>
            深圳大学传播学院成立于2000年，是华南地区最早成立的传播学院之一，也是深圳大学重点建设学院。
            学院秉承"创新、质量、责任"的办学理念，致力于培养具有国际视野、创新精神和实践能力的高素质传媒人才。
          </p>

          {/* 瓶子君152风格的互动提示 */}
          <div className={styles.interactiveTip}>
            <div className={styles.tipIcon} onClick={toggleTips}>💡</div>
            <div className={`${styles.tipContent} ${showTips ? styles.show : ''}`}>
              <div className={styles.tipHeader}>
                <span>小贴士</span>
                <span className={styles.tipClose} onClick={toggleTips}>×</span>
              </div>
              <div className={styles.tipBody}>
                <p>和家人一同浏览深圳大学传播学院网站可能促进家庭和谐，并导致家人之间产生进一步的思想交流。</p>
                <p><strong>请浏览者在公共场所浏览本网站时保持谨慎！</strong></p>
              </div>
            </div>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>23</div>
              <div className={styles.statLabel}>年办学历史</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>5000+</div>
              <div className={styles.statLabel}>培养校友</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>60+</div>
              <div className={styles.statLabel}>专业教师</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>本科专业</div>
            </div>
          </div>
        </section>

        {/* 学院介绍部分 - 带特殊交互效果 */}
        <section className={styles.introductionSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>深大传院官方简介（青春叛逆版）</h2>
            <div className={styles.titleDecoration}></div>
          </div>

          <div className={styles.introContent}>
            <p>
              作为华南地区新闻传播教育的"<span className={styles.hoverAnnotation} data-annotation="小白鼠"><strong>特区试验田</strong></span>"，深圳大学传播学院用37年时间完成了从专科到博士后的魔幻升级——
              <span className={styles.censoredText}>当您看到这段文字时，至少有三位传院学子正在熬毕设、五位在器材室抢设备、十位在争论究竟是做短视频还是写深度报道更头秃</span>。
              <span className={styles.hoverAnnotation} data-annotation="某位经常出没的传院学子提供">（注：以上数据来自课间走廊随机叹气统计）</span>
            </p>

            <p>
              这里见证着中国传播学科发展史的诸多"第一次"：<strong>1985</strong>年首创公共关系专业时，深圳的霓虹灯还没亮过罗湖口岸；<strong>1989</strong>年广告学本科诞生时，深南大道的推土机还在为第一届毕业生开辟道路。如今三个国字号一流专业组成的
              <span className={styles.hoverAnnotation} data-annotation="新闻学、广告学、网络与新媒体"><strong>卷王三叉戟</strong></span>
              ，让每个新生在开学典礼上<span className={styles.censoredText}>忽悠大家</span>既骄傲于<span className={styles.hoverAnnotation} data-annotation="网新A+专业随你怎么说"><strong>金光闪闪的学科排名</strong></span>，又瑟瑟发抖于学长姐口中"
              <span className={styles.hoverAnnotation} data-annotation="实际上是五个"><del>人均三个毕设选题</del></span>
              "的都市传说。
            </p>

            <p>
              我们的教授天团<span className={styles.censoredText}>不是波士海龟我不要</span>堪称传播学界的"复仇者联盟"<span className={styles.censoredText}>期末的时候将操办传院学子的仪式</span>——从翻译麦克卢汉的学术泰斗，到玩转数据可视化的新锐青椒，他们既能用三句话让你顿悟传播学真谛<span className={styles.censoredText}>蹭热点</span>，也能在教会你剪出百万播放的爆款。<span className={styles.censoredText}>可惜建磊哥不开剪辑课了</span>只是当你在凌晨三点的传院二三楼开会时，可能会突然顿悟：原来"开放式、融通性、实战化"的终极奥义是
              <span className={styles.censoredText}>学会喝咖啡</span>。
            </p>

            <p>
              在这里，每个期末都是一场大型奇观<span className={styles.censoredText}>不是早睡睡不好，而是凌晨赶DDL更有性价比</span>：新闻系同学在深度报道和出镜采访之间反复
              <span className={styles.strikethrough} data-replacement="熬夜加班">仰卧起坐</span>
              ，广告人对着<span className={styles.hoverAnnotation} data-annotation="无理的要求"><strong>甲方需求</strong></span>
              与<span className={styles.hoverAnnotation} data-annotation="能不能做到全看AI给不给力"><strong>艺术理想</strong></span>
              左右横跳，网新专业的<span className={styles.hoverAnnotation} data-annotation="没有一行代码是自己写的"><strong>码字民工</strong></span>
              们则在Python代码和H5界面里持续掉发。<span className={styles.censoredText}>听又听不懂，学又学不会</span>
              <span className={styles.hoverAnnotation} data-annotation="疑似拼好饭中毒的幻想"><strong>但神奇的是，当你的毕设作品登上深圳国际创客周，当课堂作业变成朋友圈刷屏的10w+，</strong></span>
              那些在荔园星空下爆肝的夜晚，终究会化作简历上闪闪发光的"全媒体实战能力"<span className={styles.censoredText}>一看月薪3000</span>。
            </p>

            <p>
              从荔山到粤海，从铅字印刷到元宇宙实验室<span className={styles.censoredText}>从来没进去过</span>，这座被改革开放基因编码的传播学院始终在践行最硬核的
              <span className={styles.hoverAnnotation} data-annotation="疑似拼好饭中毒的幻想"><strong>浪漫主义</strong></span>
              ——用新闻人的笔尖丈量湾区脉动，用广告人的创意解构城市符号，用新媒体人的代码编织未来图景<span className={styles.censoredText}>好高级，但臣妾做不到呀</span>。如果非要问在这里读书是什么体验？大概就是在国家一流学校和还没评上双一流之间，痛并快乐着书写属于深大传院学子的故事。
            </p>

            <p>
              （友情提示：以上吐槽内容自动生成于某位不愿透露姓名的大三学生
              <span className={styles.censoredText}>陈陶</span>
              电脑崩溃瞬间，实际情况以教务系统通知为准。欢迎报考，来和我们一起
              <span className={styles.strikethrough} data-replacement="头秃">甜蜜地</span>
              烦恼吧！）
            </p>
          </div>

          <div className={styles.moreInfoContainer}>
            <a href="/about" className={`cute-button ${styles.moreInfoButton}`}>了解更多学院信息</a>
          </div>
        </section>

        <section className={styles.newsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>学院新闻</h2>
            <div className={styles.titleDecoration}></div>
          </div>

          {/* 瓶子君152风格的名言 */}
          <div className={styles.quoteContainer}>
            <div className={styles.quote}>
              <span className={styles.quoteSymbol}>"</span>
              <span className={styles.quoteText}>很久以后，当我回忆我的大学生涯，你要问我觉得成功吗，那其实没有很成功，但你问过程精彩吗，那我觉得真的是相当精彩啊！</span>
              <span className={styles.quoteSymbol}>"</span>
            </div>
            <div className={styles.quoteAuthor}>——某传院毕业生</div>
          </div>

          <div className={styles.newsGrid}>
            {newsData.map((news, index) => (
              <div key={index} className={styles.newsItem}>
                <NewsCard
                  title={news.title}
                  date={news.date}
                  summary={news.summary}
                  imageUrl={news.imageUrl}
                  link={news.link}
                />
              </div>
            ))}
          </div>
          <div className={styles.moreNewsContainer}>
            <a href="/news" className={`cute-button ${styles.moreNewsButton}`}>查看更多新闻</a>
          </div>
        </section>

        <section className={styles.programsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>专业设置</h2>
            <div className={styles.titleDecoration}></div>
          </div>
          <div className={styles.programsGrid}>
            <div className={`${styles.programCard} cute-border cute-shadow`}>
              <div className={styles.programImageContainer}>
                <img src="/images/carousel1.jpg" alt="新闻学" className={styles.programImage} />
              </div>
              <h3>新闻学</h3>
              <p>培养具有扎实的新闻理论功底和实践能力的全媒体新闻人才。</p>
            </div>
            <div className={`${styles.programCard} cute-border cute-shadow`}>
              <div className={styles.programImageContainer}>
                <img src="/images/carousel3.jpg" alt="广告学" className={styles.programImage} />
              </div>
              <h3>广告学</h3>
              <p>培养具有创意思维和策划能力的广告与营销传播人才。</p>
            </div>
            <div className={`${styles.programCard} cute-border cute-shadow`}>
              <div className={styles.programImageContainer}>
                <img src="/images/news2.jpg" alt="网络与新媒体" className={styles.programImage} />
              </div>
              <h3>网络与新媒体</h3>
              <p>培养熟悉数字媒体技术与内容创作的新媒体运营人才。</p>
            </div>
          </div>
        </section>

        {/* 师资力量部分 */}
        <section className={styles.facultySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>师资力量</h2>
            <div className={styles.titleDecoration}></div>
          </div>

          {/* 瓶子君152风格的名言 */}
          <div className={styles.quoteContainer}>
            <div className={styles.quote}>
              <span className={styles.quoteSymbol}>"</span>
              <span className={styles.quoteText}>我们的教授天团堪称传播学界的"复仇者联盟"，既能让你顿悟传播学真谛，也能教你运营百万账号！</span>
              <span className={styles.quoteSymbol}>"</span>
            </div>
          </div>

          <div className={styles.facultyContainer}>
            {/* 左侧导航栏 */}
            <div className={styles.facultyNav}>
              <ul>
                {Object.keys(teachersData).map((category) => (
                  <li
                    key={category}
                    className={activeCategory === category ? styles.active : ''}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* 教师展示区 */}
            <div className={styles.teacherShowcase}>
              {/* 左侧教师 */}
              {leftTeacher && (
                <div className={`${styles.teacherCardSide} ${styles.teacherCardLeft} ${isAnimating ? styles.animating : ''}`}>
                  <div className={styles.teacherPhoto}>
                    <img src={leftTeacher.photo} alt={leftTeacher.name} />
                  </div>
                </div>
              )}

              {/* 中间教师 */}
              {centerTeacher && (
                <div
                  className={`${styles.teacherCardCenter} cute-border cute-shadow ${isAnimating ? styles.animating : ''}`}
                  onClick={() => openTeacherDetail(centerTeacher)}
                >
                  <div className={styles.teacherPhoto}>
                    <img src={centerTeacher.photo} alt={centerTeacher.name} />
                  </div>
                  <div className={styles.teacherInfo}>
                    <h3>{centerTeacher.name}</h3>
                    <p>{centerTeacher.title}</p>
                    <p className={styles.teacherResearch}><strong>研究方向：</strong>{centerTeacher.research}</p>
                  </div>
                </div>
              )}

              {/* 右侧教师 */}
              {rightTeacher && (
                <div className={`${styles.teacherCardSide} ${styles.teacherCardRight} ${isAnimating ? styles.animating : ''}`}>
                  <div className={styles.teacherPhoto}>
                    <img src={rightTeacher.photo} alt={rightTeacher.name} />
                  </div>
                </div>
              )}
            </div>

            {/* 导航按钮 */}
            <div className={styles.teacherNavButtons}>
              <button className={styles.teacherNavButton} onClick={showPrevTeacher}>
                <span>←</span>
              </button>
              <button className={styles.teacherNavButton} onClick={showNextTeacher}>
                <span>→</span>
              </button>
            </div>

            {/* 分页指示器 */}
            <div className={styles.teacherPagination}>
              {currentCategoryTeachers.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.paginationDot} ${index === currentTeacherIndex ? styles.active : ''}`}
                  onClick={() => setCurrentTeacherIndex(index)}
                ></span>
              ))}
            </div>
          </div>

          <div className={styles.moreFacultyContainer}>
            <a href="/faculty" className={`cute-button ${styles.moreFacultyButton}`}>查看更多师资力量</a>
          </div>

          {/* 教师详情弹窗 */}
          {selectedTeacher && (
            <div className={styles.teacherDetailOverlay}>
              <div className={styles.teacherDetailContainer}>
                <button className={styles.closeButton} onClick={closeTeacherDetail}>×</button>
                <div className={styles.teacherDetailContent}>
                  <div className={styles.teacherDetailHeader}>
                    <div className={styles.teacherDetailPhoto}>
                      <img src={selectedTeacher.photo} alt={selectedTeacher.name} />
                    </div>
                    <div className={styles.teacherDetailInfo}>
                      <h2>{selectedTeacher.name}</h2>
                      <p className={styles.teacherDetailTitle}>{selectedTeacher.title}</p>
                      <p className={styles.teacherDetailResearch}><strong>研究方向：</strong>{selectedTeacher.research}</p>
                    </div>
                  </div>

                  <div className={styles.teacherDetailBody}>
                    <div className={styles.teacherDetailSection}>
                      <h3>教育背景</h3>
                      <p>{selectedTeacher.education}</p>
                    </div>

                    <div className={styles.teacherDetailSection}>
                      <h3>工作经历</h3>
                      <p>{selectedTeacher.experience}</p>
                    </div>

                    <div className={styles.teacherDetailSection}>
                      <h3>获奖荣誉</h3>
                      <p>{selectedTeacher.awards}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 学术成果部分 */}
        <section className={styles.researchSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>学术成果</h2>
            <div className={styles.titleDecoration}></div>
          </div>

          <div className={styles.researchGrid}>
            <div className={`${styles.researchCard} cute-border cute-shadow`}>
              <div className={styles.researchIcon}>📚</div>
              <h3>学术著作</h3>
              <p>近五年出版专著、教材30余部，其中多部入选国家级规划教材</p>
              <div className={styles.researchNumber}>30+</div>
            </div>

            <div className={`${styles.researchCard} cute-border cute-shadow`}>
              <div className={styles.researchIcon}>📝</div>
              <h3>学术论文</h3>
              <p>近五年在CSSCI、SSCI期刊发表高水平学术论文200余篇</p>
              <div className={styles.researchNumber}>200+</div>
            </div>

            <div className={`${styles.researchCard} cute-border cute-shadow`}>
              <div className={styles.researchIcon}>🏆</div>
              <h3>科研项目</h3>
              <p>主持国家级、省部级科研项目50余项，总经费超过1000万元</p>
              <div className={styles.researchNumber}>50+</div>
            </div>

            <div className={`${styles.researchCard} cute-border cute-shadow`}>
              <div className={styles.researchIcon}>🎖️</div>
              <h3>获奖成果</h3>
              <p>获得省部级以上科研奖励20余项，其中国家级奖励5项</p>
              <div className={styles.researchNumber}>20+</div>
            </div>
          </div>

          <div className={styles.moreResearchContainer}>
            <a href="/research" className={`cute-button ${styles.moreResearchButton}`}>查看更多学术成果</a>
          </div>
        </section>

        {/* 学生作品部分 */}
        <section className={styles.worksSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>学生作品</h2>
            <div className={styles.titleDecoration}></div>
          </div>

          <div className={styles.worksSlider}>
            <div className={styles.workItem}>
              <img src="/images/news1.jpg" alt="学生作品1" />
              <div className={styles.workInfo}>
                <h3>《城市记忆》</h3>
                <p>2023届毕业生作品，获第十届全国大学生纪录片大赛金奖</p>
              </div>
            </div>

            <div className={styles.workItem}>
              <img src="/images/news2.jpg" alt="学生作品2" />
              <div className={styles.workInfo}>
                <h3>《深圳故事》</h3>
                <p>2022届毕业生作品，入选中国国际新媒体短片节</p>
              </div>
            </div>

            <div className={styles.workItem}>
              <img src="/images/news3.jpg" alt="学生作品3" />
              <div className={styles.workInfo}>
                <h3>《青春的力量》</h3>
                <p>2023届毕业生作品，获第16届大广赛全国一等奖</p>
              </div>
            </div>
          </div>

          <div className={styles.moreWorksContainer}>
            <a href="/works" className={`cute-button ${styles.moreWorksButton}`}>查看更多作品</a>
          </div>
        </section>

        {/* 巡礼记录部分 */}
        <section className={styles.visitSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>巡礼记录</h2>
            <div className={styles.titleDecoration}></div>
          </div>
          <div className={styles.visitRecord}>
            <ul className={styles.visitList}>
              <li>此网站在创立的第一天即被学院领导巡礼。</li>
              <li>2023/10/15 - 校长访问</li>
              <li>2023/11/20 - 教育部专家组访问</li>
              <li>2023/12/25 - 行业专家访问</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 