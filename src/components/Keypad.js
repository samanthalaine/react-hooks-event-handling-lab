// Code Keypad Component Here
import React from "react";

function Keypad(){
    function enterPassword(event){
        event.preventDefault()
        console.log('Entering password...')
    }
    return(
        <input
        type="password"
        onChange={enterPassword}
        placeholder="Enter password..."
      />

    )
}

export default Keypad