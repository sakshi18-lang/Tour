import React,{useEffect,useState} from 'react'
function Event(){
    const[val,setValue]=useState(" ")
    const test=(e)=>{
        console.log("test function",e.target.value)
        setValue(e.target.value)
    }
    return(
        <div>
            <input type="text" value={val} onChange={test} />
            <button onClick={()=>alert(val)} > update the text</button>
        </div>
    )
}
export default Event