import { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      {/* 
        Setter:
          Simple
            setCount(5)
            setCount(count + 1)
          Complex
            setCount((previousValue) => { return newValue })
            setCount(prevCount => prevCount + 1)
      */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>count is {count}</button>
      {/* Condition ? iftrue : iffalse */}
      {count % 2 === 0 ? (
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      ) : null}
    </div>
  )
}

export default Count
