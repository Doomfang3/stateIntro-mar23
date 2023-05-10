import DisplayCount from './DisplayCount'

const Count = ({ count, setCount }) => {
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
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add 1</button>
      {/* Condition ? iftrue : iffalse */}
      {count % 2 === 0 ? (
        <>
          <DisplayCount count={count} />
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </>
      ) : null}
    </div>
  )
}

export default Count
