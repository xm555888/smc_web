'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './student.module.css';

export default function Student() {
  const [activeTab, setActiveTab] = useState('activities');
  const [expandedActivity, setExpandedActivity] = useState(null);

  // 学生活动数据
  const activities = [
    {
      id: 1,
      title: '传媒文化节',
      date: '2023年11月',
      description: '传播学院年度文化盛事，包括短片大赛、创意海报展、媒体沙龙等多项活动，展示学生创意才华。',
      images: ['/images/carousel1.jpg', '/images/carousel2.jpg'],
      highlights: [
        '短片大赛吸引50余部作品参赛',
        '创意海报展展出100余幅优秀作品',
        '媒体沙龙邀请10位业界嘉宾分享经验'
      ]
    },
    {
      id: 2,
      title: '新生迎新晚会',
      date: '2023年9月',
      description: '为欢迎新生举办的主题晚会，通过精彩节目和互动游戏，帮助新生了解学院文化，融入大学生活。',
      images: ['/images/carousel3.jpg', '/images/news2.jpg'],
      highlights: [
        '精心编排20余个特色节目',
        '全院师生共同参与互动环节',
        '设置学院传统文化展示区'
      ]
    },
    {
      id: 3,
      title: '传媒实践周',
      date: '2023年7月',
      description: '组织学生深入媒体机构、企业进行实地考察和实习，将课堂知识与行业实践相结合。',
      images: ['/images/news3.jpg', '/images/news4.jpg'],
      highlights: [
        '与20家媒体机构建立实习合作',
        '300余名学生参与实践活动',
        '举办5场行业分享会'
      ]
    },
    {
      id: 4,
      title: '毕业作品展',
      date: '2023年6月',
      description: '展示应届毕业生的优秀毕业作品，包括纪录片、广告创意、新媒体产品等，展现学生四年学习成果。',
      images: ['/images/carousel1.jpg', '/images/news3.jpg'],
      highlights: [
        '展出50余件优秀毕业作品',
        '邀请业界专家进行点评指导',
        '吸引1000余名观众参观'
      ]
    }
  ];

  // 学生组织数据
  const organizations = [
    {
      id: 1,
      name: '学生会',
      logo: '/images/pzj152.jpg',
      description: '传播学院学生自治组织，负责组织学院各类学生活动，服务学生学习生活，传达学生意见建议。',
      departments: ['主席团', '学习部', '宣传部', '文艺部', '体育部', '外联部', '生活部']
    },
    {
      id: 2,
      name: '团委',
      logo: '/images/pzj152.jpg',
      description: '传播学院团委是学院党委领导下的群众组织，负责组织开展思想政治教育、志愿服务、社会实践等活动，引领青年学生健康成长。',
      departments: ['书记团', '组织部', '宣传部', '实践部', '志愿者工作部']
    },
    {
      id: 3,
      name: '心理协会',
      logo: '/images/pzj152.jpg',
      description: '致力于关注学生心理健康，通过心理讲座、团体辅导、心理游戏等活动，帮助学生缓解压力，促进心理健康发展。',
      departments: ['会长团', '活动部', '宣传部', '外联部', '秘书处']
    }
  ];

  // 就业指导数据
  const careerGuidance = [
    {
      id: 1,
      title: '行业导航',
      icon: '🧭',
      content: '定期举办传媒行业就业形势分析会，邀请行业专家解读就业趋势，帮助学生了解行业发展方向。'
    },
    {
      id: 2,
      title: '简历指导',
      icon: '📝',
      content: '提供一对一简历修改服务，组织简历制作工作坊，指导学生制作专业、有竞争力的求职简历。'
    },
    {
      id: 3,
      title: '面试训练',
      icon: '🎯',
      content: '开展模拟面试活动，邀请企业HR参与指导，提升学生面试技巧和表达能力。'
    },
    {
      id: 4,
      title: '校友分享',
      icon: '👨‍🎓',
      content: '组织优秀校友返校分享就业经验，建立校友职业发展交流平台，促进在校生与校友的互动。'
    },
    {
      id: 5,
      title: '招聘信息',
      icon: '📢',
      content: '整合发布传媒行业招聘信息，组织校园招聘会，为学生提供丰富的就业机会。'
    },
    {
      id: 6,
      title: '创业指导',
      icon: '🚀',
      content: '举办创业讲座和创业计划大赛，提供创业咨询和资源对接，支持学生创新创业。'
    }
  ];

  // 切换展开的活动
  const toggleActivity = (id) => {
    if (expandedActivity === id) {
      setExpandedActivity(null);
    } else {
      setExpandedActivity(id);
    }
  };

  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>学生工作</h1>
          <div className={styles.titleDecoration}></div>
        </div>

        {/* 萌娘百科风格的提示框 */}
        <div className={styles.moegirlNotice}>
          <div className={styles.noticeIcon}>ℹ️</div>
          <div className={styles.noticeContent}>
            <strong>深大传播学院欢迎您参与学生活动☆</strong><br />
            欢迎对学生工作感兴趣的您了解我院情况。深圳大学传播学院致力于培养学生综合素质，促进学生全面发展。
          </div>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'activities' ? styles.active : ''}`}
              onClick={() => setActiveTab('activities')}
            >
              学生活动
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'organizations' ? styles.active : ''}`}
              onClick={() => setActiveTab('organizations')}
            >
              学生组织
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'career' ? styles.active : ''}`}
              onClick={() => setActiveTab('career')}
            >
              就业指导
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'activities' && (
              <div className={styles.activitiesContent}>
                <h2 className={styles.sectionTitle}>学生活动</h2>
                
                {/* 瓶子君152风格的名言 */}
                <div className={styles.quoteContainer}>
                  <div className={styles.quote}>
                    <span className={styles.quoteSymbol}>"</span>
                    <span className={styles.quoteText}>学生活动nb 学生活动大气 学生活动大～好き！</span>
                    <span className={styles.quoteSymbol}>"</span>
                  </div>
                </div>

                <div className={styles.activitiesList}>
                  {activities.map(activity => (
                    <div 
                      key={activity.id} 
                      className={`${styles.activityCard} cute-border cute-shadow ${expandedActivity === activity.id ? styles.expanded : ''}`}
                    >
                      <div className={styles.activityHeader} onClick={() => toggleActivity(activity.id)}>
                        <h3 className={styles.activityTitle}>{activity.title}</h3>
                        <div className={styles.activityDate}>{activity.date}</div>
                        <div className={styles.expandIcon}>
                          {expandedActivity === activity.id ? '▲' : '▼'}
                        </div>
                      </div>
                      
                      <div className={styles.activityContent}>
                        <p className={styles.activityDescription}>{activity.description}</p>
                        
                        <div className={styles.activityDetails}>
                          <div className={styles.activityImages}>
                            {activity.images.map((image, index) => (
                              <div key={index} className={styles.activityImageContainer}>
                                <img src={image} alt={`${activity.title} 图片${index+1}`} className={styles.activityImage} />
                              </div>
                            ))}
                          </div>
                          
                          <div className={styles.activityHighlights}>
                            <h4>活动亮点</h4>
                            <ul>
                              {activity.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
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

            {activeTab === 'organizations' && (
              <div className={styles.organizationsContent}>
                <h2 className={styles.sectionTitle}>学生组织</h2>
                
                {/* 瓶子君152风格的警告框 */}
                <div className={styles.warningContainer}>
                  <div className={styles.warningIcon}>⚠️</div>
                  <div className={styles.warningText}>
                    和家人一同浏览学生组织页面可能促进家庭和谐，并导致家人之间产生进一步的思想交流。<strong>请浏览者在公共场所浏览本页面时保持谨慎！</strong>
                  </div>
                </div>

                <div className={styles.organizationsGrid}>
                  {organizations.map(org => (
                    <div key={org.id} className={`${styles.organizationCard} cute-shadow`}>
                      <div className={styles.organizationHeader}>
                        <div className={styles.organizationLogo}>
                          <img src={org.logo} alt={org.name} />
                        </div>
                        <h3 className={styles.organizationName}>{org.name}</h3>
                      </div>
                      
                      <div className={styles.organizationInfo}>
                        <p className={styles.organizationDescription}>{org.description}</p>
                        
                        <div className={styles.organizationDepartments}>
                          <h4>部门设置</h4>
                          <div className={styles.departmentTags}>
                            {org.departments.map((dept, index) => (
                              <span key={index} className={styles.departmentTag}>{dept}</span>
                            ))}
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

            {activeTab === 'career' && (
              <div className={styles.careerContent}>
                <h2 className={styles.sectionTitle}>就业指导</h2>
                
                {/* 瓶子君152风格的名言 */}
                <div className={styles.quoteContainer}>
                  <div className={styles.quote}>
                    <span className={styles.quoteSymbol}>"</span>
                    <span className={styles.quoteText}>很久以后，当我回忆我的求职经历，那我觉得真的是相当精彩啊！</span>
                    <span className={styles.quoteSymbol}>"</span>
                  </div>
                  <div className={styles.quoteAuthor}>——某传院毕业生</div>
                </div>

                <div className={styles.careerGrid}>
                  {careerGuidance.map(item => (
                    <div key={item.id} className={`${styles.careerCard} cute-shadow`}>
                      <div className={styles.careerIcon}>{item.icon}</div>
                      <h3 className={styles.careerTitle}>{item.title}</h3>
                      <p className={styles.careerContent}>{item.content}</p>
                      <div className={styles.cuteDecoration}>
                        <img src="/images/pzj152.jpg" alt="装饰" className={styles.cuteIcon} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.careerContact}>
                  <h3>就业咨询</h3>
                  <p>就业指导老师：张老师</p>
                  <p>联系电话：0755-26536122</p>
                  <p>办公地点：传播学院L7栋305室</p>
                  <p>咨询时间：周一至周五 9:00-17:00</p>
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
              <li>此页面在创立的第一天即被学生会主席巡礼。</li>
              <li>2023/10/25 - 学工处领导访问</li>
              <li>2023/11/10 - 辅导员团队访问</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 