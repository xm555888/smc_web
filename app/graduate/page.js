'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './graduate.module.css';

export default function Graduate() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>研究生教育</h1>
          <div className={styles.titleDecoration}></div>
        </div>
        
        {/* 萌娘百科风格的提示框 */}
        <div className={styles.moegirlNotice}>
          <div className={styles.noticeIcon}>ℹ️</div>
          <div className={styles.noticeContent}>
            <strong>深大传播学院欢迎您了解研究生教育☆</strong><br />
            欢迎对研究生教育感兴趣的您了解我院情况。深圳大学传播学院致力于培养具有国际视野、创新精神和研究能力的高层次传媒人才。
          </div>
        </div>

        <section className={styles.introSection}>
          <div className={`${styles.introCard} cute-shadow`}>
            <h2 className={styles.sectionTitle}>研究生教育概况</h2>
            <p className={styles.introText}>
              深圳大学传播学院拥有新闻传播学一级学科硕士点和博士点，以及新闻与传播专业硕士学位授予权。
              学院致力于培养具有国际视野、创新精神和实践能力的高层次传媒人才。
            </p>
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>2006</div>
                <div className={styles.statLabel}>硕士点获批</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>2015</div>
                <div className={styles.statLabel}>博士点获批</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>300+</div>
                <div className={styles.statLabel}>在读研究生</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>20+</div>
                <div className={styles.statLabel}>博士生导师</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.programsSection}>
          <h2 className={styles.sectionTitle}>研究生项目</h2>
          <div className={styles.programsGrid}>
            <div className={`${styles.programCard} cute-border cute-shadow`}>
              <div className={styles.programHeader}>
                <h3 className={styles.programTitle}>学术型硕士</h3>
                <div className={styles.programBadge}>学制：3年</div>
              </div>
              <div className={styles.programContent}>
                <div className={styles.programDescription}>
                  <p>新闻传播学一级学科硕士点，培养具有扎实理论基础和研究能力的学术型人才。</p>
                </div>
                <div className={styles.programDetails}>
                  <div className={styles.detailItem}>
                    <h4 className={styles.detailTitle}>研究方向</h4>
                    <ul className={styles.detailList}>
                      <li>新闻学理论与实践</li>
                      <li>传播学理论与方法</li>
                      <li>广告学与营销传播</li>
                      <li>新媒体与数字传播</li>
                      <li>视觉传达与媒介文化</li>
                    </ul>
                  </div>
                  <div className={styles.detailItem}>
                    <h4 className={styles.detailTitle}>核心课程</h4>
                    <ul className={styles.detailList}>
                      <li>传播学研究方法</li>
                      <li>传播学理论前沿</li>
                      <li>新闻传播史研究</li>
                      <li>媒介批评理论</li>
                      <li>学术论文写作</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.cuteDecoration}>
                <img src="/images/pzj152.jpg" alt="装饰" className={styles.cuteIcon} />
              </div>
            </div>

            <div className={`${styles.programCard} cute-border cute-shadow`}>
              <div className={styles.programHeader}>
                <h3 className={styles.programTitle}>专业型硕士</h3>
                <div className={styles.programBadge}>学制：2年</div>
              </div>
              <div className={styles.programContent}>
                <div className={styles.programDescription}>
                  <p>新闻与传播专业硕士，培养具有较强专业技能和实践能力的应用型人才。</p>
                </div>
                <div className={styles.programDetails}>
                  <div className={styles.detailItem}>
                    <h4 className={styles.detailTitle}>专业方向</h4>
                    <ul className={styles.detailList}>
                      <li>全媒体新闻与传播</li>
                      <li>广告与品牌传播</li>
                      <li>影视与数字创意</li>
                      <li>政务与公共传播</li>
                      <li>国际传播与跨文化传播</li>
                    </ul>
                  </div>
                  <div className={styles.detailItem}>
                    <h4 className={styles.detailTitle}>核心课程</h4>
                    <ul className={styles.detailList}>
                      <li>媒介融合与创新</li>
                      <li>传播策划与实务</li>
                      <li>数据新闻与可视化</li>
                      <li>品牌传播案例分析</li>
                      <li>专业实习</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.cuteDecoration}>
                <img src="/images/pzj152.jpg" alt="装饰" className={styles.cuteIcon} />
              </div>
            </div>

            <div className={`${styles.programCard} cute-border cute-shadow`}>
              <div className={styles.programHeader}>
                <h3 className={styles.programTitle}>博士研究生</h3>
                <div className={styles.programBadge}>学制：4年</div>
              </div>
              <div className={styles.programContent}>
                <div className={styles.programDescription}>
                  <p>新闻传播学一级学科博士点，培养具有国际视野和创新能力的高层次学术人才。</p>
                </div>
                <div className={styles.programDetails}>
                  <div className={styles.detailItem}>
                    <h4 className={styles.detailTitle}>研究方向</h4>
                    <ul className={styles.detailList}>
                      <li>新闻传播理论与历史</li>
                      <li>数字媒体与传播技术</li>
                      <li>传播政治经济学</li>
                      <li>全球传播与国际传播</li>
                      <li>媒介生态与社会变迁</li>
                    </ul>
                  </div>
                  <div className={styles.detailItem}>
                    <h4 className={styles.detailTitle}>核心课程</h4>
                    <ul className={styles.detailList}>
                      <li>传播学经典理论研究</li>
                      <li>高级研究方法</li>
                      <li>传播学前沿问题研究</li>
                      <li>学术论文写作与发表</li>
                      <li>跨学科研究方法</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.cuteDecoration}>
                <img src="/images/pzj152.jpg" alt="装饰" className={styles.cuteIcon} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.admissionSection}>
          <h2 className={styles.sectionTitle}>招生信息</h2>
          <div className={`${styles.admissionCard} cute-border cute-shadow`}>
            <div className={styles.admissionContent}>
              <div className={styles.admissionItem}>
                <h3 className={styles.admissionTitle}>招生计划</h3>
                <p className={styles.admissionText}>
                  每年招收学术型硕士约50人，专业型硕士约80人，博士研究生约15人。具体招生计划以当年招生简章为准。
                </p>
              </div>
              <div className={styles.admissionItem}>
                <h3 className={styles.admissionTitle}>报考条件</h3>
                <p className={styles.admissionText}>
                  硕士研究生：具有国家承认的本科学历的应届或往届毕业生；<br />
                  博士研究生：具有硕士学位或同等学力的应届或往届毕业生。
                </p>
              </div>
              <div className={styles.admissionItem}>
                <h3 className={styles.admissionTitle}>考试科目</h3>
                <p className={styles.admissionText}>
                  学术型硕士：政治、英语、新闻传播学基础、新闻传播学综合；<br />
                  专业型硕士：政治、英语、新闻与传播专业基础、新闻与传播专业综合；<br />
                  博士研究生：英语、新闻传播学理论、专业综合。
                </p>
              </div>
              <div className={styles.admissionItem}>
                <h3 className={styles.admissionTitle}>奖助体系</h3>
                <p className={styles.admissionText}>
                  学院设有国家奖学金、学业奖学金、助研助教岗位、企业奖学金等多种奖助学金，支持研究生完成学业。
                </p>
              </div>
            </div>
            <div className={styles.admissionContact}>
              <div className={styles.contactItem}>
                <h4>咨询电话</h4>
                <p>0755-26536122</p>
              </div>
              <div className={styles.contactItem}>
                <h4>邮箱</h4>
                <p>cmc_graduate@szu.edu.cn</p>
              </div>
              <div className={styles.contactItem}>
                <h4>官网</h4>
                <p>http://cmc.szu.edu.cn/graduate</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 