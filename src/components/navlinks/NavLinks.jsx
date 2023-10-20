"use client";
import Link from "next/link";
import React from "react";
import styles from "./navLinks.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const NavLinks = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Link
        href="/"
        className={`${theme === "dark" ? styles.dark : styles.light}`}
      >
        Homepage
      </Link>

      <Link
        href="/"
        className={`${theme === "dark" ? styles.dark : styles.light}`}
      >
        Contact
      </Link>
      <Link
        href="/"
        className={`${theme === "dark" ? styles.dark : styles.light}`}
      >
        About
      </Link>
    </>
  );
};
export default NavLinks;
