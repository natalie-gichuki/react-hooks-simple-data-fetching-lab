// create your App component here

import React, { useState } from "react";
import { useEffect } from "react";

function App(){

    const [dogImage, setDogImage] = useState("");

    useEffect (() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogImage(data.message)
        })
    }, [])

    if(!dogImage){
        return <p>Loading...</p>
    }
    return(
        <>
        <img src={dogImage} alt="A Random Dog" />
        
        </>
    )
}

export default App;