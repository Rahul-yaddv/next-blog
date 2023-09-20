'use client';
import Image from 'next/image';
import styles from './themeToggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

function ThemeToggle() {
  const { toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <Image src='/moon.png' alt='' width={14} height={14}></Image>
      <div className={styles.ball}></div>
      <Image src='/sun.png' alt='' width={14} height={14}></Image>
    </div>
  );
}

export default ThemeToggle;
