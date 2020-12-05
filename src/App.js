import React, {useState, useEffect,} from 'react';
import ItemsList from "./ItemsList";


function App() {

    const [count, setCount] = useState(1)
    const [colored, setColored] = useState(false)

    const styles = {
        color: colored ? "red" : "black"
    }

    const generateItemsFromAPI = () => {
        return new Array(count).fill('').map((_, i) => `Element ${i + 1}`)
    }

    return (
        <div className='wrapper'>
            <h1 style={styles}>Amount of elements: {count}</h1>
            <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}> Plus </button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}> Change </button>

            <ItemsList getItems={generateItemsFromAPI} />

        </div>
    )
}

export default App;

