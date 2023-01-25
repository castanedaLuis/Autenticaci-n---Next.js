import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Autenticación whit next-auth</title>
        <meta name="description" content="Autorización creada con la librería next-auth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>


        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href={'/premium'} legacyBehavior>
              <a aria-label='Ir a iniciar sesión'>
                <h2 className={inter.className}>
                  Pagina Premium <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                  Para utilizar la funcionalidad de next-auth
                  que nos provee una excelente forma de autenticar a
                  nuestros usuarios, como por ejemplo delegar la autenticación
                  a otros provedores.
                  Nos ayuda tambien a manejar nuestras paginas protegidas,
                  rutas protegidas, como en este caso.... 
                  <strong>Rutas: <span>/premium</span></strong>
                </p>
              </a>
            </Link>
          </div>

        </div>
      </main>
    </>
  )
}
