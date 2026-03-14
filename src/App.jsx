import { useState } from 'react'
import Header from './components/SiteHeader'
import MainContainer from './components/MainContainer'

import { teamList } from './teamList'

function App() {

  return (
    <div className='flex flex-col justify-center items-center '>
      <Header/>
      <main className='grid grid-cols-2 sm:grid-cols-3 max-w-200 gap-5 p-3'>
        {teamList.map(member => (
          <MainContainer
          key={member.id}
          position={member.position.toUpperCase()}
          name={member.name}
          img={member.img}
          style={`${member.id %2 === 0 ? "relative top-10" : ""}
            ${member.id === 2 || member.id === 5 ? "sm:top-10" : "sm:top-0"}
            `}
          />
        ))
        }
      </main>
    </div>
  )
}

export default App
