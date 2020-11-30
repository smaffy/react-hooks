import React, {useState, useEffect} from 'react';


function App() {
    const [type, setType] = useState('users')

    // console.log('Component render')
    // useEffect(() => {
    //     console.log('render')
    // }, [})

    useEffect(() => {
        console.log('Type change', type)
    }, [type])

    return (
        <div className='wrapper'>
            <h1>Resource: {type}</h1>

            <button onClick={() => setType('users')}>Users</button>
            <button onClick={() => setType('todos')}>Todos</button>
            <button onClick={() => setType('posts')}>Posts</button>
        </div>
    )
}

export default App;

