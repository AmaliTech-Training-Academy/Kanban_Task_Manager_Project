import './App.css'
import About from './components/About'
import Features from './components/Features'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <div className='App'>
      <Router>
      <Navbar />
      <Home />
        <Features />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
        </Router>
      {/* <Router>
        <Navbar />
        <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/' Component={Home}></Route>
        <Route path='/features'  Component={Features}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/contact'  Component={Contact}></Route>
        <Route path='/testimonials'  Component={Testimonials}></Route>
       
      </Routes>
        <Home />
        <Features />
        <About />
        <Contact />
      <Footer />
      <Testimonials />
        <Footer />
      </Router> */}
    </div>
  )
}

export default App
