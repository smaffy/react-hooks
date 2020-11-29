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
