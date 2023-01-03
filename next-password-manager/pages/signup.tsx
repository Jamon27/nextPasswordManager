import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <>
      <Head>
        <title>Регистрация</title>
        <meta name="description" content="Simple password manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <main className={styles.main}>
        <form method='POST' action='/api/signup/'>
          <div className='container'>
            <p>Для регистрации укажите ваше имя, логин и пароль.</p>
            <label htmlFor="name"><b>Имя</b></label>
            <input type="text" placeholder="Введите имя" name="name" required />
            <label htmlFor="login"><b>Логин</b></label>
            <input type="text" placeholder="Введите логин" name="login" required />
            <label htmlFor="password"><b>Пароль</b></label>
            <input type="password" placeholder="Введите пароль" name="password" required />
            <label htmlFor="password"><b>Повторите пароль</b></label>
            <input type="password" placeholder="Повторите пароль" name="repeat-password" required />
            <button type="submit">Вход</button>
          </div>
        </form>
      </main>
    </>
  )
}
