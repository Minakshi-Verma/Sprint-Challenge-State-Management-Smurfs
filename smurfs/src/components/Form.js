import React, {useState, useContext} from 'react';
import {FormContext} from '../contexts/FormContext'
import axios from 'axios';


const Form = () =>{
    const {addSmurf} = useContext(FormContext)

    const [newSmurf, setNewSmurf] = useState ({name:'', age:'', height: '', id: ''})

 

    //create handleChanges fx  
    const handleChanges = (e) => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    //craete handleSubmit fx
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newSmurf)
        axios
        .post("http://localhost:3333/smurfs",newSmurf)
        .then(res=>{
            console.log("I am the response from post request",res)
        })
        .catch(err=>{
            console.log("I am the error from form", err)
        })
        
    }
  
      const {name, age, height, id} = newSmurf
    return(

        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <input 
                    type = "text"
                    name = "name"
                    value = {name}
                    onChange ={handleChanges}
                    />
                </div>

                <div>
                    <input 
                    type = "text"
                    name = "age"
                    value = {age}
                    onChange ={handleChanges}
                    />
                </div>

                <div>
                    <input 
                    type = "text"
                    name = "height"
                    value = {height}
                    onChange ={handleChanges}
                    />
                </div>

                <div>
                    <input 
                    type = "text"
                    name = "id"
                    value = {id}
                    onChange ={handleChanges}
                    />
                </div>
                <button type = "submit">add a smurf</button>
            </form>
        </div>
    )
}

export default Form;