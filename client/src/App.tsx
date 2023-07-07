import './App.css'
import About from './components/About'
import Features from './components/Features'
import Home from './components/Home'
import Navbar from './components/Navbar'
// import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom'


function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar />
        {/* <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/features' exact Component={Features}></Route>
        <Route path='/about' exact Component={About}></Route>
        <Route path='/contact' exact Component={Contact}></Route>
       
      </Routes> */}
        <Home />
        <Features />
        <About />
      </Router>
    </div>
  )
}

export default App
