import React, {useState,useEffect} from 'react' ;
import axios from 'axios';
import Smurf from './Smurf'


const SmurfsList =() => {
     const [smurf, setSmurf] = useState([])

       useEffect(()=>{
        axios
        .get(`http://localhost:3333/smurfs`)
        .then(res =>{
            console.log("I am the data fromsmurfsList",res)
            setSmurf(res.data)
        })
        .catch(err =>{
            console.log("I am thee error msg", err)
        })

       },[])


    return(
        <div>            
            {smurf.map((item, id)=>((
                <Smurf key = {item.id} item ={item}/>
            )))}            
           
        </div>
    )
}

export default SmurfsList;