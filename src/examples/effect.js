import React, {useState, useEffect} from 'react';


function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({x:0, y:0})

    const mouseMoveHandler = event => {
        setPos({
                x: event.clientX,
                y: event.clientY
            })
    }

    // console.log('Component render')
    // useEffect(() => {
    //     console.log('render')
    // }, [])
    // useEffect(() => {
    //     console.log('ComponentDidMount')
    // }, [])


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
        return () => {
            console.log('clean type')
        }
    }, [type])

    useEffect(() => {
        console.log('ComponentDidMount')
        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return (
        <div className='wrapper'>
            <h1>Resource: {type}</h1>

            <button onClick={() => setType('users')}>Users</button>
            <button onClick={() => setType('todos')}>Todos</button>
            <button onClick={() => setType('posts')}>Posts</button>

            <pre>{JSON.stringify(pos, null, 2)}</pre>
            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
    )
}

export default App;

