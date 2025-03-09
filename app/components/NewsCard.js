'use client';

import Link from 'next/link';
import styles from './NewsCard.module.css';

const NewsCard = ({ title, date, summary, imageUrl, link }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.newsImageContainer}>
        <img src={imageUrl} alt={title} className={styles.newsImage} />
        <div className={styles.newsDate}>{date}</div>
      </div>
      <div className={styles.newsContent}>
        <h3 className={styles.newsTitle}>{title}</h3>
        <p className={styles.newsSummary}>{summary}</p>
        <Link href={link} className={styles.newsReadMore}>
          阅读更多 <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard; 