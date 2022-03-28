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
            <a href="https://www.instagram.com/carolpansaniballet/" target="_blank">
            @carolpansaniballet
            </a>
          </p>
          <nav>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc493ZZ7QVS3iL5yq2VPNUaQT6BCSoIEd1g19VgnoBIewp9GQ/viewform" 
            target="_blank">
              Matriculas 2022
            </a>
            <a 
            href="https://www.youtube.com/channel/UCt9ERnArzqeaaXgVpYCz-vA" 
            target="_blank">
              Youtube
            </a>
            <a 
            href="https://carolpansaniballet.vercel.app/" 
            target="_blank">
              Site
            </a>
            <a 
            href="https://api.whatsapp.com/send?phone=5519982640644" 
            target="_blank">
              WhatsApp
            </a>
            
          </nav>
          <footer>
            <div>
              <a href="https://www.instagram.com/codeway_/" target= '_blank'>
                <BsInstagram />
              </a>
              <a href="https://www.linkedin.com/in/lucasmateusmarson/" target= '_blank'>
                <FiLinkedin />
              </a>
            </div>
            <div>
              <p><a href="https://www.instagram.com/codeway_/" target="_blank">CodeWay</a></p>
            </div>
          </footer>
        </section>
      </main>
    </>
  )
}
