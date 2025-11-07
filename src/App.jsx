import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'



const App = () => {

  return (
      
    <>
   <Routes>
      <Route path='/' element={<Header/>}/>
    </Routes>
    
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>

    

    </>
    
         )
}

export default App
