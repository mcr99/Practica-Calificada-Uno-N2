import { useState } from 'react'
import Header from './header'
import PhotosSection from './MainContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center dark:bg-blue-950 dark:text-white'>
      <Header/>
      <main className='grid grid-cols-2 sm:grid-cols-3 max-w-200 gap-5 p-3'>
        <PhotosSection/>
        <PhotosSection/>
        <PhotosSection/>
        <PhotosSection/>
        <PhotosSection/>
        <PhotosSection/>
      </main>
    </div>
  )
}

export default App
