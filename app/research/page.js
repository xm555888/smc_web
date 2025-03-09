'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './research.module.css';

export default function Research() {
  const [activeTab, setActiveTab] = useState('institutes');
  const [expandedProject, setExpandedProject] = useState(null);

  // 研究机构数据
  const institutes = [
    {
      id: 1,
      name: '新媒体研究中心',
      description: '致力于新媒体传播理论与应用研究，探索数字时代传播规律与创新实践。',
      director: '张教授',
      image: '/images/carousel1.jpg'
    },
    {
      id: 2,
      name: '传播与社会研究所',
      description: '关注传播与社会互动关系，研究媒介对社会变迁的影响与作用机制。',
      director: '李副教授',
      image: '/images/carousel2.jpg'
    },
    {
      id: 3,
      name: '视觉传播实验室',
      description: '专注于视觉传播效果研究，探索视觉元素在传播过程中的作用与规律。',
      director: '王讲师',
      image: '/images/carousel3.jpg'
    },
    {
      id: 4,
      name: '全球传播研究中心',
      description: '研究国际传播与跨文化传播问题，促进中国与世界的文化交流与互动。',
      director: '刘教授',
      image: '/images/news2.jpg'
    }
  ];

  // 研究项目数据
  const projects = [
    {
      id: 1,
      title: '数字媒体时代的信息传播与社会认知研究',
      category: '国家社科基金重点项目',
      year: '2023-2025',
      leader: '张教授',
      description: '本项目探讨数字媒体环境下信息传播对社会认知的影响机制，分析数字媒体使用与社会认知变迁的关系，为理解数字时代的传播效果提供理论支持。',
      achievements: [
        '发表SSCI论文3篇，CSSCI论文5篇',
        '出版专著《数字媒体与社会认知》',
        '举办学术研讨会2场'
      ]
    },
    {
      id: 2,
      title: '粤港澳大湾区媒介融合发展研究',
      category: '广东省社科规划项目',
      year: '2022-2024',
      leader: '李副教授',
      description: '本项目聚焦粤港澳大湾区媒介融合发展现状与趋势，分析区域媒体协同创新机制，为推动大湾区媒体深度融合提供政策建议。',
      achievements: [
        '发表CSSCI论文4篇',
        '完成调研报告2份',
        '举办湾区媒体论坛1场'
      ]
    },
    {
      id: 3,
      title: '短视频平台算法推荐与用户信息茧房效应研究',
      category: '教育部人文社科项目',
      year: '2021-2023',
      leader: '王讲师',
      description: '本项目研究短视频平台算法推荐机制对用户信息获取的影响，探讨信息茧房效应的形成机制与破解路径，为优化算法推荐提供理论参考。',
      achievements: [
        '发表SSCI论文2篇，CSSCI论文3篇',
        '开发信息茧房测量工具1套',
        '举办学术工作坊1场'
      ]
    },
    {
      id: 4,
      title: '中国故事国际传播策略研究',
      category: '国家社科基金项目',
      year: '2020-2023',
      leader: '刘教授',
      description: '本项目研究中国故事国际传播的现状与挑战，分析不同文化背景下受众的接受特点，为提升中国国际传播能力提供策略支持。',
      achievements: [
        '发表SSCI论文2篇，CSSCI论文6篇',
        '出版专著《中国故事的国际传播》',
        '完成政策咨询报告3份'
      ]
    }
  ];

  // 学术讲座数据
  const lectures = [
    {
      id: 1,
      title: '人工智能与未来传播',
      speaker: '张三教授（清华大学）',
      date: '2023-12-10',
      location: '传播学院报告厅',
      description: '讲座探讨人工智能技术对传播领域的影响，分析AI驱动的传播变革与未来趋势。'
    },
    {
      id: 2,
      title: '数据新闻的理论与实践',
      speaker: '李四教授（复旦大学）',
      date: '2023-11-15',
      location: '传播学院多媒体教室',
      description: '讲座介绍数据新闻的发展历程、理论框架与实践案例，分享数据新闻创作的方法与技巧。'
    },
    {
      id: 3,
      title: '全球化背景下的文化传播',
      speaker: '王五教授（北京大学）',
      date: '2023-10-20',
      location: '传播学院报告厅',
      description: '讲座分析全球化背景下文化传播的特点与挑战，探讨文化多样性与文化认同的复杂关系。'
    },
    {
      id: 4,
      title: '社交媒体与公共舆论',
      speaker: '赵六教授（中国人民大学）',
      date: '2023-09-25',
      location: '传播学院多媒体教室',
      description: '讲座探讨社交媒体对公共舆论形成的影响，分析网络舆论的特点、规律与引导策略。'
    }
  ];

  // 切换展开的项目
  const toggleProject = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>学术研究</h1>
          <div className={styles.titleDecoration}></div>
        </div>
        
        {/* 萌娘百科风格的提示框 */}
        <div className={styles.moegirlNotice}>
          <div className={styles.noticeIcon}>ℹ️</div>
          <div className={styles.noticeContent}>
            <strong>深大传播学院欢迎您参与学术研究☆</strong><br />
            欢迎对学术研究感兴趣的您了解我院情况。深圳大学传播学院致力于推动传播学科发展，服务社会文化建设。
          </div>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'institutes' ? styles.active : ''}`}
              onClick={() => setActiveTab('institutes')}
            >
              研究机构
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'projects' ? styles.active : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              研究项目
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'lectures' ? styles.active : ''}`}
              onClick={() => setActiveTab('lectures')}
            >
              学术讲座
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'institutes' && (
              <div className={styles.institutesContent}>
                <h2 className={styles.sectionTitle}>研究机构</h2>
                
                {/* 瓶子君152风格的名言 */}
                <div className={styles.quoteContainer}>
                  <div className={styles.quote}>
                    <span className={styles.quoteSymbol}>"</span>
                    <span className={styles.quoteText}>学术研究nb 学术研究大气 学术研究大～好き！</span>
                    <span className={styles.quoteSymbol}>"</span>
                  </div>
                </div>

                <div className={styles.institutesGrid}>
                  {institutes.map(institute => (
                    <div key={institute.id} className={`${styles.instituteCard} cute-shadow`}>
                      <div className={styles.instituteImageContainer}>
                        <img src={institute.image} alt={institute.name} className={styles.instituteImage} />
                        <div className={styles.instituteOverlay}>
                          <h3 className={styles.instituteName}>{institute.name}</h3>
                        </div>
                      </div>
                      <div className={styles.instituteInfo}>
                        <p className={styles.instituteDescription}>{institute.description}</p>
                        <div className={styles.instituteDirector}>
                          <span>负责人：</span>
                          <strong>{institute.director}</strong>
                        </div>
                      </div>
                      <div className={styles.cuteDecoration}>
                        <img src="/images/pzj152.jpg" alt="装饰" className={styles.cuteIcon} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className={styles.projectsContent}>
                <h2 className={styles.sectionTitle}>研究项目</h2>
                
                {/* 瓶子君152风格的名言 */}
                <div className={styles.quoteContainer}>
                  <div className={styles.quote}>
                    <span className={styles.quoteSymbol}>"</span>
                    <span className={styles.quoteText}>很久以后，当我回忆我的科研生涯，那我觉得真他妈的是相当精彩啊！</span>
                    <span className={styles.quoteSymbol}>"</span>
                  </div>
                  <div className={styles.quoteAuthor}>——某传院教授</div>
                </div>

                <div className={styles.projectsList}>
                  {projects.map(project => (
                    <div 
                      key={project.id} 
                      className={`${styles.projectCard} cute-border cute-shadow ${expandedProject === project.id ? styles.expanded : ''}`}
                      onClick={() => toggleProject(project.id)}
                    >
                      <div className={styles.projectHeader}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <div className={styles.projectMeta}>
                          <span className={styles.projectCategory}>{project.category}</span>
                          <span className={styles.projectYear}>{project.year}</span>
                        </div>
                        <div className={styles.projectLeader}>
                          <span>负责人：</span>
                          <strong>{project.leader}</strong>
                        </div>
                        <div className={styles.expandIcon}>
                          {expandedProject === project.id ? '▲' : '▼'}
                        </div>
                      </div>
                      
                      <div className={styles.projectDetails}>
                        <div className={styles.projectDescription}>
                          <h4>项目简介</h4>
                          <p>{project.description}</p>
                        </div>
                        <div className={styles.projectAchievements}>
                          <h4>研究成果</h4>
                          <ul>
                            {project.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className={styles.cuteDecoration}>
                        <img src="/images/pzj152.jpg" alt="装饰" className={styles.cuteIcon} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'lectures' && (
              <div className={styles.lecturesContent}>
                <h2 className={styles.sectionTitle}>学术讲座</h2>
                
                {/* 瓶子君152风格的提示 */}
                <div className={styles.warningContainer}>
                  <div className={styles.warningIcon}>⚠️</div>
                  <div className={styles.warningText}>
                    这是一个有关学术讲座的页面。若恶意添加无中生有的过分内容，将会导致你被<strong>警告</strong>乃至<strong>封禁</strong>。
                  </div>
                </div>

                <div className={styles.lecturesList}>
                  {lectures.map(lecture => (
                    <div key={lecture.id} className={`${styles.lectureCard} cute-shadow`}>
                      <div className={styles.lectureHeader}>
                        <h3 className={styles.lectureTitle}>{lecture.title}</h3>
                        <div className={styles.lectureSpeaker}>{lecture.speaker}</div>
                      </div>
                      <div className={styles.lectureInfo}>
                        <div className={styles.lectureDetail}>
                          <span className={styles.detailIcon}>📅</span>
                          <span>{lecture.date}</span>
                        </div>
                        <div className={styles.lectureDetail}>
                          <span className={styles.detailIcon}>📍</span>
                          <span>{lecture.location}</span>
                        </div>
                      </div>
                      <div className={styles.lectureDescription}>
                        <p>{lecture.description}</p>
                      </div>
                      <div className={styles.cuteDecoration}>
                        <img src="/images/pzj152.jpg" alt="装饰" className={styles.cuteIcon} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 巡礼记录部分 */}
        <section className={styles.visitSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>巡礼记录</h2>
            <div className={styles.titleDecoration}></div>
          </div>
          <div className={styles.visitRecord}>
            <ul className={styles.visitList}>
              <li>此页面在创立的第一天即被学院领导巡礼。</li>
              <li>2023/10/20 - 科研处领导访问</li>
              <li>2023/11/15 - 学术委员会访问</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 