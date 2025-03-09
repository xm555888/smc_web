'use client';

import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>深圳大学传播学院</h3>
            <p className={styles.footerText}>地址：深圳市南山区南海大道3688号深圳大学传播学院</p>
            <p className={styles.footerText}>邮编：518060</p>
            <p className={styles.footerText}>电话：0755-26536122</p>
            <p className={styles.footerText}>邮箱：cmc@szu.edu.cn</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>快速链接</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">学院信息</Link></li>
              <li><Link href="/faculty">师资队伍</Link></li>
              <li><Link href="/undergraduate">本科教育</Link></li>
              <li><Link href="/graduate">研究生教育</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>相关链接</h3>
            <ul className={styles.footerLinks}>
              <li><a href="https://www.szu.edu.cn/" target="_blank" rel="noopener noreferrer">深圳大学官网</a></li>
              <li><a href="https://www.szu.edu.cn/xxgk/xxgk.htm" target="_blank" rel="noopener noreferrer">信息公开</a></li>
              <li><a href="https://lib.szu.edu.cn/" target="_blank" rel="noopener noreferrer">图书馆</a></li>
              <li><a href="https://www1.szu.edu.cn/board/" target="_blank" rel="noopener noreferrer">荔园BBS</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} 深圳大学传播学院 版权所有</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 