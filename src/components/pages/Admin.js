import React,{useState} from 'react';
import '../../App.css';
import Cards from '../Cards';

import Footer from '../Footer';
import Calendar from 'react-calendar';
import Navbar from '../Navbar';
import Autocomplete from '.././Autocomplete'
import Contactdetail from "./Contactdetail"

function Admin({logout}) {
  
  return (
    <div>
      
     <Navbar/>
      <Contactdetail/>
     
    </div>
  );
}

export default Admin;