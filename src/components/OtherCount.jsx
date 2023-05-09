import { useState } from 'react'

const OtherCount = () => {
  const [otherCount, setOtherCount] = useState(42)

  const handleClick = () => {
    console.log('click')
    setOtherCount(otherCount + 3)
  }

  if (otherCount % 2 === 0) {
    return (
      <button type='button' onClick={handleClick}>
        Increment
      </button>
    )
  } else {
    return (
      <div>
        <p>{otherCount}</p>
        <button type='button' onClick={handleClick}>
          Increment
        </button>
      </div>
    )
  }
}

export default OtherCount
