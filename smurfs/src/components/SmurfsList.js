import React, { useContext } from 'react' ;
import Smurf from './Smurf'
import {SmurfContext} from '../contexts/SmurfContext'


const SmurfsList =() => {
    const smurfs = useContext(SmurfContext) 
    // const {smurfs} = useContext(SmurfContext) if you use the destured vale of smurfs, you can just use smurfs in map(instean of smurfs.smurfs)
console.log("I am smurfs",smurfs)
    return(
        <div className = "smurfList">            
            {smurfs.smurfs.map((item, id)=>((
                <Smurf key = {item.id} item ={item}/>
            )))}            
           
            
        </div>
    )
}

export default SmurfsList;