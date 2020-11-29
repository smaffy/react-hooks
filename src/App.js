import React, {useState} from 'react';


function computeInitialCounter() {
    console.log('Some calculations...')
    return Math.trunc(Math.random() * 20)
}


function App() {
    // const [counter, setCounter] = useState(0)
    // const [counter, setCounter] = useState(computeInitialCounter) No!
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter()
    })

    function increment() {
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
        setCounter(prev => prev + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return (
        <div className="wrapper">
            <div>
                <h1>Counter: {counter}</h1>
                <button onClick={increment} className="btn btn-success">Add</button>
                <button onClick={decrement} className="btn btn-danger">Remove</button>
            </div>
        </div>
    );
}

export default App;

