import Header from './layout/Header'
import Hero from './pages/Hero'

function App() {

  return (
    <>
      <Header />
      <main className='pt-[70px] bg-secondary dark:bg-grey'>
        <Hero />
      </main>
    </>
  )
}

export default App
