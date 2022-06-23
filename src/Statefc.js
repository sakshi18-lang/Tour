import React,{useEffect,useState} from 'react'
function Statefc(){
const [name,setName]=useState();
useEffect(()=>{
    console.log("hello from hook");
})
return(
     <div>
         <h1>using state in functional component</h1>
         <p>{name}</p>
         <button onClick={()=>setName("MMagre")}> state in fc update</button>
     </div>
);
}
export default Statefc