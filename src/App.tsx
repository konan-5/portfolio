import Header from './layout/Header'
import About from './pages/About'
import Hero from './pages/Hero'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <Header />
      <main className='bg-secondary dark:bg-grey'>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
