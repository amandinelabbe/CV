import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'LABBE Amandine';
export const siteTitle = 'CV Amandine LABBE';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/ppamandine.png"
              className={utilStyles.borderCircle}
              height={190}
              width={130}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h2 className={utilStyles.headingLg}>A la recherche d'un job étudiant à partir du 14 août 2023</h2>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
        </div>
      )}
    </div>
  );
}