import React,{useState} from 'react'
function Createuser(){
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [address,setAddress]=useState("");
  function Save(){
      const data={name,age,address}
      console.log("called",data)
  }  
    return(
         <div>
             <h1>Creating form</h1>
             <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
             <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/><br></br>
             <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/><br></br>
             <button onClick={Save}> state in fc update</button>
         </div>
    );
    }
    export default Createuser