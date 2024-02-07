import { ToastContainer } from 'react-toastify'

import Header from './layout/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

import 'react-toastify/dist/ReactToastify.css';
import Footer from './layout/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <ToastContainer />
      <Header />
      <main className='bg-secondary dark:bg-grey'>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}

export default App
