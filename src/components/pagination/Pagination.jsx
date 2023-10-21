"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`, { scroll: false })}
      >
        <p className={styles.buttonText}>Previous</p>
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}`, { scroll: false })}
      >
        <p className={styles.buttonText}>Next</p>
      </button>
    </div>
  );
};

export default Pagination;
