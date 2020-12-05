import React, {useState, useEffect} from 'react';


function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

function useInput(initValue) {
    const [value, setValue] = useState(initValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return{
        bind: {value, onChange},
        value,
        clear
    }

}


function App() {
    const input = useInput('')
    const lastName = useInput('')

    useLogger(input.value)

    return (
        <div className={'container pt-3'}>
            <input type="text" {...input.bind} />
            <input type="text" {...lastName.bind} />

            <button className="btn btn-warning" onClick={() => {input.clear(); lastName.clear()}}> Clear </button>
            <button className="btn btn-warning" onClick={() => input.clear()}> Clear </button>

            <hr />
            <h1> {input.value} {lastName.value} </h1>
        </div>
    )
}

export default App;

