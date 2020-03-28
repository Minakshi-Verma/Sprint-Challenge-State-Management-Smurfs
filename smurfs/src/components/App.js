import React, { useState, useEffect } from "react";
import SmurfsList from './SmurfsList';
import axios from 'axios';
import {SmurfContext} from '../contexts/SmurfContext';

import Form from './Form';
import "./App.css";


const App = () => {
// const [smurfArray, setSmurfArray] = useState()
  const [smurfs, setSmurfs] = useState([])

 

       useEffect(()=>{
        axios
        .get(`http://localhost:3333/smurfs`)
        .then(res =>{
            console.log("I am the smurfList array from App",res)
            setSmurfs(res.data)
        })
        .catch(err =>{
            console.log("I am the error msg", err)
        })

       },[])

  const addSmurf = (item) =>{
     setSmurfs([...smurfs, item])
    axios
    .post("http://localhost:3333/smurfs",item)
    .then(res=>{
        console.log("I am the response from post request",res)
    })
    .catch(err=>{
        console.log("I am the error from form", err)
    })
      
  }
  
    return (
      <div className="App">
        <h1>SMURFS VILLAGE</h1>
        <SmurfContext.Provider value = {{addSmurf,smurfs}}>

        <SmurfsList />
        <Form  addSmurf ={addSmurf}/>

        </SmurfContext.Provider>
      </div>
    );
  
}

export default App;
