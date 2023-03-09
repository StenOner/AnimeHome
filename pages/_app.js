import Head from 'next/head'
import Header from '../components/Header'

import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AnimesHome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='relative min-h-[calc(100vh-4rem)] after:bg-home after:bg-center after:bg-no-repeat after:bg-fixed after:absolute after:inset-0'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
