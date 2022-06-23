
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Services from './components/pages/Services';
import Trailer from './components/pages/Trailer';

import SignUp from './components/pages/SignUp';
import Blogg from './components/pages/Blogg';
import Contacts from './components/pages/Contactdetail';
import Contact from './components/pages/Contact';
import Booking from './components/pages/Booking';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Login from './components/pages/Login';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

import {firebase,mm} from './Firebase';
import { ContactMail } from '@material-ui/icons';


function App() {
  
  
  return (

    <Router>
      <div className="App">
        
        
        
        <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/login' exact component={Login} />
        <Route path='/blogg' component={Blogg} />

          <Route path='/home' exact component={Home}/>
=======
          <Route path='/Tour/' exact component={Login}/>

          <Route path='/services' component={Services} />
          <Route path='/trailer' component={Trailer} />
         
          <Route path='/contactdetails' component={Contacts} />
          <Route path='/signup' component={SignUp} />
          <Route path='/admin' component={Admin} />
          <Route path='/contact' component={Contact} />
          <Route path='/book' component={Booking} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
