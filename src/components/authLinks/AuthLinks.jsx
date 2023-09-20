import Link from 'next/link';
import styles from './authLinks.module.css';

function AuthLinks() {
  // temorary
  const status = 'notAuthenticated';

  return (
    <>
      {status === 'notAuthenticated' ? (
        <Link href='./login'>Login</Link>
      ) : (
        <>
          <Link href='./write'>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
}

export default AuthLinks;
