import React, {useContext} from "react";
import {AllertContext} from "./App";


function Alert() {
    const alert = useContext(AllertContext)

    if(!alert) return null

    return (
        <div className={'alert alert-danger'}>
            Important message!
        </div>
    )
}


export default Alert;