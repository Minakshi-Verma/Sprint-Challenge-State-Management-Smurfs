import React, {useState, useContext} from 'react';
import {SmurfContext} from '../contexts/SmurfContext'
// import axios from 'axios';


const Form = () =>{
   const {addSmurf} = useContext(SmurfContext)   // here we are using destructured value of addSmurf so just use addSmurf in handleSubmit(otherwise you will need to to use addSmurf.addSmurf)
  

    const [newSmurf, setNewSmurf] = useState ({name:'', age:'', height: '', id: ''})

 

    //create handleChanges fx  
    const handleChanges = (e) => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    //craete handleSubmit fx
    const handleSubmit = (e) => {
        e.preventDefault()
        addSmurf(newSmurf)
        // axios
        // .post("http://localhost:3333/smurfs",newSmurf)
        // .then(res=>{
        //     console.log("I am the response from post request",res)
        // })
        // .catch(err=>{
        //     console.log("I am the error from form", err)
        // })
        
    }
  
      const {name, age, height, id} = newSmurf
    return(

        <div>
            <form onSubmit = {handleSubmit}>
                <div >
                    <input className = "input"
                    type = "text"
                    name = "name"
                    value = {name}
                    onChange ={handleChanges}
                    />
                </div>

                <div className = "input">
                    <input className = "input"
                    type = "text"
                    name = "age"
                    value = {age}
                    onChange ={handleChanges}
                    />
                </div>

                <div >
                    <input className = "input"
                    type = "text"
                    name = "height"
                    value = {height}
                    onChange ={handleChanges}
                    />
                </div>

                <div>
                    <input className = "input"
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