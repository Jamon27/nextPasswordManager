import Head from 'next/head'
import Secret from '../components/secret'
import styles from '../styles/Home.module.css'
let secrets = [
  {
    webSite: { name: "abc.com" },
    userInfo: { login: "basb", password: "313233" }
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>My very secret secrets :D</title>
        <meta name="description" content="Simple password manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <main className={styles.main}>
        <div className='container'>
          <p>Привет, Юзернейм!</p>
          {secrets.map((secret) => {
            return (
              <div key={secret.webSite.name}>
                <Secret secret={secret} />
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
