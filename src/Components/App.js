import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [timeouts, setTimeouts] = useState(null)

  useEffect (() => {
    if (seconds > 0) {
      let newTimeout = setTimeout(() => {
        setSeconds(seconds - 1)
      }, 1000)
      setTimeouts(newTimeout)
    }
  }, [seconds])


  function startCountdown (event) {
    if (event.key === 'Enter') {
      if (timeouts) {
        clearTimeout(timeouts)
      }
      setSeconds(parseInt(event.target.value))
    }
  } 

  return (
    <div>
      <input id='input' type='Number' placeholder='Set timer here' onKeyDown={startCountdown} />
      <div id='current-time'>{seconds}</div>
    </div>
  )
}

export default App