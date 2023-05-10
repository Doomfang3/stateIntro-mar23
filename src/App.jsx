import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import OtherCount from './components/OtherCount'
import Count from './components/Count'
import DisplayCount from './components/DisplayCount'

const someData = [
  { label: 'Blue Chimay', alcohol: 13 },
  { label: 'Red Chimay', alcohol: 10 },
  { label: 'Brown Chimay', alcohol: 12 },
  { label: 'White Chimay', alcohol: 11 },
]

function App() {
  const [count, setCount] = useState(0)
  // return an array of 2 elements (state and function to set the state)
  //Boolean naming example =>
  //const [isLoading, setIsLoading] = useState(true)
  const [cleanData, setCleanData] = useState(
    someData.map(currentData => {
      return { ...currentData, id: uuidv4() }
    })
  )

  /* setTimeout(() => {
    setOtherCount(0)
  }, 1000) */

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count count={count} setCount={setCount} />
      <DisplayCount count={count} />
      <OtherCount />

      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      {cleanData.map(currentData => (
        <p key={currentData.id}>
          {currentData.label} contain {currentData.alcohol}% of alcohol
        </p>
      ))}
    </>
  )
}

export default App
