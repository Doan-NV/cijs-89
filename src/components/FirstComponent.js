import React, { useState } from 'react'

const FirstComponent = () => {
    const [state, setState] = useState([1,2,3,4,5]);
    const [name, setName] = useState("Doannv");
    const [isFullName, setFullName] = useState(false);
    const removeFirstElement = () => {
        const a = state.slice(1);
        console.log('🚀 ~ file:.js:9 ~ a:', a);
        setState(a);
    }

    const setNameFn = () => {
        setName("Nguyen Van Doan");
    }

    const setFullNameFn = () => {
        setFullName(!isFullName);
        isFullName === true ? setName("Nguyeenx Van Doan") : setName("Doannv");
    }
  return (
    <div>
        <button onClick={setNameFn}>click to re name</button>
        <br></br>
        <button onClick={setFullNameFn}>change option show full name</button>

        <h1>
            your name: {name}
        </h1>
        <button onClick={removeFirstElement}>incre state</button>
        {
            state.map(item => {
                return <>
                    <h1>{item}</h1>
                    <h1>-----------------------------------------</h1>
                </>
            })
        }
    </div>
  )
}

export default FirstComponent