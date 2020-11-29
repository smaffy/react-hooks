import React, {useState} from 'react';


function App() {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
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

