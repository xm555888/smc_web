'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './undergraduate.module.css';

export default function Undergraduate() {
  const [activeTab, setActiveTab] = useState('intro');

  const majors = [
    {
      id: 'journalism',
      name: '新闻学',
      description: '培养具有扎实的新闻理论功底和实践能力的全媒体新闻人才。',
      courses: ['新闻学概论', '新闻采访与写作', '新闻编辑', '媒介法规与伦理', '融媒体新闻实务'],
      careers: ['记者', '编辑', '媒体运营', '公关专员', '政府新闻发言人'],
      image: '/images/carousel1.jpg'
    },
    {
      id: 'advertising',
      name: '广告学',
      description: '培养具有创意思维和策划能力的广告与营销传播人才。',
      courses: ['广告学概论', '广告创意', '广告策划', '品牌传播', '市场营销'],
      careers: ['广告策划', '创意总监', '媒介策划', '品牌经理', '市场分析师'],
      image: '/images/carousel3.jpg'
    },
    {
      id: 'newmedia',
      name: '网络与新媒体',
      description: '培养熟悉数字媒体技术与内容创作的新媒体运营人才。',
      courses: ['新媒体概论', '数据新闻', '网络传播', '用户体验设计', '新媒体运营'],
      careers: ['新媒体运营', '内容创作', 'UI/UX设计师', '数据分析师', '社交媒体经理'],
      image: '/images/news2.jpg'
    }
  ];

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>本科教育</h1>
          <div className={styles.titleDecoration}></div>
        </div>
        
        {/* 萌娘百科风格的提示框 */}
        <div className={styles.moegirlNotice}>
          <div className={styles.noticeIcon}>ℹ️</div>
          <div className={styles.noticeContent}>
            <strong>深大传播学院欢迎您了解本科教育☆</strong><br />
            欢迎对本科教育感兴趣的您了解我院情况。深圳大学传播学院致力于培养具有国际视野、创新精神和实践能力的高素质传媒人才。
          </div>
        </div>
        
        {/* 瓶子君152风格的名言 */}
        <div className={styles.quoteContainer}>
          <div className={styles.quote}>
            <span className={styles.quoteSymbol}>"</span>
            <span className={styles.quoteText}>传播学院的本科教育，不仅是知识的传授，更是思想的碰撞与创意的激发！</span>
            <span className={styles.quoteSymbol}>"</span>
          </div>
          <div className={styles.quoteAuthor}>——某传院毕业生</div>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'intro' ? styles.active : ''}`}
              onClick={() => setActiveTab('intro')}
            >
            专业介绍
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'plan' ? styles.active : ''}`}
              onClick={() => setActiveTab('plan')}
            >
              培养方案
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'practice' ? styles.active : ''}`}
              onClick={() => setActiveTab('practice')}
            >
              实践教学
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'intro' && (
              <div className={styles.introContent}>
                <h2 className={styles.sectionTitle}>专业介绍</h2>
                <p className={styles.introText}>
                  深圳大学传播学院本科教育设有新闻学、广告学、网络与新媒体三个专业，
                  致力于培养具有国际视野、创新精神和实践能力的高素质传媒人才。
                </p>

                <div className={styles.majorsGrid}>
                  {majors.map(major => (
                    <div key={major.id} className={`${styles.majorCard} cute-shadow`}>
                      <div className={styles.majorImageContainer}>
                        <img src={major.image} alt={major.name} className={styles.majorImage} />
                        <div className={styles.majorOverlay}>
                          <h3 className={styles.majorName}>{major.name}</h3>
                        </div>
                      </div>
                      <div className={styles.majorInfo}>
                        <p className={styles.majorDescription}>{major.description}</p>
                        <div className={styles.majorDetails}>
                          <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>核心课程</h4>
                            <ul className={styles.detailList}>
                              {major.courses.map((course, index) => (
                                <li key={index}>{course}</li>
                              ))}
                            </ul>
                          </div>
                          <div className={styles.detailSection}>
                            <h4 className={styles.detailTitle}>就业方向</h4>
                            <ul className={styles.detailList}>
                              {major.careers.map((career, index) => (
                                <li key={index}>{career}</li>
                              ))}
                            </ul>
                          </div>
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

            {activeTab === 'plan' && (
              <div className={styles.planContent}>
                <h2 className={styles.sectionTitle}>培养方案</h2>
                <div className={`${styles.planCard} cute-border cute-shadow`}>
                  <h3 className={styles.planTitle}>培养目标</h3>
                  <p className={styles.planText}>
                    本科教育旨在培养具备扎实的专业理论知识和实践能力，能够在新闻、广播电视、广告、新媒体等领域从事采编、制作、策划、运营等工作的高素质应用型人才。
                  </p>

                  <h3 className={styles.planTitle}>培养要求</h3>
                  <div className={styles.requirementsList}>
                    <div className={styles.requirementItem}>
                      <div className={styles.requirementIcon}>1</div>
                      <div className={styles.requirementText}>掌握马克思主义新闻观和传播学基本理论</div>
                    </div>
                    <div className={styles.requirementItem}>
                      <div className={styles.requirementIcon}>2</div>
                      <div className={styles.requirementText}>具备良好的人文素养和社会责任感</div>
                    </div>
                    <div className={styles.requirementItem}>
                      <div className={styles.requirementIcon}>3</div>
                      <div className={styles.requirementText}>熟练掌握专业技能和方法</div>
                    </div>
                    <div className={styles.requirementItem}>
                      <div className={styles.requirementIcon}>4</div>
                      <div className={styles.requirementText}>具有创新思维和团队协作能力</div>
                    </div>
                    <div className={styles.requirementItem}>
                      <div className={styles.requirementIcon}>5</div>
                      <div className={styles.requirementText}>了解传媒行业发展动态和前沿技术</div>
                    </div>
                  </div>

                  <h3 className={styles.planTitle}>学制与学位</h3>
                  <p className={styles.planText}>
                    标准学制为四年，授予文学学士学位。学生在规定年限内修满规定学分，达到培养要求，准予毕业并授予学位。
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'practice' && (
              <div className={styles.practiceContent}>
                <h2 className={styles.sectionTitle}>实践教学</h2>
                <div className={styles.practiceGrid}>
                  <div className={`${styles.practiceCard} cute-shadow`}>
                    <div className={styles.practiceIcon}>🎬</div>
                    <h3 className={styles.practiceTitle}>专业实习</h3>
                    <p className={styles.practiceText}>
                      学院与多家媒体机构、广告公司、互联网企业建立了实习基地，为学生提供专业实习机会。
                    </p>
                  </div>
                  <div className={`${styles.practiceCard} cute-shadow`}>
                    <div className={styles.practiceIcon}>🏆</div>
                    <h3 className={styles.practiceTitle}>学科竞赛</h3>
                    <p className={styles.practiceText}>
                      鼓励学生参加"挑战杯"、"互联网+"、"大广赛"等各类专业竞赛，提升创新能力。
                    </p>
                  </div>
                  <div className={`${styles.practiceCard} cute-shadow`}>
                    <div className={styles.practiceIcon}>🔬</div>
                    <h3 className={styles.practiceTitle}>实验教学</h3>
                    <p className={styles.practiceText}>
                      学院拥有先进的传媒实验中心，包括融媒体实验室、视听实验室、VR实验室等。
                    </p>
                  </div>
                  <div className={`${styles.practiceCard} cute-shadow`}>
                    <div className={styles.practiceIcon}>🌐</div>
                    <h3 className={styles.practiceTitle}>创新项目</h3>
                    <p className={styles.practiceText}>
                      设立大学生创新创业训练计划项目，支持学生开展科研和创业实践。
                    </p>
                  </div>
                </div>

                <div className={`${styles.practiceHighlight} cute-border cute-shadow`}>
                  <h3 className={styles.highlightTitle}>特色实践平台</h3>
                  <div className={styles.highlightContent}>
                    <div className={styles.highlightItem}>
                      <div className={styles.highlightImageContainer}>
                        <img src="/images/news1.jpg" alt="传媒国家级实验教学示范中心" className={styles.highlightImage} />
                      </div>
                      <h4>传媒国家级实验教学示范中心</h4>
                      <p>提供先进的传媒实验设备和环境，支持学生进行新闻采编、视听制作、广告创意等实践活动。</p>
                    </div>
                    <div className={styles.highlightItem}>
                      <div className={styles.highlightImageContainer}>
                        <img src="/images/news3.jpg" alt="深圳大学传媒与文化发展研究中心" className={styles.highlightImage} />
                      </div>
                      <h4>深圳大学传媒与文化发展研究中心</h4>
                      <p>聚焦传媒与文化发展研究，为学生提供参与学术研究和文化项目的实践机会。</p>
                    </div>
                    <div className={styles.highlightItem}>
                      <div className={styles.highlightImageContainer}>
                        <img src="/images/news5.jpg" alt="深圳大学媒体融合与国际传播研究中心" className={styles.highlightImage} />
                      </div>
                      <h4>深圳大学媒体融合与国际传播研究中心</h4>
                      <p>探索媒体融合发展与国际传播创新，为学生提供跨媒体实践和国际传播项目参与机会。</p>
                    </div>
                    <div className={styles.highlightItem}>
                      <div className={styles.highlightImageContainer}>
                        <img src="/images/news2.jpg" alt="深圳城市传播创新研究中心" className={styles.highlightImage} />
                      </div>
                      <h4>深圳城市传播创新研究中心</h4>
                      <p>关注城市传播与创新发展，为学生提供城市品牌传播、城市形象设计等实践项目。</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 