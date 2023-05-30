import React, { useState } from 'react';
import ListCom from './ListCom';
import './Todo.css';

const Todo=()=>{

    const [item,setitem]=useState("");
    const [newitem,setnewitem]=useState([]);

    const input=(event)=>{
        setitem(event.target.value);
    }

    const inputchange=()=>{
        setnewitem((preValue)=>{
            return [...preValue,item];
        })
        setitem("");

    }
    const deleteItem=(id)=>{
        setnewitem((olditem)=>{
            return olditem.filter((arrElem,index)=>{
                return index !==id;
            });
        });

    };


    return(
        <>
           <div className='body'>
            <div className='main'>  
                <h1>To Do List</h1>
              
            <br/><input type='text' placeholder='Add an Item' onChange={input} value={item} />
            <button onClick={inputchange}>Add</button>
           <ol>
                {newitem.map((value,index)=>{
                return <ListCom 
                text={value}
                id={index}
                key={index}
                onSelect={deleteItem}
                />})
                }
            </ol>  </div></div>
        </>
    )


}

export default Todo;
