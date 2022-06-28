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
        <meta name="description" content={"TRUE OWNERSHIP = PROOF OF OWNERSHIP + TRANSFERABILITY OF OWNERSHIP"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
