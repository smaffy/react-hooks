import React, {useState, useMemo} from 'react';


function complexCompute(num) {
    console.log('complexCompute')
    let i = 0
    while (i < 1000000000) i++      // zaderzka
    return num * 2
}

function App() {

    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = {
        color: colored ? "darkred" : "black"
    }

    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    return (
        <div className='wrapper'>
            <h1 style={styles}>Computed property: {computed}</h1>
            <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}> Plus </button>
            <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}> Minus </button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}> Change </button>

        </div>
    )
}

export default App;

