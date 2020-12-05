//was: this.setState({a: 1}) -> this.render()

hooks = isolated funcs

import React, {useState} from 'react';

1. useState
Array [ 0, dispatchAction() ]


    function increment() {
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
        setCounter(prev => prev + 1)
    }

2. useEffect

request to db?

    useEffect(() => {
        console.log('render')
    }, [zavisimost])

    useEffect(() => {
        console.log('render')
    })   ------------------------- pri kazdom rendere


3. useRef

save something between renders

    const renderCount = useRef(1)
    useEffect(() => {
        renderCount.current++
    })
    renderCount.current


    // endless cycle
    // useEffect(() => {
    //     setRenderCount(prev => prev + 1)
    // })


    const inputRef = useRef(null)
    <input ref={inputRef}
    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)         // get input value
    })


    const focus = () => inputRef.current.focus()
    <button className="btn btn-success" onClick={focus

