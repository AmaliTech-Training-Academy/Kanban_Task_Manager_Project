import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  )
}

export default App
