import React, {useState} from "react";

export default function Dragable(){
    let cursorposition = event.clientX;
    setposition(cursorposition);
    const [posi , setposition] = useState();
    return(
        <>
            <h1>{posi}</h1>
        </>
    )
}