import Header from './layout/Header'
import About from './pages/About'
import Experience from './pages/Experience'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {

  return (
    <>
      <Header />
      <main className='bg-secondary dark:bg-grey'>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
    </>
  )
}

export default App
