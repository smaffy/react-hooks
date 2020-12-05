import React, {useState, useEffect} from 'react';


function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}


function App() {
    const [name, setName] = useState('')

    const changeHandler = event => {
        setName(event.target.value)
    }

    useLogger(name)

    return (
        <div className={'container pt-3'}>
            <input type="text" value={name} onChange={changeHandler} />

            <hr />
            <h1> {name} </h1>
        </div>
    )
}

export default App;

