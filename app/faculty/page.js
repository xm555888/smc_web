'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './faculty.module.css';

export default function Faculty() {
  const [activeCategory, setActiveCategory] = useState('前辈教师');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const teachersPerPage = 10;

  // 师资力量数据 - 按类别组织
  const teachersData = {
    '前辈教师': [
      {
        id: 1,
        name: "何道宽",
        title: "教授",
        photo: "/__local/5/C9/A0/86C7E4D8D32131EB05D1ED81CBF_DD7CA5FE_16688.jpg",
        research: "跨文化传播学、西方传播学",
        education: "南京大学",
        experience: "美国新闻出版署特邀访问学者，任中国跨文化交际学会副会长",
        awards: "",
        comment: <span className={styles.censoredText}>"很牛逼就是了"</span>
      },
      {
        id: 2,
        name: "辜晓进",
        title: "教授、博士生导师",
        photo: "/__local/6/52/43/112F82386B11BF5542B52253FB9_6E9D6EB1_1222B.jpg",
        research: "新闻实务、大众传媒、国际传播",
        education: "中国人民大学新闻学院法学硕士",
        experience: "曾任江苏科技报社编委兼采通部主任（1984 - 1988）、深圳特区报社总编助理兼经济部主任（1991 - 2002）、深圳报业集团系列报刊副总编兼深圳日报社总编辑（2002 - 2010），美国纽约城市大学访问学者（2001 - 2002），兼任中国新闻史学会外国新闻传播史研究会副会长，中国科技新闻学会理事",
        awards: "",
      },
      {
        id: 3,
        name: "田少煦",
        title: "教授",
        photo: "/__local/2/D1/7A/81968BF56325261E3553CAFA7E6_0A5A8BD7_E0DD.jpg",
        research: "数字媒体设计理论与实践、中国图形艺术与视觉传播、非物质文化遗产及其数字化、创意设计与文化产业",
        education: "四川美术学院装饰设计系文学硕士",
        experience: "1995入职深圳大学，2004年晋升教授，现为设计学二级教授，深圳大学学术委员会委员，数字媒体与视觉文化研究所所长",
        awards: "首批“广东特支计划”教学名师，第三批国家“高层次人才特殊支持计划”领军人才"
      },
      {
        id: 4,
        name: "吴予敏",
        title: "教授",
        photo: "/__local/5/DA/7A/EDD8093A8C89239129D3F14FE71_2E7C1109_4200.jpg",
        research: "传播理论、中国传播思想史、文化研究、美学研究",
        education: "中国社会科学院研究生院美学专业文学博士",
        experience: "1989年初到深圳大学任教。1990年任大众传播系广告学专业负责人。1990年至1997年任中国文化与传播研究所所长。",
        awards: "多部著作获奖"
      },
      {
        id: 5,
        name: "林晓光",
        title: "教授",
        photo: "/__local/1/D5/C6/3D6B117D87CA8F580FBDE7A067F_945BFC0B_21C5.jpg",
        research: "新闻传播学",
        education: "宁夏大学中文系学士，日本中央大学文学硕士、社会学博士",
        experience: "曾在家乡湖南从事5年新闻记者工作，1988年进入日本中央大学学习，1994年至2005年受聘日本金泽学院大学，2005年归国，曾任职深圳大学传播学院传播系教授，上海同济大学亚太研究中心兼职教授",
        awards: ""
      },
      {
        id: 6,
        name: "李蕾蕾",
        title: "教授",
        photo: "/__local/D/F5/AF/577BB71987F177153BA63C15886_184FBDAE_75DB.jpg",
        research: "工业遗产、视觉文化、媒介科技和城乡发展的交叉领域",
        education: "中山大学地理系理学学士，北京大学城市与环境学系理学硕士、理学博士",
        experience: "1993年至今先后在深圳大学中国文化与传播系、文学院、传播学院从事教学科研工作，2004年开始担任传播学专业硕士生导师",
        awards: ""
      },
      {
        id: 7,
        name: "李新立",
        title: "副教授",
        photo: "/__local/0/F8/E1/20F1620830BAEFEF2B924D387AF_7FF585F6_67C33.jpg",
        research: "广告学理论、管理经济学、市场营销学、品牌研究",
        education: "南开大学经济学院经济学硕士",
        experience: "兼任旅游学研究所所长",
        awards: ""
      },
      {
        id: 8,
        name: "胡莹",
        title: "副教授/高级设计师，硕士生导师",
        photo: "/__local/D/8F/50/7CD1DC6948A76B43C07B16C8C5B_1D589E6A_A7E2.jpg",
        research: "广告学",
        education: "",
        experience: "深圳大学传媒国家级实验教学示范中心副主任，中国高等教育学会广告教育专业委员会副秘书长、中国广告协会学术委员会委员，历任全国大学生广告艺术大赛第9 - 11届全国组委、广东省1 - 11届组委、副主任兼秘书长，历任金犊奖、全国大广赛、IAI国际广告奖等赛事评委，历任深圳大学传播学院副院长（201012 - 201904）、深圳大学传媒国家级实验教学示范中心常务副主任（200611 - ）",
        awards: ""
      },
      {
        id: 9,
        name: "潘晓慧",
        title: "副教授",
        photo: "/__local/D/CD/BF/BC0143DCE3CEA63A032A3754375_AF3BDB17_12816.jpg",
        research: "全球化与媒体、跨文化传播学以及研究方法",
        education: "齐齐哈尔师范大学英语学士，哈尔滨工业大学英语语言学硕士，哈尔滨工程大学英语专业副教授，香港城市大学传播学专业博士",
        experience: "美国加州州立大学FULLERTON分校高级访问学者，2005年转入深圳大学文学院工作",
        awards: ""
      },
      {
        id: 10,
        name: "王晓华",
        title: "教授、博士生导师",
        photo: "/__local/8/AB/F5/41E3894577BD619D9E25777DCB7_79943350_143CC.jpg",
        research: "传播效果、广告效果、城市文明创建与评估、舆情监测与分析",
        education: "南开大学社会学系法学学士，北京大学社会学系法学硕士，武汉大学新闻与传播学院新闻学博士",
        experience: "曾任深圳大学文学院传播学系主任、传播学院副院长、党委书记、院长，连续两届担任教育部新闻传播学类专业教学指导委员会委员，教育部中日广告人才培养项目专家组成员，中国广告协会学术委员会委员，深圳市广告协会副会长",
        awards: ""
      },
      {
        id: 11,
        name: "王琛",
        title: "副教授",
        photo: "/__local/9/1F/F5/BCA9D17C7F1B02D8ED9353277DF_C3E77B0D_580A.jpg",
        research: "中国传播史、族群与区域文化、公共关系",
        education: "南京大学文学硕士，中山大学人类学博士",
        experience: "",
        awards: "",
        comment: <span className={styles.censoredText}>"大一上过她的社会学，讲课挺无聊，舍友选过她的聚徒讲学说人很好，"</span>
      },
      {
        id: 12,
        name: "黄晓东",
        title: "讲师，硕士导师",
        photo: "/__local/3/3B/35/F381C98F2825AED171B589853A4_317290D9_C80E.jpg",
        research: "数字媒体传播理论、新媒体技术与应用，虚拟现实产业与市场",
        education: "江西师大物理系学士，华南师范大学教育技术硕士",
        experience: "1982 - 1987年，江西师范大学教育传播系任课教师，1988 - 1991年美国夏威夷大学新闻学院高级访问学者，1992至今，深圳大学工作，曾任中日影视中心高级编导、主任，深圳大学传播学院广播电视专业教师",
        awards: ""
      },
      {
        id: 13,
        name: "丁未",
        title: "教授",
        photo: "/__local/3/0B/91/878C1007541F77877D37A065BC3_3D14AA61_A42E.jpg",
        research: "社会文化与媒介文化",
        education: "1985-1989 年杭州大学 (现浙江大学) 中文系汉语言文学专业，获文学学士学位。1995-1998 年浙江大学新闻与传播学院，获现当代文学（新闻学方向）硕士学位。1999-2002 年就读于复旦大学新闻学院，获传播学博士学位。",
        experience: "1989-1999 年就职于原广电部直属院校――浙江广播电视高等专科学校（现浙江传媒学院），任广播电视文艺系教师，主讲 “广播电视概论”、“电视栏目学”、“电视艺术概论” 等；2002 年之后在深圳大学传播学院任教。",
        awards: ""
      },
      {
        id: 14,
        name: "刘劲松",
        title: "教授",
        photo: "/__local/8/76/04/6C7A422E75C3494B6DB50B60CEA_4BAF1073_5D89.jpg",
        research: "新闻与媒介",
        education: "1985 年考入中国人民大学新闻系，先后获法学学士和文学硕士学位；2011 年于暨南大学获文学博士学位。",
        experience: "从事新闻工作 16 年，曾任黑龙江《生活报》副总编， 2004 年评为高级编辑。2005 年 6 月调入深圳大学，曾任传播系主任、新闻系主任。",
        awards: "2015 年，专著《嬗变与重构：转型期都市类报纸发展路径研究》获深圳市第七届哲学社会科学优秀成果奖著作类二等奖"
      },
      {
        id: 15,
        name: "马春辉",
        title: "副教授",
        photo: "/__local/A/75/E2/101D96C91AB17EEBFB3BC655A58_F6EDC375_8126.jpg",
        research: "传媒经济学",
        education: "1992 年 ---1995 年在南开大学经济研究所读经济学硕士并获研究生毕业证书和硕士学位证书。1998 年 9 月考入南开大学经济研究所攻读在职经济学博士学位。2003 年 12 月获博士毕业证书和经济学博士学位证书。",
        experience: "1984 年 ---1992 年在永兴县人民政府从事政府统计工作。1995 年 7 月 ---- 在综合开发研究院 (中国。深圳) 从事研究工作，职称为副研究员。2005 年 6 月进入深圳大学传播学院，从事经济学和统计学的教学研究工作。",
        awards: ""
      }
    ],
    '教授': [
      {
        id: 16,
        name: "巢乃鹏",
        title: "教授",
        photo: "/__local/2/A1/A0/4488C8534D4FE675D5A0300E556_851B6C6C_16AF6.jpg",
        researchAreas: "网络传播与新媒体研究、计算传播研究",
        education: "博士，2002,4-2019,3 任教于南京大学新闻传播学院，入选南京大学青年骨干教师（2008），南京大学优秀中青年学科带头人 (2011)。2019 年 4 月调至深圳大学传播学院任教",
        experience: "现为深圳大学特聘教授、博士生导师、深圳大学传播学院院长、国家社科基金重大项目 “大数据时代计算传播学的理论、方法与应用研究” 首席专家，入选 “国家特支计划” 哲学社会科学领军人才；担任中国新闻史学会智能与计算传播专业委员会（国家二级...",
        awards: "",
        comment: <span className={styles.censoredText}>"院长伟大无需多言！！！上课完全不点名《计算传播学》《新媒体广告》一次企业参观，一次读书报告，两次微信群讨论作业(tip: 谈谈你对追逐热点的看法)，期末闭卷考，《新业态》一次读书报告，期末论文，给分还行。
          冷知识：网新部分老师是他的学生"</span>
      },
      {
        id: 17,
        name: "常江",
        title: "教授",
        photo: "/__local/C/D0/B1/79B89D6C5DB34EEE82063FA2286_1A013FFC_9FC6.jpg",
        researchAreas: "数字新闻学研究、数字媒体文化研究、视听传播研究",
        education: "北京大学学士（2005）、硕士（2008），清华大学与美国西北大学联合培养博士（2011），瑞士日内瓦大学博士后（2016）。",
        experience: "现任深圳大学全球传播研究院执行院长，深圳大学媒体融合与国际传播研究中心主任，深圳大学数字媒体文化实验室负责人。在调入深大工作之前，曾任教于中国人民大学新闻学院、清华大学新闻与传播...",
        awards: "深圳大学特聘教授，入选国家重大人才工程，国家社科基金重大项目首席专家，深圳市国家级领军人才。",
        comment: <span className={styles.censoredText}>"国际传播领域大拿，人很好，讲课干货满满，点名不确定，《媒体融合》《跨文化传播》两次平时作业，字数限制1K，期末论文3K，给分不错"</span>
      },
      {
        id: 18,
        name: "何建平",
        title: "教授",
        photo: "/__local/C/AD/6D/F0EC47EFB1F0E0DEB962F95A1CB_B25CD2ED_1690B.jpg",
        researchAreas: "影视艺术与产业、广告与品牌传播",
        education: "男，生于 1973 年，祖籍四川南充，毕业于北京师范大学艺术与传媒学院，电影学博士",
        experience: "2002 年 7 月起任教于深圳大学传播学院。2017 年晋升为教授，2019 年被评为博士生导师。2009 年 --2014 年担任深圳大学传播学院广告系主任，现任国家广告研究院南方分院执行院长。2006 年 12 月 --2007 年 4 月赴日本电通公司访学。",
        awards: "广东省 “千百十人才” 培养对象",
        comment: ""
      },
      {
        id: 19,
        name: "黄玉波",
        title: "教授",
        photo: "/__local/B/0C/AD/142151DE8A743065AFF3CA0B67C_131A1EF5_D34A.jpg",
        researchAreas: "媒介融合与规制、数字营销传播、广告策略与品牌管理",
        education: "现为深圳大学传播学院副院长、广告系教授，博士生导师；南昌大学哲学学士（1992）、哲学硕士（1995），武汉大学新闻学博士（2006）",
        experience: "拥有八年新闻采编及媒介经营管理实践经历，韩国东义大学访问学者（2013），目前担任中国高等教育学会广告教育专业委员会副秘书长、中国新闻史学会广告与传媒发展史专业委员会常务理事、中国新闻史学会新闻传播教育史研究委员会常务理事、中国公关学会（PRSC）常务理事、中国广...",
        awards: "",
        comment: ""
      },
      {
        id: 20,
        name: "黄春平",
        title: "教授",
        photo: "/__local/A/4C/5B/25C2ADB325362068EB7728E5FD2_929CE08D_EC54.jpg",
        researchAreas: "新闻传播史",
        education: "中国社会科学院研究生院新闻学专业博士，中国社会科学院哲学所博士后，深圳大学传播学院教授，博士生导师；香港城市大学（2011）访问学者。",
        experience: "",
        awards: "广东省省级千百十人才（2010），深圳市领军人才（2010），深圳大学荔园优秀学者（2013）。",
        comment: ""
      },
      {
        id: 21,
        name: "李明伟",
        title: "教授",
        photo: "/__local/6/AC/70/517F36380D2AD920833249BCB74_DA98E4F4_16694.jpg",
        researchAreas: "媒介环境学、广告法规与管理",
        education: "1978 年生人，2005 年获得中国社会科学院文学博士学位，2002 年获得河南大学文学学士学位。",
        experience: "2005 至今在深圳大学传播学院从事教学科研。2008 年晋升为副教授，2013 年晋升为教授，2019 年担任博士生导师。2013 年被认定为深圳市高层次人才，入选深圳大学首批 “荔园优青” 培养对象（2013-2016，2016-2019）。2014 年入选广东省首届高校优秀青年教师培养对象。",
        awards: "论著荣获广东省哲学社会科学优秀成果著作类二等奖，深圳市哲...",
        comment: ""
      },
      {
        id: 22,
        name: "刘蒙之",
        title: "教授",
        photo: "/__local/1/7F/AA/CF5A3C626C6E24F67643C7F3E3C_358586BC_282D4.jpg",
        researchAreas: "非虚构写作、编辑出版学、媒介与青年发展研究、媒介社会学",
        education: "深圳大学传播学院教授，博士生导师。复旦大学新闻学院博士毕业，曾任陕西师范大学新闻与传播学院教授，博士生导师，国际非虚构写作研究中心主任。",
        experience: "香港浸会大学传理学院（2019）、浙江大学文学院访问学者（2022），汕头大学长江新闻学院特聘研究员，北京印刷学院马克思主义学院学术委员会委员，多家 CSSCI 期刊审稿专家。入选教育部高校和新闻单位互聘交流 “双千计划”（2021），任《陕西日报》社会部副主任。2024 年秋季学...",
        awards: "",
        comment: ""
      },
      {
        id: 23,
        name: "彭华新",
        title: "教授",
        photo: "/__local/8/31/7F/B9956CCC8A646CEB44DA5D5AE87_FEA0B0F2_E2E85.jpg",
        researchAreas: "媒介社会学、新闻理论",
        education: "教授，博士生导师，新闻学博士，美国威斯康星大学麦迪逊分校访问学者（2018.8-2019.8）",
        experience: "曾被评为深圳大学 “荔园优秀学者”、深圳市优秀教师。曾任职于多家媒体机构，期间在《人民日报》《光明日报》《新华每日电讯》等报刊发表新闻及评论文章多篇。在深圳广播电影电视集团工作期间，先后担任记者、主编等职务，获各类新闻奖十余项。从 2013 年始至今任教于深圳大学传播学院。现兼任深圳大学传媒与文化发展研究...",
        awards: "",
        comment: ""
      },
      {
        id: 24,
        name: "尹连根",
        title: "教授",
        photo: "/__local/3/CD/F1/69B9A0D76A70127E7F4DB7FA396_A514BEC0_40736.jpg",
        researchAreas: "新媒体的公共性、新闻业转型、新闻社会学",
        education: "深圳大学传播学院教授、博士生导师，深圳大学传媒与文化发展研究中心主任。复旦大学新闻学博士，伦敦政治经济学院（The London School of Economics and Political Science, UK）“文化与社会” 硕士；萨蒙弗雷泽大学（Simon Fraser University, Canada）、香港城市大学、昆士兰科技大学（Queensland University of Technology, Australia）访问学者。",
        experience: "著有《纪实写作与公共说理》一书。",
        awards: "",
        comment: <span className={styles.censoredText}>"只给本科生开一门《纪实写作》室友说上课干货满满，传院难得的硬课，不管是课堂还是作业都很严格，上了一定能学到东西，给分很严格"</span>
      },
      {
        id: 25,
        name: "杨洸",
        title: "教授",
        photo: "/__local/D/B6/B1/0EDC84D4BC60EFAEA642CAB4CD7_B36644EE_11156.jpg",
        researchAreas: "网络传播、舆论极化、算法新闻、网络文明、健康传播",
        education: "教授、博士生导师。现任传播学院副院长。博士毕业于香港浸会大学。2013 年入职深圳大学传播学院，网络与新媒体系专任教师。早前曾任教于暨南大学新闻与传播学院、澳门大学传播系。",
        experience: "深圳市鹏城孔雀计划特聘岗位。主持国家级和省市级多项基金项目，在《新闻与传播研究》等知名学术刊物上发表中英文论文 30 余篇。学术成果获得多项省市级政府奖和学会奖，荣获广东省第八届哲学社会科学优秀成果奖二等奖、深圳市第十届...",
        awards: "",
        comment: <span className={styles.censoredText}>"只给本科生开一门《用户研究》，很少点名，上课有点干燥，但人很好，讨论选题会和你一起想（即使你没有捋清楚），切实的给出她的建议，给分也很好"</span>
      },
      {
        id: 26,
        name: "杨莉莉",
        title: "教授",
        photo: "/__local/7/DD/FF/621026AF85667CED4D4062303E2_3A8C334C_7523.jpg",
        researchAreas: "社交摄影、图像舆情、视觉传播、当代艺术摄影",
        education: "传播学院教授，视觉传播方向学研导师，数字营销传播方向专硕导师。鲁迅美术学院摄影系本科及硕士毕业，2003 年入职深圳大学文学院，现为传播学院广告系教师。",
        experience: "第十届 “中国摄影金像奖” 摄影理论奖获得者，日本电通广告株式会社高级访问学者，深圳市高层次专业人才。两度获得深圳大学优秀本科课堂教学二等奖，所著《商业摄影实训教程》（第 3 版，中国人民大学出版社，2021 年）为 “新编 21 世纪新闻传播学系列教材”、...",
        awards: "",
        comment: <span className={styles.censoredText}>"人还不错，但讲课有点无聊，不怎么点名，《摄影基础》《广告摄影》都是要拍拍拍的，组小组拍拍拍，喜欢拍照可以考虑，给分一般"</span>
      },
      {
        id: 27,
        name: "虞鑫",
        title: "教授",
        photo: "/__local/2/03/C3/45495A86DC5074F6621DB747D78_4B981BE1_508EC.jpg",
        researchAreas: "新闻理论、国际传播、舆论与国家治理",
        education: "深圳大学传播学院 “百人计划” 教授、博士生导师。清华大学学士、博士，牛津大学博士后。",
        experience: "曾任清华大学新闻与传播学院副教授、博士生导师，院长助理、新闻舆论与国家治理研究中心执行主任，入选仲英青年学者奖励计划、清华大学紫荆学者计划。2024 年秋季学期加入深圳大学传播学院。兼任中国新闻史学会中国特色新闻学专业委员会常务理事、秘书长，《全球传媒学刊》轮值副主编、《西安交通大学学报（社会科学版）》青年编委。...",
        awards: "",
        comment: ""
      },
      {
        id: 28,
        name: "周裕琼",
        title: "教授",
        photo: "/__local/3/16/C7/5567BA27DA8CF9F1EF288FE1074_0D8BCEB3_8A01.jpg",
        researchAreas: "新媒体研究、健康传播",
        education: "生于 1978 年，深圳大学学术委员会委员、传播学院教授、百万 + 原创作者，三个孩子的母亲。博士毕业于香港城市大学，曾在香港中文大学及美国华盛顿大学（西雅图）做访问学者",
        experience: "系中国新闻传播学学会杰出青年、广东省 “千百十工程” 省级培养对象、深圳市高层次人才地方级领军人才、深圳市优秀教师、深圳大学首届荔园优青。主持多项国家和省级课题，在国际 SSCI 期刊发表多篇英文论文，在国内知名期刊发表论文二十余篇...",
        awards: "",
        comment: <span className={styles.censoredText}>"舍友说很有实力的老师，《传播学理论》讲的很好，每节课都要点人起来回答问题，做一次传播案例分析，发布在微信公众号上，期末闭卷考，给分不错"</span>
      },
      {
        id: 29,
        name: "张晓红",
        title: "教授",
        photo: "/__local/B/06/31/ACF2D1DF451DA25C1952B89E1F4_C1BE7486_22262.jpg",
        researchAreas: "比较文学、国际传播等",
        education: "深圳大学二级教授、博士生导师，广东省高校 “千百十” 工程省级培养对象（2012-2017），国家社会科学基金重大项目首席专家。湖南师范大学学士（1992），湖南大学硕士（1995），荷兰莱顿大学高级硕士（2001），荷兰莱顿大学博士（2004），加拿大渥太华大学（2012）和美国路易维尔大学（2014）进修。",
        experience: "历任深圳大学外国语学院副院长、深圳大学外国语学院院长、深圳大学副校长，现任深圳大学全球传播研究院院长、韶...",
        awards: "",
        comment: ""
      },
      {
        id: 30,
        name: "战迪",
        title: "教授",
        photo: "/__local/9/93/39/274A3CAB4F0667B74FDE0FB9C6B_C27AD930_4517.jpg",
        researchAreas: "影视艺术、视听传播、数字媒体文化、播音与主持艺术",
        education: "教授，博士生导师，深圳大学社会科学部副主任，深圳大学社会科学联合会秘书长，美国加州大学洛杉矶分校（UCLA）访问学者，毕业于吉林大学文学院，获文学博士学位（中国现当代文学专业，文学传播与媒介文化方向）。",
        experience: "2004 年 —2007 年分别在中国国际广播电台电视节目中心、北广传媒、中央电视台体育频道担任播音主持工作。曾先后获得深圳市哲学社会科学奖新人奖、中国电视文艺 “星光奖” 理论奖二等奖、中国电视剧 “...",
        awards: "",
        comment: <span className={styles.censoredText}>"有八卦，有八卦，有八卦"</span>
      }
    ],
    '副教授': [
      {
        id: 31,
        name: "曹博林",
        title: "副教授",
        photo: "/__local/7/13/6F/9530BFCDB4EE151D8976198D482_2DF250FC_15D6E.jpg",
        researchAreas: "网络传播、健康传播、跨群体传播",
        education: "深圳大学传播学院长聘副教授，博士生导师。美国康奈尔大学访问副教授 (2024), 北卡罗莱纳大学教堂山分校公共卫生项目博士后，香港城市大学传播学博士，武汉大学传播学硕士，中山大学新闻学学士。",
        experience: "2017 年 4 月加入深圳大学传播学院，现任网络与新媒体系主任。近年在 SSCI/SCI/CSCCI 期刊发表论文 60 余篇，其中近 30 篇为第一或通讯作者。文章发表在 Information, Communication & Society, Health Communication, Compute...",
        awards: "",
        comment: ""
      },
      {
        id: 32,
        name: "黄嘉玲",
        title: "副教授",
        photo: "/__local/0/12/C8/E7A4A7D5245CA32573232BCA5D2_EDD4AD44_18E41.jpg",
        researchAreas: "环境传播、媒介心理",
        education: "2008.9 - 2012.5 广东外语外贸大学 国际新闻学 本科；2012.8 - 2014.5 美国迈阿密大学 传播学 硕士；2014.8 - 2018.5 美国纽约州立大学水牛城分校 传播学 博士",
        experience: "研究领域： 环境传播 媒介心理开设主要课程：数据新闻与可视化近五年发表论著：1.Huang, J., & Ells, K. (2020). Risk Here vs. Risk There: Intention to Seek Information About Gulf Coastal Erosion. Environmental Communication, 1 - 15.2.Huang, J., & Yang, J. Z...",
        awards: "",
        comment: ""
      },
      {
        id: 33,
        name: "李莹",
        title: "副教授",
        photo: "/__local/0/97/3B/217FDD52DCFE3CE10E1E8F20902_B2F29DB9_4B6EA.jpg",
        researchAreas: "政治传播、营销传播、媒体与社会",
        education: "于中国人民大学新闻学院获得文学学士学位（2006 年）和文学硕士学位（2008 年），于香港城市大学媒体与传播系获博士学位（2013 年）。",
        experience: "现任深圳大学传播学院副教授、硕士生导师。主要研究领域： 政治传播；营销传播；媒体与社会执教课程： 广告学概论、广告效果评估、广告研究主持课题：2019 年全国港澳研究会港澳研究项目：“粤港澳大湾区” 青年的人生理想、 家庭观念、工作就业比较调查”2017 年广东省高等...",
        awards: "",
        comment: ""
      },
      {
        id: 34,
        name: "刘晓燕",
        title: "副教授",
        photo: "/__local/5/AD/4B/F20C3C9FD65C5584A4773135903_8D48B49F_804F.jpg",
        researchAreas: "文化研究、图像传播研究、文艺学研究",
        education: "2002 年 6 月获得深圳大学文学硕士学位；2008 年 6 月获得中山大学文学博士。",
        experience: "讲师。主要从事文化研究、图像传播研究、文艺学研究等。 主要学术成果有： 1、修辞学视野中的视觉文化研究，深圳大学学报，2008 年第 3 期 2、中国视觉修辞研究的进路，长江师范学院学报，2008 年第 1 期 3、后现代语境下阿多诺美学的复兴与超越，湖南科技学院学报，2008 年第 3 期 4、艺术自律性与大众文化时代的乌托邦，传播与文...",
        awards: "",
        comment: <span className={styles.censoredText}>"人还行，舍友说讲课挺好的，《传播学理论》《西方艺术史》点名频率挺高，都是闭卷考，给分还行"</span>
      },
      {
        id: 35,
        name: "刘莉萍",
        title: "副教授",
        photo: "/__local/E/03/EB/71155A4D8C1C5D3C625620E2709_298C0C58_411A2.jpg",
        researchAreas: "新媒体传播、健康传播、媒介效果",
        education: "厦门大学文学学士及经济学学士，香港中文大学理学硕士（新媒体），香港浸会大学哲学博士（健康传播方向），新加坡国立大学博士后。曾任澳门大学传播系研究助理教授。",
        experience: "2024 年 3 月加入深圳大学传播学院。近年来发表三十多篇 SSCI 期刊论文，其中二十多篇为第一作者。文章主要发表在 Health Communication，Journal of Health Communication，Mobile Media & Communication，Social Science &...",
        awards: "",
        comment: ""
      },
      {
        id: 36,
        name: "茅知非",
        title: "副教授",
        photo: "/__local/2/08/F9/B24B1E7F6AFB36D3067CDFA695D_B1F930A8_623D.jpg",
        researchAreas: "风险研究、金融传播、环境传播、新媒体平台研究",
        education: "上海交通大学学士，英国伦敦政治经济学院硕士，香港中文大学传播学博士。",
        experience: "在取得博士学位后，她分别在德国慕尼黑大学社会学系以及香港中文大学新闻传播学院完成博士后项目。她于 2018 年加入深圳大学传播学院，目前担任副教授职位。研究领域：风险研究，金融传播，环境传播，新媒体平台研究开设主要课程：财经新闻，媒介素养，社会科学质化研究，专业外语，新闻传播学理论研读近期主持的科研项目：新时代的财经...",
        awards: "",
        comment: ""
      },
      {
        id: 37,
        name: "任玉琛",
        title: "副教授",
        photo: "/__local/F/2A/40/6C53EAADC4570ED7B976BFD0CFC_2C1928C3_753B.jpg",
        researchAreas: "健康传播与新媒体、媒介效果、说服",
        education: "2017.1 - 2017.05 北卡莱罗纳大学教堂山分校访问学生；2015.1 - 2018.11 香港中文大学 传播学 - 哲学博士；2012.8 - 2014.12 香港中文大学 传播学 - 哲学硕士；2008.9 - 2012.06 复旦大学 传播学 - 文学学士。",
        experience: "主要研究领域：健康传播与新媒体、媒介效果、说服执教课程：《传播学理论》《创意思维与学术思维》《用户体验设计工作坊》《说服传播》主持课题：1. 2020 - 2022 年，广东省...",
        awards: "",
        comment: ""
      },
      {
        id: 38,
        name: "孙海峰",
        title: "副教授",
        photo: "/__local/8/DE/0A/389810C5E82B58677456F8E8EAD_73D2A1DF_99BC.jpg",
        researchAreas: "美学与媒介哲学、网络新媒体传播",
        education: "1975 年生于山东青岛。1993－1997 年就读于长春地质学院地质系／吉林大学地质学院。获理学学士学位。1997－2000 年就读于汕头大学中文系，获文学硕士学位。 2000－2003 年就读于山东大学中文系，获文学博士学位。",
        experience: "2003 年起任教于深圳大学文学院、传播学院、传媒与文化发展研究中心，现为传播系副主任。研究方向：美学与媒介哲学；网络新媒体传播。讲授课程 ：1、本科生课程：美学概...",
        awards: "",
        comment: <span className={styles.censoredText}>"二峰之一，曾经的网红，人很好，都是大水课，听他偶尔吹吹牛还不错，不怎么点名，期末开卷考，给分也不错"</span>
      },
      {
        id: 39,
        name: "王建磊",
        title: "副教授",
        photo: "/__local/D/9D/26/1FEDD9B58329D70297A738FD16F_E5DBCC05_760A.jpg",
        researchAreas: "网络视听、媒体融合、移动互联网",
        education: "先后毕业于中国矿业大学、上海大学、中国传媒大学，分别获得文学学士（2001）、文学硕士（2008），传播学博士（2011），传播学博士后（2013）。",
        experience: "2011 年 9 月至 2014 年 8 月在深圳广播电影电视集团工作，担任高级研究员。2014 年 9 月入职深大传播学院，2017 年晋升为副教授，同年担任硕士生导师。曾赴密苏里大学新闻学院访学（2009 - 2010）；曾获第 19 届深圳新闻奖三等奖、广东省新世纪电视理论贡献奖、第六届深圳哲...",
        awards: "",
        comment: <span className={styles.censoredText}>"讲课风趣幽默，人非常好，《新媒体产品概论》很有意思，不怎么点名，平时作业体验一个产品做一次汇报，期末做一个产品（不用实际落地），给分挺高。冷知识：曾经是副院长"</span>
      },
      {
        id: 40,
        name: "汪翩翩",
        title: "副教授",
        photo: "/__local/A/41/B1/65C95B2A7817907E322F71FB334_62B38A5C_B9F2.jpg",
        researchAreas: "计算传播学、在线舆论研究、健康传播与健康讨论",
        education: "深圳大学传播学院副教授，硕士生导师，香港城市大学博士，美国德州大学奥斯汀分校访问学者，深圳市海外高层次人才，南山区 “领航人才”，获深圳大学 “荔园优青”、“新锐研究生导师” 等称号。",
        experience: "传播学院计算传播学研究团队主要核心成员。主持或参与多项国家级课题，在 SSCI 以及传播学中文权威期刊发表多篇中英文论文。学术兴趣为在线舆论的相关研究领域，围绕国家课题，采用计算传播学的方法，充分利用现有的大数据...",
        awards: "",
        comment: <span className={styles.censoredText}>"人不错，讲课比较干燥，不怎么点名，《机器学习》作业多任务重，期末闭卷考，给分还行"</span>
      },
      {
        id: 41,
        name: "王伟",
        title: "副教授",
        photo: "/__local/5/2C/1C/8ACFA5363A2C4EC847C46CC9090_A2B4D77A_7447.jpg",
        researchAreas: "数字视听媒介文化、媒介哲学、人机传播",
        education: "东北师范大学学士（2008）、硕士（2011）、博士（2016），北京大学博士后（2018）。为 “深圳市高层次人才” 后备级人才引进来深工作。",
        experience: "主持项目 4 项，其中，国家级项目 1 项、教育部项目 1 项；以第一作者发表 CSSCI 收录论文 10 篇，CSSCI 收录译文 7 篇。院线电影网络评分栏目 “影向标” 编辑；“迷影精神奖” 与 “迷影展映” 系列活动策划；电影学术网络刊物《...",
        awards: "",
        comment: <span className={styles.censoredText}>"人很好，《短视频》平时一次鉴赏视频作业，期末拍一段30s的广告视频参加大广赛，给分不按大广赛排名，按老师喜好程度，给分很好"</span>
      },
      {
        id: 42,
        name: "叶昌前",
        title: "副教授",
        photo: "/__local/E/A3/DA/994780034CD3479DF89E534746A_F8C06A21_4FE6C.jpg",
        researchAreas: "广播电视、网络视听",
        education: "深圳大学传播学院副教授、硕士研究生导师。原复旦大学新闻学院副教授、硕士研究生导师；中国广播电视协会媒介融合研究基地研究员。1983 年 - 1987 年：西北大学中国语言文学系读本科，获文学学士学位。1987 年 - 1990 年：西北大学中国语言文学系读硕士研究生，获文学硕士学位。1990 年 - 1996 年：西北政法大学任教。1992 年 - 1995 年：兼职于陕西经济广播电台、陕西有线电视台，任记者、主持人。1997 年 - 2005 年：任教于复旦大学新闻学...",
        experience: "",
        awards: "",
        comment: <span className={styles.censoredText}>"懂的都懂，不点名（和课代表熟的话），所有课都一个味，两次小组pre，期末论文，给分很好。冷知识：喜欢美女"</span>
      },
      {
        id: 43,
        name: "于晓峰",
        title: "副教授",
        photo: "/__local/D/4B/0B/429B910F47DD3FE4D62B1C1CA0D_F6BCB2EB_76F4.jpg",
        researchAreas: "文化传播、符号学、文学艺术理论、数字营销",
        education: "未提及",
        experience: "2004年入职深圳大学，2012年任教于深圳大学传播学院。曾赴英国伦敦大学亚非学院短期访问（2018年6 - 8月）。现任深圳大学传播学院广告系教师，深圳大学传媒与文化发展研究中心特聘研究员，中外文论比较专业委员会理事。",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"另一峰，人很好，会发大红包，大水课，不点名，期末开卷考，给分很好"</span>
      },
      {
        id: 44,
        name: "张晗",
        title: "副教授",
        photo: "/__local/C/19/50/E5263C6991CCB00B0C91D18D313_0E488B9B_DC4C.jpg",
        researchAreas: "数字出版与阅读、数字新闻认知、数字创意产业",
        education: "武汉大学新闻与传播学院博士（2013年），深圳大学传播学院硕士（2007年），优秀毕业生、提前毕业，兰州大学新闻与传播学院学士（2004年），优秀毕业生。",
        experience: "2014年调入深圳大学传播学院新闻系任教，先后赴深圳特区报社新媒体部挂职（2015年），澳大利亚昆士兰科技大学创意产业学院短期访问学者（2017年），兼任深圳大学传媒与文化发展研究中心研究员、国家文化创新研究中心研究员。",
        awards: "未提及",
        comment: "未提及"
      },
      {
        id: 45,
        name: "张田田",
        title: "副教授",
        photo: "/__local/6/41/74/D52239501848878A434B6214818_8B28FB3F_C05B.jpg",
        researchAreas: "新闻社会学、环境传播与数字新闻研究",
        education: "毕业于武汉大学新闻与传播学院，获新闻学博士学位。",
        experience: "现为深圳大学传播学院新闻系专任教师。主持教育部人文社会科学研究青年基金项目《媒体中介的公共商议研究》（结项）；主持广东省高校优秀青年创新人才培育项目《我国群体性事件的...》",
        awards: "未提及",
        comment: "未提及"
      },
      {
        id: 46,
        name: "张燕",
        title: "副教授",
        photo: "/__local/8/F3/1D/EA5D26D8461F9C1E5B58FF4D525_78152DE5_680D.jpg",
        researchAreas: "广告与消费心理，媒介心理与行为，健康传播",
        education: "先后于北京师范大学获得学士、硕士学位（心理学），于香港中文大学获得博士学位（心理学，2017），曾于荷兰乌特勒支大学交换（2016）。",
        experience: "2018 - 至今深圳大学传播学院，2013 - 2014 中国社会科学院。",
        awards: "未提及",
        comment: "未提及"
      }
    ],
    '讲师/助理教授': [
      {
        id: 47,
        name: "陈建",
        title: "讲师",
        photo: "/__local/5/C6/79/578A13CF76F118E54349264D861_B0737F49_1E7E3.jpg",
        researchAreas: "网络社会学、数据可视化、社会网络分析和教育技术学",
        education: "华中师范大学理学学士（1997年），北京大学教育学硕士（2005年），香港中文大学哲学博士（2011年）",
        experience: "『e-Learning大讲堂』发起人和创办人之一，《开放教育研究》外审专家。已出版《远程学习者的社会资本：网络社会之视域》（著）、《技术进步中的现代远程教学》（编著），曾获中国教育技术协会年会论文一等奖等奖项。",
        awards: "曾获中国教育技术协会年会论文一等奖等奖项",
        comment: <span className={styles.censoredText}>"让人又爱又恨，很喜欢互动，坐前排100%会被认识，i人地狱，讲课还行，点名很多，但是人很好，《数据可视化》网新三大小毕设之一，平时有一次翻转课堂讲课，给分不错，
          《网络社会》平时事挺多，期末论文，给分不错，《社会网络关系》事比较少，期末交一个报告，给分一般。冷知识：《用户研究》《数据抓取》《数据可视化》本来三合一组成小毕设，因为老师对选题意见不合分家了"</span>
      },
      {
        id: 48,
        name: "陈丽娜",
        title: "讲师",
        photo: "/__local/B/FE/17/AE4F4A955E51839A20DF186242B_ED680229_534A.jpg",
        researchAreas: "广告管理",
        education: "未提及",
        experience: "作为主要参加者，参与国家级研究课题三项、级研究课题一项、市级研究课题三项、企业研究课题二项。曾主持负责珠海某大型服装集团市场调研和咨询分析工作；参与“上汽通用五菱营销战略和行动纲领研究”工作以及“湖北省高新技术产业发展研究”的项目研究工作；现主持负责深圳大学校级社科基金研究项目。",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"大水课，什么课都是一个味，基本不点名，一次Pre，期末论文，给分一般"</span>
      },
      {
        id: 49,
        name: "程遥",
        title: "助理教授",
        photo: "/__local/D/6D/18/29FC52D5DDF8895910B9E4043B3_F4478125_123F9.jpg",
        researchAreas: "文化社会学、影像（视觉）传播",
        education: "中国传媒大学 学士，名古屋大学（Nagoya University，Japan） 硕士(MA)，京都工艺纤维大学（Kyoto Institute of Technology） 博士（Ph.D.）",
        experience: "未提及",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"人很好，《数字色彩》平时一次期末初稿的pre，期末交一个报告，给分不错。冷知识：二次元少女"</span>
      },
      {
        id: 50,
        name: "郭海涛",
        title: "讲师",
        photo: "/__local/3/9D/29/9A08ADE08AE2C7A0E21C38317F8_85BAFA97_8039.jpg",
        researchAreas: "影视摄影、影视策划与编剧、场景分析、叙事技巧",
        education: "美国Temple University电影制作MFA",
        experience: "深圳大学传播学院讲师，导演/编剧/制片人。导演作品：2018年《永安浩劫》，入围2018第八届“光影纪年--中国纪录片学院奖”；2016年《艳阳楼》，入围第37届纽约亚美国际影展、法国FIPA国际电视节；台北国际纪录片电影节展映；2013年 <<老唐>>, 入围2013洛杉矶亚太影展、2014弗罗里达Love Your Short Film Festival, 并在2013美国蓝宝...",
        awards: "未提及",
        comment: "未提及"
      },
      {
        id: 51,
        name: "华薇",
        title: "讲师",
        photo: "/__local/1/2F/3F/5E74430D0FACB18160DDF100A9D_D0575DC1_9DFA.jpg",
        researchAreas: "公益广告、公益营销",
        education: "未提及",
        experience: "研究领域： 公益广告、公益营销。开设主要课程：《公益营销》、《广告写作》、《社会科学研究方法》。近期主持和参与科研项目：《深圳市公益广告年度管理项目》《基于建构主义学习理论的广告写作课程实训设计》。近五年发表论著：广告专业毕业设计丛书《广告的理想》第四分册《社会公益类案例集》主编。",
        awards: "未提及",
        comment: "未提及"
      },
      {
        id: 52,
        name: "胡刘斌",
        title: "讲师",
        photo: "/__local/1/0D/84/404BB4A6BC99EE91F5A51CFC196_7C3B70A3_2F0D8.jpg",
        researchAreas: "纪录片创作和研究、电影教育、电影文化与市场，电影剧作",
        education: "于北京电影学院导演系毕业后留校任教，并受聘于北京大学、北京师范大学讲授电影创作课程",
        experience: "现任教深圳大学传播学院。作为导演，他拍摄的故事片、纪录片和广告片在国内外多个电影节参展并获奖。纪录电影“哈佛女孩”荣获波兰PRIX VISIONICA 电影节THE TELELANAL KULTURA特別奖，并受邀参加哥德堡电影节，中国独立纪录片电影节等多个国内外影展。该片也被栗憲庭電影基金會、香港中文大學及多个海...",
        awards: "纪录电影“哈佛女孩”荣获波兰PRIX VISIONICA 电影节THE TELELANAL KULTURA特別奖",
        comment: <span className={styles.censoredText}>"人很好，每节课都点名，《视听基础》从拍照片到拍视频都有，期末交一个90s的视频，给分一般"</span>
      },
      {
        id: 53,
        name: "黄文森",
        title: "助理教授",
        photo: "/__local/8/B7/87/3AE4F48DB295CFFF0F71C718DA8_EEB552A8_2B7BC.jpg",
        researchAreas: "计算传播学、数字新闻学、社交媒体挖掘、社会网络分析",
        education: "2019年获复旦大学新闻学院传播学博士学位，美国加州大学戴维斯分校联合培养博士（2017-2018）",
        experience: "现任深圳大学媒体融合与国际传播研究中心副主任。近年来在Information Processing & Management、Journal of Medical Internet Research、Telematics and Informatics、《新闻与传播研究》、《新闻大学》、《新闻记者》等SSCI/SCI/CSSCI期刊发表论文20余篇。主持国家社会科学基金项目...",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"人很好，全部都是教技术的课，比较硬核，《网络社会》《计算方法》点名看心情，期末都是用学的软件做一个报告Pre，类似于毕设，要求没那么严格，给分还行"</span>
      },
      {
        id: 54,
        name: "韩少卿",
        title: "助理教授",
        photo: "/__local/8/14/AC/70535A7CB0F8CBA727C0AB0AE3B_25AFB7BF_2BB85.jpg",
        researchAreas: "计算传播学、计算认识论",
        education: "郑州大学电子信息工程学士、传播学硕士，南京大学新闻传播学博士",
        experience: "2024年8月加入深圳大学传播学院，现任网络与新媒体系助理教授。近五年在《新闻与传播研究》、《现代传播（中国传媒大学学报）》、《南京社会科学》等CSSCI期刊发表论文多篇。",
        awards: "未提及",
        comment: "未提及"
      },
      {
        id: 55,
        name: "简予繁",
        title: "助理教授",
        photo: "/__local/F/CB/9C/0708A95096D8F9E0D36704E63B2_FDDE2909_701F.jpg",
        researchAreas: "消费者行为、品牌传播",
        education: "中南民族大学广告学学士，武汉理工大学营销传播学硕士，武汉大学广告与媒介经济学博士，深圳大学市场营销学博士后",
        experience: "2021年3月加入深圳大学传播学院，现任广告学助理教授。近五年在SSCI/CSCCI期刊发表论文13篇，其中13篇为第一或通讯作者。文章发表在Journal  of  Destination  Marketing  & Management, Sustainability, Journal of Product and Brand Management ，南开管理评论...",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"人非常好，点名比较少，讲课非常有意思，干货满满，非常贴近现在市场的营销前沿，平时作业，期末作业都没有，给分很高</span>
      },
      {
        id: 56,
        name: "柯力嘉",
        title: "讲师",
        photo: "/__local/2/85/37/B4755621379EE4A84B77D07956E_7649B4E9_9B7A.jpg",
        researchAreas: "数码艺术、交互设计",
        education: "2010年获得西伦敦大学博士学位",
        experience: "2011年开始任教于深圳大学传播学院。执教课程：新媒体设计基础、动态视觉设计。参与课题：2015-2918，广东省教改项目，HTML5编程技术下的广告创意设计教学研究；2016-2018，深圳市社科项目，网络视频直播的引导策略研究；2018- ，广东省重点项目，青年自拍类社交图像中社会舆情上的敏感度研究；2018- ，广东省教改项目，传统美术与现代信息技术的融合；2019...",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"人不错，两门课都是水课，偶尔点名，AE课会参加大广赛，给分不错。冷知识：疑似开摆了"</span>
      },
      {
        id: 57,
        name: "林嘉玲",
        title: "助理教授",
        photo: "/__local/1/E2/86/17252240A16E8400D32BD873812_E04A41CA_B65D.jpg",
        researchAreas: "绿色营销、旅游管理、绿色广告、品牌关系、企业社会责任",
        education: "华南师范大学管理学学士，华南师范大学理学硕士，澳大利亚斯威本科技大学营销学学博士，深圳大学市场营销学博士后，深圳大学传播学院广告专业研究员",
        experience: "2023年3月加入深圳大学传播学院，现任广告学助理教授。近五年发表11篇SSCI期刊论文，均为第一或通讯作者。文章发表在Corporate Social Responsibility Environmental Management， Computers in Human Behavior, Journal of Retai...",
        awards: "未提及",
        comment: "未提及"
      },
      {
        id: 58,
        name: "黎明",
        title: "讲师",
        photo: "/__local/5/3D/EC/B9F40DB9580FC868CC95145E65E_8BF16DFB_1837B.jpg",
        researchAreas: "广告营销、广告设计",
        education: "1994-1998广州美术学院附中 学习绘画与设计基础,获得高中学历。1998-2002广州美术学院装饰艺术系 学习装饰艺术设计,获得学士学位。2003-2003.10英国坎特博雷大学,研究生学前英语准备 。2003.10-2004.11英国伦敦媒体与音乐学院,修读电脑艺术专业.获得文学硕士学位 。 2004.11-2005.4在英国Escape studio进修,学习三维动画。 2005.7--现在 深圳大学传播学院,任讲师",
        experience: "未提及",
        awards: "未提及",
        comment: "未提及"
      },
      {
        id: 59,
        name: "李辉",
        title: "助理教授",
        photo: "/__local/D/D0/17/E3DAFA1AF75F997934C99C114A4_177E8D84_32B81.jpg",
        researchAreas: "传播思想史、文化研究、互联网国家治理、国际传播",
        education: "西南大学文学学士，厦门大学新闻传播学院传播学博士，美国伊利诺伊州香槟分校联合培养博士（2010 年 8 月 - 2012 年 8 月）",
        experience: "2019 年入职中山大学媒体与设计学院，任博士后 / 副研究员。2019 年 8 月 - 2020 年 9 月，借调中国网络空间研究院从事网信智库相关研究工作。2022 年 5 月入职深圳大学传播学院，现任深圳市人文社科重点研究基地深圳城市传播创新研究中心常务副主任。",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"人还不错，就是有时候让人觉得有点抽象，《媒体与社会》大水课，基本不点名，给分很低"</span>
      },
      {
        id: 60,
        name: "李梓音",
        title: "讲师",
        photo: "/__local/D/57/36/B50BC65058CDDAC05DB24F6B232_E2F25D79_76C14.jpg",
        researchAreas: "数据新闻与可视化、数据研究与批评数据研究",
        education: "云南大学工学学士（数字媒体技术），浙江大学工程硕士（软件工程），丹麦哥本哈根大学（CTS 中心）联合培养博士生（国家留学基金委员会公派），浙江大学文学博士（新闻传播学）",
        experience: "2024 年 7 月加入深圳大学传播学院，现任网络与新媒体系全职授课教师。 开设课程：2024-2025 秋：《人机交互设计》、《互联网程序设计：...",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"人非常好，就是教的技术都有点过时了，很喜欢《人机交互设计》做单片机，很少点名，期末做一个产品Pre，给分一般，冷知识：漂亮姐姐"</span>
      },
      {
        id: 61,
        name: "李炳灿",
        title: "助理教授",
        photo: "/__local/E/CD/F4/E88E567A952CAF1D316A8873B7D_C60FF504_BA08.jpg",
        researchAreas: "移动营销、消费心理学、神经营销学",
        education: "河南师范大学心理学学士，首都师范大学基础心理学硕士，北京大学应用心理学博士",
        experience: "2024 年 8 月加入深圳大学传播学院，现任广告系助理教授。近年来发表多篇 SCI 及 SSCI 期刊论文。文章发表在 Psychophysiology,Behavioral Sciences,European Journal of Psychology of Education 等杂志中。参与多项国家自然科学基金项目和北京大学校企合作项目，为包括华为、荣耀、大益集团、平安保险公司等...",
        awards: "未提及",
        comment: "未提及"
      },
      {
        id: 62,
        name: "刘松吟",
        title: "助理教授",
        photo: "/__local/9/85/F8/32F2E38EB3ED98A54FCF1EF37C7_6473587A_13CF2.jpg",
        researchAreas: "文化研究、批判理论、媒介社会学、数字新闻、跨文化传播",
        education: "北京大学理学学士、经济学学士，北京大学新闻与传播硕士，英国伦敦政治经济学院哲学博士（媒介与传播，2023）",
        experience: "近年以第一作者 / 通讯作者发表多篇 SSCI/CSSCI 期刊论文。论文与学术作品发表于 Social Problems，China Quarterly，《新闻与写作》，《文艺理论与批评》等期刊。论文曾被人大复印报刊资料《新闻与传播》全文转载。",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"人非常好，年轻有为，讲课也有意思，两门课都很少点名，平时作业一次Pre，期末论文，给分很高。冷知识：传院学历最高"</span>
      },
      {
        id: 63,
        name: "聂鑫",
        title: "助理教授",
        photo: "/__local/C/EB/07/8239CA1DA402879CC30507EAE9D_C7BCBE08_66D0.jpg",
        researchAreas: "政治传播、舆论极化、互联网内容治理、大数据舆情分析",
        education: "兰州大学管理学学士、香港中文大学社会学系硕士、中山大学政治学博士（政治传播方向）",
        experience: "现任深圳大学传播学院新闻系助理教授。主要研究领域：政治传播、舆论极化、互联网内容治理、大数据舆情分析期刊论文：1. 张志安，聂鑫 *.(2022). 互联网平台社会语境下网络内容治理机制研究。中国编辑.05:4-10.2. 张志安，聂鑫 *.(2021). 融合时代中国受众类型变迁与数字生活兼谈平台社会的受众研究。新闻与写作.05:68-76.3. 张志安，...",
        awards: "未提及",
        comment: "未提及"
      },
      {
        id: 64,
        name: "彭祎祎",
        title: "讲师",
        photo: "/__local/E/B7/86/D08637041708EE7BCD26F6513EC_7AEA7B7C_D142.jpg",
        researchAreas: "广告创意表现、品牌整合设计与推广、设计创新思维",
        education: "未提及",
        experience: "深圳大学传播学院广告系教师，也是一位美术背景的资深广告人，曾在国际、本土 4A 公司工作九年，从业期间收获了长城奖、金印奖、纽约广告节等国内外广告节金银铜奖，个人吉祥物设计也多次被官方采用。主要教研领域广告创意表现、品牌整合设计与推广、设计创新思维执教课程《平面广告创意与设计》、《品牌整合设计》、《设计思维与方法》等专业课程教研成果：发表论文普刊 9 篇，核心期刊 1 篇，发明专利 1 项 ，指导学生广...",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"人很好，《PS》课很有意思，讲课很有耐心，给分很高，"</span>
      },
      {
        id: 65,
        name: "史旻昱",
        title: "讲师",
        photo: "/__local/E/39/3A/FA0F4011632055E7DFB26BBCE21_6D9167ED_58BF5.jpg",
        researchAreas: "数字营销、文化创意产业",
        education: "1997-2001，华中科技大学计算机科学与技术学院，本科 2001-2004，华中科技大学新闻与信息传播学院，硕士 2004-2008，管理学院，博士",
        experience: "主要研究领域：数字营销、文化创意产业开设主要课程：数据抓取与清洗、新媒体概论近期主持的科研项目：品牌延伸理论视角下的 IP 电影研究教育部深圳市宣传文化事业发展专项基金 2023 年度项目绩效评估，市委宣传部书香深圳测评体系 —— 基于全民阅读的研究，深圳出版集团光明区市民文明素养摸...",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"让人爱恨交织的师太，喜欢的很喜欢，讨厌的很讨厌。很有实力，两门课都不点名，选题谜语人，但给分挺高，
          冷知识：最懂交叉学科，选题合他心水一路绿灯，疑似开摆"</span>
      },
      {
        id: 66,
        name: "汪臻真",
        title: "助理教授",
        photo: "/__local/3/E2/7D/C28E567AF6253EA72B901FD6F61_FE4308F8_79E0.jpg",
        researchAreas: "计算广告、社会网络分析、文献计量学",
        education: "于 2015 年在香港城市大学取得博士学位",
        experience: "曾就职于香港 Openrice 有限公司，香港城市大学商学院管理科学系，腾讯广告营销与服务线。研究领域： 计算广告，社会网络分析，文献计量学开设主要课程：计算广告导论近期主持和参与科研项目：广告多次多点多样曝光的影响机制研究近五年发表论著：期刊：汪臻真，朱志华，蔡政. (2020). 计算广告中的效果衡量方法。中国网络传播研究.Jiang, L. C., Wang, Z. Z., Peng, T. –Q., & Z...",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"人很好，讲课比较干燥，《计算广告》基本不点名，两次Pre，给分一般。冷知识：带小蜜蜂上课，梦回小学课堂"</span>
      },
      {
        id: 67,
        name: "吴汶萱",
        title: "讲师",
        photo: "/__local/A/6B/7D/E2591C862918D7C72D0D03107C2_A473A60A_1ABED.jpg",
        researchAreas: "设计基础",
        education: "未提及",
        experience: "吴汶萱，讲师，主讲《设计基础》等课程",
        awards: "未提及",
        comment: "未提及"
      },
      {
        id: 68,
        name: "吴怿",
        title: "助理教授",
        photo: "/__local/9/56/A8/D18CC201BE81B309EC548A0DD0F_D7A67E13_A658.jpg",
        researchAreas: "政治传播、媒介效果、网络舆论",
        education: "香港城市大学 2015.1-2020.10 博士，媒体与传播系（博士论文：《社会矛盾后果：香港民意极化与媒体》）复旦大学 2006.9-2009.7 硕士，新闻学院 2002.9-2006.7 学士，新闻学院",
        experience: "工作经历 中山大学传播与设计学院 博士后 2020.12 - 至今南方都市报 记者 2009.10-2014.12 教育背景香港城市大学 2015.1-2020.10 博士，媒体与传播系（博士论文：《社会矛盾后果：香港民意极化与媒体》）复旦大学 2006.9-2009.7 硕士，新闻学院 2002.9-2006.7 学士，新闻学院教学经历中山大学，传播与设计学院 硕士研究生必修课《社会网络分析》，任课教师香港浸会大学，新闻系博士研究生课程《社会网络...",
        awards: "未提及",
        comment: "未提及"
      },
      {
        id: 69,
        name: "王童辰",
        title: "助理教授",
        photo: "/__local/2/6C/91/C2523289EB0B4BCE6D1A236371E_A9ED13A3_323F3.jpg",
        researchAreas: "健康传播、国际传播、政治传播、计算传播",
        education: "中山大学文学学士、文学硕士，中山大学法学博士（政治传播学）",
        experience: "曾任广州广播电视台双语出镜记者，广州大学新闻与传播学院讲师。现任深圳大学传播学院助理教授。主要研究领域：健康传播、国际传播、政治传播、计算传播等。开设主要课程：本科生：《国际传播》《视听节目创意与策划》《数据处理与 SPSS 应用》等。研究生：《新闻传播学研究方法》《传播统计学》《健康传播理论》《健康传播研究前沿》等。近期主...",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"人很好，声控福利，讲课很有意思，《SPSS与数据处理》基本不点名，传院自己的数学课，全凭自己造化。冷知识：疑似?"</span>
      },
      {
        id: 70,
        name: "钟书平",
        title: "讲师",
        photo: "/__local/2/42/EF/A4E6DF042BBA3AB5340B2D2E0DC_18EC2D65_440F6.jpg",
        researchAreas: "计算广告、广告实务",
        education: "广告学博士，本科毕业于广东外语外贸大学英语专业，硕士毕业于北京大学光华管理学院工商管理专业，博士毕业于中国传媒大学广告学院",
        experience: "曾就职于法国阳狮集团星传媒体，拥有丰富的广告策划与媒体管理经验。主要研究领域：计算广告、广告实务开设主要课程：《品牌建构与传播》、《广告策划》、《媒体策略》、《新媒体广告前沿》近期主持的科研项目：1. 项目：主持，钟书平，国际专业认证背景下广告学专业课程体系改...",
        awards: "未提及",
        comment: <span className={styles.censoredText}>"关注公众号“爱反思的钟博士”"</span>
      },
      {
        id: 71,
        name: "张文文",
        title: "讲师",
        photo: "/__local/F/0E/2F/E866A4F9D96AC90D515C119011B_9B91AC2D_1241D.jpg",
        researchAreas: "文化研究、电影理论与批评",
        education: "文学硕士，美国科罗拉多大学访问学者（2018）",
        experience: "现任深圳大学网络与新媒体系副主任、讲师。曾任职于深圳报业集团《晶报》，担任总经理助理（2019 部校共建挂职），荣获腾讯优秀教师奖（2016）、深圳大学优秀本科教师奖（2016、2021）、深圳大学优秀本科教学组织管理奖（2022），指导学生参加全国及省级比赛获奖百余项。",
        awards: "荣获腾讯优秀教师奖（2016）、深圳大学优秀本科教师奖（2016、2021）、深圳大学优秀本科教学组织管理奖（2022）",
        comment: "未提及"
      },
      {
        id: 72,
        name: "张幸",
        title: "助理教授",
        photo: "/__local/2/D0/BB/F64B74234E5CB913BE231D6C60D_E5CD22A0_255E9.jpg",
        researchAreas: "公共关系、危机与风险传播、科学传播、健康传播",
        education: "新加坡国立大学博士（传播与新媒体，2023），香港科技大学理学硕士，四川大学文学学士（新闻学，2017）",
        experience: "近年来以第一作者 / 通讯作者发表多篇 SSCI 期刊论文。曾获国际传播学会（ICA）健康传播分会最佳学生论文奖（2023）、ICA 公共关系分会危机传播智库最佳论文奖（2024）。主持并参与多项国家级、省级科研项目。",
        awards: "曾获国际传播学会（ICA）健康传播分会最佳学生论文奖（2023）、ICA 公共关系分会危机传播智库最佳论文奖（2024）",
        comment: "未提及"
      },
      {
        id: 73,
        name: "张如坤",
        title: "助理教授",
        photo: "/__local/7/00/FC/58BE1CAC29A8115501899D3E838_70AEBC88_49FBB.jpg",
        researchAreas: "网络与新媒体、传播效果研究、传播技术与社会、科学传播",
        education: "中南大学文学学士（数字出版 & 英语），北京师范大学文学硕士（传播学），北京师范大学文学博士（新闻传播学），美国麻省理工学院媒体实验室（MIT MediaLab）联合培养博士",
        experience: "2024 年 7 月加入深圳大学传播学院，现任网络与新媒体系助理教授。近五年在 SSCI/CSSCI 期刊发表论文 15 余篇。文章发表在 Digital Journalism，Media and Communication，《新闻与传播研究》《国际新闻界》",
        awards: "未提及",
        comment: "未提及"
      }
    ],
    '兼任教师': [
      {
        id: 1,
        name: "刘辉",
        title: "教授",
        photo: "/__local/A/E8/AA/6221B7C0774896B4CBDEE20ACD5_3CF75057_51C1.jpg",
        researchAreas: "港台电影、电影产业",
        education: "电影学博士",
        experience: "毕业于中国传媒大学影视艺术学院。2006年进入深大工作，先后在文学院、传播学院工作，现任艺术学部戏剧影视学院院长，传播学院双聘教师。先后于2015-16年在加州大学洛杉矶分校电影、电视和戏剧学院的制片人MFA专业（Producer Program）访学，2017-18年在喀什大学人文学院援疆支教，2023-2024年在东京大学综合文化研究科表象文化论研究室访学。深圳大学赛艇队专家队队员，曾获深圳2022年X9高校院所联盟...",
        awards: "曾获深圳2022年X9高校院所联盟...（信息不完整）",
        comment: <span className={styles.censoredText}>"人很好，讲课一般，《电影赏析》点名挺多，作业很多，都是写影评，给分不错。冷知识：戏剧与影视学院院长"</span>
      }
    ]
  };

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

  // 计算当前页面应该显示的教师
  const indexOfLastTeacher = currentPage * teachersPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
  const currentTeachers = teachersData[activeCategory].slice(indexOfFirstTeacher, indexOfLastTeacher);

  // 计算总页数
  const totalPages = Math.ceil(teachersData[activeCategory].length / teachersPerPage);

  // 页码变化处理函数
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 切换分类时重置页码
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className={styles.main}>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>师资队伍</h1>
          <div className={styles.titleDecoration}></div>
        </div>

        {/* 萌娘百科风格的提示框 */}
        <div className={styles.moegirlNotice}>
          <div className={styles.noticeIcon}>ℹ️</div>
          <div className={styles.noticeContent}>
            <strong>深大传播学院欢迎您了解师资队伍☆</strong><br />
            欢迎对师资队伍感兴趣的您了解我院情况。深圳大学传播学院拥有一支高水平的教师队伍，为学生提供优质的教育资源。
          </div>
        </div>

        {/* 师资力量概况 */}
        <section className={styles.facultyOverview}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewImage}>
              <img src="/images/teachers/szgk_pic.jpg" alt="师资力量" />
            </div>
            <div className={styles.overviewText}>
              <h2>师资力量</h2>
              <p>
                深圳大学传播学院师资力量雄厚，梯队完备。目前有专任教师58人，其中正教授15人，博士生导师14人，
                国家教学名师、教育部教指委、省级教学名师、广东省千百十人才等9人。其中既有老一辈代表性学者何道宽教授、
                吴予敏教授、辜晓进教授等，也有中生代的知名学者王晓华教授、丁未教授、尹连根教授等，
                更有年青学者代表周裕琼教授、李明伟教授、常江教授等。近年来深圳大学传播学院还着重引进了一批年轻富有朝气的博士，
                整个教师团队的年龄结构和学科结构日趋合理。
              </p>
              <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>58</div>
                  <div className={styles.statLabel}>专任教师</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>15</div>
                  <div className={styles.statLabel}>正教授</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>14</div>
                  <div className={styles.statLabel}>博士生导师</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 师资分类导航 */}
        <section className={styles.facultyNav}>
          <ul>
            {Object.keys(teachersData).map((category) => (
              <li
                key={category}
                className={activeCategory === category ? styles.active : ''}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </section>

        {/* 教师列表 */}
        <section className={styles.teachersList}>
          {currentTeachers.map((teacher) => (
            <div key={teacher.id} className={styles.teacherCard} onClick={() => openTeacherDetail(teacher)}>
              <div className={styles.teacherPhoto}>
                <img src={teacher.photo} alt={teacher.name} />
              </div>
              <div className={styles.teacherInfo}>
                <h3 className={styles.teacherName}>{teacher.name}<span className={styles.teacherTitle}> / {teacher.title}</span></h3>
                <div className={styles.teacherDetail}>
                  <p className={styles.teacherResearch}><strong>研究领域：</strong>{teacher.researchAreas || teacher.research}</p>
                  <p className={styles.teacherBio}>{teacher.experience}</p>
                  <p className={styles.teacherRating}><strong>评价：</strong>{teacher.comment || "暂无评价"}</p>
                </div>
              </div>
              <div className={styles.cuteDecoration}>
                <img src="/images/pzj152.jpg" alt="装饰" className={styles.cuteIcon} />
              </div>
            </div>
          ))}
        </section>

        {/* 分页导航 */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.pageButton}
            >
              上一页
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.pageButton}
            >
              下一页
            </button>
          </div>
        )}

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
                    <p className={styles.teacherDetailResearch}><strong>研究方向：</strong>{selectedTeacher.researchAreas || selectedTeacher.research}</p>
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

                  <div className={styles.teacherDetailSection}>
                    <h3>评价</h3>
                    <p>{selectedTeacher.comment || "暂无评价"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
} 