import React from "react";


function Main({toggle}) {
    return (
        <div>
            <h1>Hello! Context example</h1>
            <button className="btn btn-success" onClick={toggle}>Show alert</button>
        </div>
    )
}


export default Main;