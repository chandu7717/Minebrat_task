import React from 'react'
import  { useEffect, useState } from 'react'


const Fetchapi = () => {
    let[userdata,setuserdata]=useState([])


    useEffect(()=>
    {
        let fetchData=()=>{
           window.fetch("/api/v1/states").then(response => response.json())
          .then(data =>console.log(data))
          .catch(error => {
            console.error('Error:', error);
          });
        }
        fetchData()
    },[])

  return (
    <>
    <h1>STATES</h1>    
    </>
    )
}

export default Fetchapi