import Image from 'next/image';
import styles from './featured.module.css';

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,Rahul Yadav here!</b>Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}></div>
        <Image src='./p1.jpg' alt='' fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>
          Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
        </h1>
        <p className={styles.postDesc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fugiat
          sint eligendi odit magni incidunt quas saepe animi doloribus eveniet
          similique, optio delectus officiis, et sapiente obcaecati repellendus
          eaque expedita?
        </p>
        <button className={styles.button}>Read More </button>
      </div>
    </div>
  );
}

export default Featured;
