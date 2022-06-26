import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div>
      <Head>
        <title>{"IΛN | Blockchain Developer"}</title>
        <meta name="description" content={"A Blockchain Developer, who specializes in Smart Contracts, Digital Assets & Protocols. Ready to build DAOs, NFTs, Crypto, GameFi, and so much more."} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
