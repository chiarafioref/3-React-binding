import { useState } from 'react'

import './App.css'
import InputText from './components/InputText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputText />
    </>
  )
}

export default App
