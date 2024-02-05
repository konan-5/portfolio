import { useState } from 'react'
import { useTheme } from './contexts/ThemeProvider'

function App() {
  const { toggleTheme } = useTheme()

  return (
    <>
      <h1 className='bg-red-100 dark:bg-red-500'>Vite + React</h1>
      <div className="card text-2xl ">
        <button onClick={toggleTheme}>dark</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
