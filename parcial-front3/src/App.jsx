import { useState } from 'react'
import './App.css'
import Cokemon from './components/Cokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form></form>
      <Cokemon/>
     
  
    </div>
  )
}

export default App


