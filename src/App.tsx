import Header from './layout/Header'
import About from './pages/About'
import Hero from './pages/Hero'

function App() {

  return (
    <>
      <Header />
      <main className='pt-[70px] bg-secondary dark:bg-grey'>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
