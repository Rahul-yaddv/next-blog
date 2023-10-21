"use client";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/posts/trekking-in-snow-an-enchanting-adventure-in-europe`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const Featured = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        console.log(result);
        setData(result);
      } catch (error) {
        // Handle any errors if the promise is rejected
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const truncateText = (text, limit) => {
    if (text) {
      const words = text.split(" ");
      if (words.length <= limit) {
        return text;
      }
      const truncatedText = words.slice(0, limit).join(" ");
      return truncatedText + " . . ."; // Add an ellipsis to indicate truncated content.
    }
    return ""; // Return an empty string or handle it as needed when data.desc is undefined.
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Rahul here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={data?.img} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{}</h1>
          <p
            className={styles.postDesc}
            dangerouslySetInnerHTML={{ __html: truncateText(data?.desc, 80) }}
          ></p>
          <Link
            href={"/posts/trekking-in-snow-an-enchanting-adventure-in-europe"}
          >
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
