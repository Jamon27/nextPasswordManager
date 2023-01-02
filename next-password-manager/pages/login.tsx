import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Simple password manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <form>
          <div className='container'>
            <p>Пожалуйста, введите логин и пароль.</p>
            <label htmlFor="login"><b>Логин</b></label>
            <input type="text" placeholder="Введите логин" name="login"
             required />
            <label htmlFor="password"><b>Пароль</b></label>
            <input type="password" placeholder="Введите пароль" name="password" required />
            <button type="submit">Вход</button>
          </div>
        </form>
      </main>
    </>
  )
}
