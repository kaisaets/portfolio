import Navbar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer'
import './App.css'
import { useState } from 'react'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id='home' />
      <Navbar />      
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
