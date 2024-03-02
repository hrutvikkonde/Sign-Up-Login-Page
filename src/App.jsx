import { useState } from 'react'
import './App.css'
import LoginSignUp from './components/LoginSignUp/LoginSignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      
        <div>
          <LoginSignUp/>
         
        </div>
      
  
  )
}

export default App
