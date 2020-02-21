import React, { useState } from "react";
import SmurfsList from './SmurfsList';
import {FormContext} from '../contexts/FormContext';

import Form from './Form';
import "./App.css";


const App = () => {

  const [smurf, setSmurf] = useState()

  const addSmurf = (item) =>{
    return setSmurf([...smurf, item])
      
  }
  
    return (
      <div className="App">
        <h1>SMURFS VILLAGE</h1>
        <FormContext.Provider value = {addSmurf}>

        <SmurfsList />
        <Form  addSmurf ={addSmurf}/>

        </FormContext.Provider>
      </div>
    );
  
}

export default App;
