'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/logo.png" alt="深圳大学传播学院" className={styles.logoImage} />
          </Link>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></div>
        </div>

        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>首页</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>学院信息</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/faculty" className={`${styles.navLink} ${pathname === '/faculty' ? styles.active : ''}`}>师资队伍</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/undergraduate" className={`${styles.navLink} ${pathname === '/undergraduate' ? styles.active : ''}`}>本科教育</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/graduate" className={`${styles.navLink} ${pathname === '/graduate' ? styles.active : ''}`}>研究生教育</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/research" className={`${styles.navLink} ${pathname === '/research' ? styles.active : ''}`}>学术研究</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/student" className={`${styles.navLink} ${pathname === '/student' ? styles.active : ''}`}>学生工作</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/works" className={`${styles.navLink} ${pathname === '/works' ? styles.active : ''}`}>毕设作品</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 