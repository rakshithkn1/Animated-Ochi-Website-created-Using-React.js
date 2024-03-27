// App.js
// import React from 'react';
// import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Featured from './Components/Featured';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'



function App() {
  return (

      <div className='w-full h-screen text-white'>
      
        {/* <Link to='/services'  */}
        <BrowserRouter>


        <Routes>
        {/* <Route path='/Navbar' element={<Navbar  />}/> */}
        <Route path='/' element={<Landing/>} />
        <Route path='/services' element={<Marquee/>}  />
        <Route path='/About' element={<About/>} />
        <Route path='/eyes' element={ <Eyes />} />
        <Route path='/featured' element={<Featured />} />
        <Route path='/cards' element={ <Cards />} />
        {/* <Route path='/services' element={ <Cards />} /> */}
        <Route path='/footer' element={ <Footer />} />
     
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
