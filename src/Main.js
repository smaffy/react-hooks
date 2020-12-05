import React from "react";
import {useAlertToggle} from "./Alert/AlertContext";


function Main() {
    const toggle = useAlertToggle()

    return (
        <div>
            <h1>Hello! Context example</h1>
            <button className="btn btn-success" onClick={toggle}>Show alert</button>
        </div>
    )
}


export default Main;