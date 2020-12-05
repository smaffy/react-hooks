import React from "react";
import {useAlert} from "./AlertContext";


function Main() {
    const {show} = useAlert()

    return (
        <div>
            <h1>Hello! Context example</h1>
            <button className="btn btn-success" onClick={() => show(' Text from Main.js')}>Show alert</button>
        </div>
    )
}


export default Main;