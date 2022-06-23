import React,{useState} from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Cards from '../Cards';
import Services from './Services';
import HeroSection from '../HeroSection';
import 'react-calendar/dist/Calendar.css';
import Footer from '../Footer';
import Calendar from 'react-calendar';
// import { Carousel } from 'react-bootstrap';
import Carousel from '../Carousel';
import Autocomplete from '.././Autocomplete'

function Home({logout,user}) {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Autocomplete/>
      <Cards />
      
      <Carousel/>
      
     
    </div>
  );
}

export default Home;