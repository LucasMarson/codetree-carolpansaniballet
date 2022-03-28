import styles from './home.module.scss'
import { BsInstagram  } from 'react-icons/bs'
import { FiLinkedin } from 'react-icons/fi'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WayTree</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <img src="/images/logo.png" />  
          <p>
            <a href="https://www.instagram.com/carolpansaniballet/" target="_blank" rel="noopener">
            @carolpansaniballet
            </a>
          </p>
          <nav>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc493ZZ7QVS3iL5yq2VPNUaQT6BCSoIEd1g19VgnoBIewp9GQ/viewform" 
            target="_blank" 
            rel="noopener">
              Matriculas 2022
            </a>
            <a 
            href="https://www.youtube.com/channel/UCt9ERnArzqeaaXgVpYCz-vA" 
            target="_blank" 
            rel="noopener">
              Youtube
            </a>
            <a 
            href="https://carolpansaniballet.vercel.app/" 
            target="_blank"
            rel="noopener"
            >
              Site
            </a>
            <a 
            href="https://api.whatsapp.com/send?phone=5519982640644" 
            target="_blank"
            rel="noopener"
            >
              WhatsApp
            </a>
            
          </nav>
          <footer>
            <div>
              <a href="https://www.instagram.com/codeway_/" target= '_blank' rel="noopener">
                <BsInstagram />
              </a>
              <a href="https://www.linkedin.com/in/lucasmateusmarson/" target= '_blank' rel="noopener">
                <FiLinkedin />
              </a>
            </div>
            <div>
              <p><a href="https://www.instagram.com/codeway_/" target="_blank" rel="noopener">CodeWay</a></p>
            </div>
          </footer>
        </section>
      </main>
    </>
  )
}
