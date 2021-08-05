import Head from 'next/head'
import Header from '../components/Header'

import 'tailwindcss/tailwind.css'
import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AnimesHome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative min-h-screen after:bg-home after:bg-center after:bg-no-repeat after:bg-fixed after:absolute after:inset-0'>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}