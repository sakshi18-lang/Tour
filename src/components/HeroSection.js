 import react from 'react';
 import {Button} from './Button';
 import '../App.css';
 import './hero.css';

 function HeroSection(){
     return(
         <div className='hero-container'>
             <img src={require('./images/final.jpg').default}/>
             <h1>
                LETS TRVL 
             </h1>
             <p>What are you waiting for</p>
             
    {/* <div className="black">
                  <Button
                 className='btns'
                 buttonSize='btn--large'  
                 buttonStyle='btn--primary'
                 path='/home'
                 
                 
                 >WATCH TRAILER<i className='far fa-play-circle'/></Button>
                 </div> */}

             </div> 
         
     );
 }
 export default HeroSection;