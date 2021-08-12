import Head from 'next/head'
import { SubcribeButton } from '../components/SubcribeButton'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>
            News about <br /> 
            the <span>React</span> World.
          </h1>
          <p>
            Get acess to all publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubcribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
