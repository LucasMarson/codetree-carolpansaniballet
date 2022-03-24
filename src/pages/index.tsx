import styles from './home.module.scss'
import { BsInstagram  } from 'react-icons/bs'
import { FiLinkedin, FiTwitter } from 'react-icons/fi'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WayTree</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <img src="/images/rosto.png" />
          <p>@codeway_</p>
          <nav>
            <button type="button">Youtube</button>
            <button type="button">Site</button>
            <button type="button">Matriculas 2022</button>
          </nav>
          <footer>
            <div>
              <a href="/" target= '_blank'>
                <FiTwitter />
              </a>
              <a href="/" target= '_blank'>
                <BsInstagram />
              </a>
              <a href="/" target= '_blank'>
                <FiLinkedin />
              </a>
            </div>
            <div>
              <p>CodeWay</p>
            </div>
          </footer>
        </section>
      </main>
    </>
    
  )
}
