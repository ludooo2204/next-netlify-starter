import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <div className='rectangle'
        > 
        <div className="left"></div>
        <div className="right"></div>
        </div>
        <p className="description">
- Maj du fichier SAT. ENC§ORs
        </p>
      </main>

      <Footer />
    </div>
  )
}
