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

    return{
        value, onChange
    }

}


function App() {
    const input = useInput('')
    const lastName = useInput('')

    useLogger(input.value)

    return (
        <div className={'container pt-3'}>
            <input type="text" {...input} />
            <input type="text" {...lastName} />

            <hr />
            <h1> {input.value} {lastName.value} </h1>
        </div>
    )
}

export default App;

