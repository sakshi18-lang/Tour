import react from 'react';
 
 
 import '../hero.css';

 function Trailer(){
     return(
         <div className='hero-container'>
             <video src={require('../videos/video-1.mp4').default} autoPlay loop muted/>
             </div>
             );
             
 }
 export default Trailer;