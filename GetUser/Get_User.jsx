import React, { useEffect, useState } from 'react';
import './GetUser.css';
const Get_User = () => {

  const [data,setdata]=useState();
  
  useEffect(()=>{
    getData();

  },[])

  const getData=async ()=>{
    const response=await fetch("https://reqres.in/api/users?page=1")
    .then((response)=>response.json());
    console.log(response);
    setdata(response);
  }


  return (
    <>
    <div className='card'>
    {data && data.data.map((item,index)=>(
      
        <ul>
        <li key={index}><img src={item.avatar} className="img"/></li>
        <li key={index}>{item.first_name} {item.last_name}</li>
        <li key={index}>{item.email}</li>
        <li key={index}>User ID:{item.id}</li></ul>
        
        )
      )
      }
    </div>
      
      
   
    </>
  )
}

export default Get_User;
