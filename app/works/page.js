'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './works.module.css';

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState(null);

  // 毕设作品数据
  const works = [
    {
      id: 1,
      title: '《她立于瓦砾之中》',
      category: 'documentary',
      year: '2024',
      author: '李明',
      major: '新闻学',
      description: '纪录片《她立于瓦砾之中》聚焦深圳建筑工地女性工人的生活状态，通过细腻的镜头语言和深入的人物访谈，展现她们在城市建设中的贡献与坚韧。',
      images: ['/images/carousel1.jpg', '/images/carousel2.jpg'],
      awards: ['2024年校级优秀毕业作品', '第十届中国大学生纪录片大赛入围作品']
    },
    {
      id: 2,
      title: '连咖啡2024年品牌整合营销方案',
      category: 'marketing',
      year: '2024',
      author: '张华、王强',
      major: '广告学',
      description: '针对连咖啡品牌在Z世代消费者中的认知度和忠诚度提升，设计的整合营销传播方案。方案包含品牌定位优化、社交媒体策略、线下活动策划等内容，旨在提升品牌年轻化形象。',
      images: ['/images/carousel3.jpg', '/images/news2.jpg'],
      awards: ['2024年学院优秀毕业设计', '获连咖啡品牌方认可并部分采用']
    },
    {
      id: 3,
      title: '"背包十年"整合营销传播策划案',
      category: 'marketing',
      year: '2024',
      author: '刘芳',
      major: '广告学',
      description: '为户外品牌"背包十年"设计的十周年庆整合营销传播策划案，通过"行走的记忆"主题，结合社交媒体互动、用户故事征集、线下体验活动等形式，提升品牌情感连接。',
      images: ['/images/news3.jpg', '/images/news4.jpg'],
      awards: ['2024年校级优秀毕业设计', '第15届学院奖策划类银奖']
    },
    {
      id: 4,
      title: '好说"代"说——青老代际弥合沟通行动传播策略',
      category: 'newmedia',
      year: '2024',
      author: '陈明',
      major: '网络与新媒体',
      description: '针对当代青年与老年人之间的代际沟通障碍，设计的新媒体传播项目。通过短视频系列、互动小程序、线下工作坊等形式，促进不同代际间的理解与交流。',
      images: ['/images/carousel1.jpg', '/images/news3.jpg'],
      awards: ['2024年学院优秀毕业设计', '入选"青年创想"公益传播计划']
    },
    {
      id: 5,
      title: '深圳市控烟工具包应用与新媒体实践',
      category: 'newmedia',
      year: '2024',
      author: '赵琳',
      major: '网络与新媒体',
      description: '结合深圳市控烟政策，设计的新媒体传播工具包，包含H5互动页面、短视频内容、社区宣传材料等。通过创新的传播形式，提高公众对控烟政策的认知和支持度。',
      images: ['/images/carousel2.jpg', '/images/news4.jpg'],
      awards: ['2024年校级优秀毕业设计', '获深圳市卫健委表彰']
    },
    {
      id: 6,
      title: '龙城CC创意街区上半年整合营销方案',
      category: 'marketing',
      year: '2024',
      author: '黄磊、张婷',
      major: '广告学',
      description: '为龙城CC创意街区设计的2024年上半年整合营销方案，围绕"创意生活节"主题，策划系列线上线下活动，提升街区客流量和品牌影响力。',
      images: ['/images/news2.jpg', '/images/carousel3.jpg'],
      awards: ['2024年学院优秀毕业设计', '获街区运营方采用']
    }
  ];

  // 根据分类筛选作品
  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  // 打开作品详情
  const openWorkDetail = (work) => {
    setSelectedWork(work);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };

  // 关闭作品详情
  const closeWorkDetail = () => {
    setSelectedWork(null);
    document.body.style.overflow = 'auto'; // 恢复背景滚动
  };

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>毕设作品</h1>
          <div className={styles.titleDecoration}></div>
        </div>

        {/* 萌娘百科风格的提示框 */}
        <div className={styles.moegirlNotice}>
          <div className={styles.noticeIcon}>ℹ️</div>
          <div className={styles.noticeContent}>
            <strong>深大传播学院欢迎您欣赏毕设作品☆</strong><br />
            欢迎对毕设作品感兴趣的您了解我院情况。深圳大学传播学院学生的毕业设计作品展示了学生的创新能力和专业素养。
          </div>
        </div>

        {/* 瓶子君152风格的名言 */}
        <div className={styles.quoteContainer}>
          <div className={styles.quote}>
            <span className={styles.quoteSymbol}>"</span>
            <span className={styles.quoteText}>毕设作品nb 毕设作品大气 毕设作品大～好き！</span>
            <span className={styles.quoteSymbol}>"</span>
          </div>
        </div>

        <div className={styles.categoryFilter}>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'all' ? styles.active : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            全部
          </button>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'documentary' ? styles.active : ''}`}
            onClick={() => setActiveCategory('documentary')}
          >
            纪录片
          </button>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'marketing' ? styles.active : ''}`}
            onClick={() => setActiveCategory('marketing')}
          >
            营销策划
          </button>
          <button 
            className={`${styles.categoryButton} ${activeCategory === 'newmedia' ? styles.active : ''}`}
            onClick={() => setActiveCategory('newmedia')}
          >
            新媒体
          </button>
        </div>

        <div className={styles.worksGrid}>
          {filteredWorks.map(work => (
            <div 
              key={work.id} 
              className={`${styles.workCard} cute-shadow`}
              onClick={() => openWorkDetail(work)}
            >
              <div className={styles.workImageContainer}>
                <img src={work.images[0]} alt={work.title} className={styles.workImage} />
                <div className={styles.workOverlay}>
                  <div className={styles.workCategory}>{
                    work.category === 'documentary' ? '纪录片' :
                    work.category === 'marketing' ? '营销策划' :
                    '新媒体'
                  }</div>
                </div>
              </div>
              <div className={styles.workInfo}>
                <h3 className={styles.workTitle}>{work.title}</h3>
                <div className={styles.workMeta}>
                  <span className={styles.workAuthor}>{work.author}</span>
                  <span className={styles.workYear}>{work.year}</span>
                </div>
                <p className={styles.workDescription}>
                  {work.description.length > 100 
                    ? work.description.substring(0, 100) + '...' 
                    : work.description}
                </p>
              </div>
              <div className={styles.cuteDecoration}>
                <img src="/images/pzj152.jpg" alt="装饰" className={styles.cuteIcon} />
              </div>
            </div>
          ))}
        </div>

        {/* 作品详情弹窗 */}
        {selectedWork && (
          <div className={styles.workDetailOverlay} onClick={closeWorkDetail}>
            <div className={styles.workDetailContainer} onClick={e => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeWorkDetail}>×</button>
              
              <div className={styles.workDetailContent}>
                <h2 className={styles.workDetailTitle}>{selectedWork.title}</h2>
                
                <div className={styles.workDetailMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>作者：</span>
                    <span className={styles.metaValue}>{selectedWork.author}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>专业：</span>
                    <span className={styles.metaValue}>{selectedWork.major}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>年份：</span>
                    <span className={styles.metaValue}>{selectedWork.year}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>类别：</span>
                    <span className={styles.metaValue}>{
                      selectedWork.category === 'documentary' ? '纪录片' :
                      selectedWork.category === 'marketing' ? '营销策划' :
                      '新媒体'
                    }</span>
                  </div>
                </div>
                
                <div className={styles.workDetailDescription}>
                  <h3>作品简介</h3>
                  <p>{selectedWork.description}</p>
                </div>
                
                <div className={styles.workDetailImages}>
                  <h3>作品展示</h3>
                  <div className={styles.imagesGrid}>
                    {selectedWork.images.map((image, index) => (
                      <div key={index} className={styles.detailImageContainer}>
                        <img src={image} alt={`${selectedWork.title} 图片${index+1}`} className={styles.detailImage} />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={styles.workDetailAwards}>
                  <h3>获奖情况</h3>
                  <ul className={styles.awardsList}>
                    {selectedWork.awards.map((award, index) => (
                      <li key={index}>{award}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={styles.cuteDecoration}>
                <img src="/images/pzj152.jpg" alt="装饰" className={styles.cuteIcon} />
              </div>
            </div>
          </div>
        )}

        {/* 巡礼记录部分 */}
        <section className={styles.visitSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>巡礼记录</h2>
            <div className={styles.titleDecoration}></div>
          </div>
          <div className={styles.visitRecord}>
            <ul className={styles.visitList}>
              <li>此页面在创立的第一天即被学院领导巡礼。</li>
              <li>2023/11/05 - 教务处领导访问</li>
              <li>2023/12/20 - 行业专家访问</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 