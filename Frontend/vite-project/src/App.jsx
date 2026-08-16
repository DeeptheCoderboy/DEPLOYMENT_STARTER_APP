import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [result, setResult] = useState("")

  useEffect(() => {
    const getInformation = async () => {
      try {
        const res = await axios.get('/api')
        setResult(res.data.data)
      } catch (error) {
        console.error(error)
      }
    }

    getInformation()
  }, [])

  return (
    <>
      <h1>Home Page</h1>
      <h2>{result}</h2>
    </>
  )
}

export default App