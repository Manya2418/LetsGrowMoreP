import React,{useState} from 'react';
import './Todo.css';
const ListCom=(props)=>{

    const [line,setLine]=useState(false);
    const cutIt=()=>{
       setLine(true);


    }
   

    return(
    <>
    
    <div className='todostyle'>
        
        <li style={{textDecoration:line ? "line-through" : "none"}}>
        <input type="checkbox" onClick={cutIt}/>
       
        {props.text}
            
        <span onClick={()=>{
            props.onSelect(props.id);
        }} ><img src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png" style={{height:"35px",widht:"35px",cursor:"pointer"}}/></span>     
             
           
        </li>
           
        </div>
        </>
     
    )

}
export default ListCom;
