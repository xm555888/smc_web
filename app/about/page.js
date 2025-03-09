'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './about.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>学院概况</h1>
          <div className={styles.titleDecoration}></div>
        </div>
        
        {/* 萌娘百科风格的提示框 */}
        <div className={styles.moegirlNotice}>
          <div className={styles.noticeIcon}>ℹ️</div>
          <div className={styles.noticeContent}>
            <strong>深大传播学院欢迎您了解学院概况☆</strong><br />
            欢迎对学院概况感兴趣的您了解我院情况。深圳大学传播学院致力于培养具有国际视野、创新精神和实践能力的高素质传媒人才。
          </div>
        </div>

        <section className={styles.aboutSection}>
          <div className={styles.aboutCard}>
            <h2 className={styles.sectionTitle}>学院简介</h2>
            <p className={styles.aboutText}>
              深圳大学传播学院成立于2000年，是华南地区最早成立的传播学院之一，也是深圳大学重点建设学院。
              学院秉承"创新、质量、责任"的办学理念，致力于培养具有国际视野、创新精神和实践能力的高素质传媒人才。
            </p>
            <p className={styles.aboutText}>
              经过二十多年的发展，学院已形成了完整的本科、硕士、博士人才培养体系，拥有新闻传播学一级学科硕士点和博士点，
              以及新闻与传播专业硕士学位授予权。学院现有新闻学、广播电视学、广告学、网络与新媒体四个本科专业，
              其中新闻学为广东省特色重点学科。
            </p>
            <p className={styles.aboutText}>
              学院拥有一支高水平的师资队伍，现有专任教师60余人，其中教授、副教授30余人，博士生导师10余人。
              教师中有国家级人才计划入选者、教育部新世纪优秀人才、广东省"珠江学者"特聘教授等高层次人才。
            </p>
          </div>
        </section>

        <section className={styles.visionSection}>
          <div className={`${styles.visionCard} cute-border cute-shadow`}>
            <div className={styles.visionItem}>
              <h3>办学理念</h3>
              <p>创新、质量、责任</p>
            </div>
            <div className={styles.visionItem}>
              <h3>学院愿景</h3>
              <p>建设国内一流、国际知名的新闻传播学院</p>
            </div>
            <div className={styles.visionItem}>
              <h3>人才培养目标</h3>
              <p>培养具有国际视野、创新精神和实践能力的高素质传媒人才</p>
            </div>
          </div>
        </section>

        <section className={styles.historySection}>
          <h2 className={styles.sectionTitle}>发展历程</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2000年</div>
              <div className={styles.timelineContent}>
                <h3>学院成立</h3>
                <p>深圳大学传播学院正式成立，开设新闻学和广告学两个本科专业。</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2005年</div>
              <div className={styles.timelineContent}>
                <h3>硕士点获批</h3>
                <p>获批新闻传播学一级学科硕士学位授予权。</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2010年</div>
              <div className={styles.timelineContent}>
                <h3>专业扩展</h3>
                <p>增设广播电视学专业，同年获批新闻与传播专业硕士学位授予权。</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2015年</div>
              <div className={styles.timelineContent}>
                <h3>博士点获批</h3>
                <p>获批新闻传播学一级学科博士学位授予权。</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2018年</div>
              <div className={styles.timelineContent}>
                <h3>新专业设立</h3>
                <p>增设网络与新媒体专业，适应媒体融合发展需求。</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2023年</div>
              <div className={styles.timelineContent}>
                <h3>学科建设新成就</h3>
                <p>新闻传播学科进入ESI全球前1%，标志着学院学科建设取得重大突破。</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>联系我们</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3>地址</h3>
              <p>深圳市南山区南海大道3688号深圳大学传播学院</p>
            </div>
            <div className={styles.contactItem}>
              <h3>邮编</h3>
              <p>518060</p>
            </div>
            <div className={styles.contactItem}>
              <h3>电话</h3>
              <p>0755-26536122</p>
            </div>
            <div className={styles.contactItem}>
              <h3>邮箱</h3>
              <p>cmc@szu.edu.cn</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 