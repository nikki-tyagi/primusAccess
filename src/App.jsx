import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      <div>
        Hello
      </div>

    </>
  )
}

export default App
