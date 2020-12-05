import React, {useState} from 'react';



function App() {
    const [name, setName] = useState('')

    const changeHandler = event => {
        setName(event.target.value)
    }

    return (
        <div className={'container pt-3'}>


            <input type="text" value={name} onChange={changeHandler} />
        </div>
    )
}

export default App;

