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
        <meta name="description" content={"Welcome to the portfolio of ianwboyle.eth, a Full Stack Blockchain Developer. A showcase of current and past projects."} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
