import React from 'react';


const Smurf = (props) => {
    // const {item} = useContext(SmurfContext)

    return (

        <div className = "smurf">
            <h3>Name: {props.item.name}</h3>
            <p>Age: {props.item.age}</p>
            <p>Height: {props.item.height}</p>
            <p>Id: {props.item.id}</p>
            

        </div>
    )
}

export default Smurf