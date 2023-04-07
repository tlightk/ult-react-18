import { useState } from 'react'
import ListGroup from './components/ListGroup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ListGroup />
    </div>
  )
}

export default App
