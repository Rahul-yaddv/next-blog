import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import NavLinks from "../navlinks/NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <a href="https://facebook.com">
          <Image
            src="/facebook.png"
            className={styles.social}
            alt="facebook"
            width={24}
            height={24}
          />
        </a>
        <a href="https://instagram.com">
          <Image
            className={styles.social}
            src="/instagram.png"
            alt="instagram"
            width={24}
            height={24}
          />
        </a>
        <a href="https://tiktok.com">
          <Image
            className={styles.social}
            src="/tiktok1.png"
            alt="tiktok"
            width={24}
            height={24}
          />
        </a>
        <a href="https://youtube.com">
          <Image
            className={styles.social}
            src="/youtube.png"
            alt="youtube"
            width={24}
            height={24}
          />
        </a>
      </div>
      <div className={styles.logo}>Next-blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <NavLinks />
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
