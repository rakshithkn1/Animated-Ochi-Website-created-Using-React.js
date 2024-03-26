// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Featured from './Components/Featured';
import Cards from './Components/Cards';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className='w-full h-screen text-white'>
        <Navbar />

        <Switch>
          <Route path='/services' component={Marquee} />
          <Route path='/work' component={Featured} />
          {/* <Route path='/about' component={ExampleRouteComponent} />
          <Route path='/insights' component={ExampleRouteComponent} />
          <Route path='/contacts' component={ExampleRouteComponent} /> */}
          {/* Add more routes as needed */}
        </Switch>
        <Landing />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
