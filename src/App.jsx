import { useState } from 'react'
import Header from './SiteHeader'
import MainContainer from './MainContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center '>
      <Header/>
      <main className='grid grid-cols-2 sm:grid-cols-3 max-w-200 gap-5 p-3'>
        <MainContainer/>
      </main>
    </div>
  )
}

export default App
