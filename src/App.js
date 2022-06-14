import React, { useEffect, useState } from "react";

// Создание своего hook
function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value);
    }, [value]);
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value)
    }

    return {
        value, onChange
    }
}

function App() {
    const [name, setName] = useState('');

    const changeHandler = event => {
        setName(event.target.value)
    }

    useLogger(name);

    return (
        <div className={'container pt-3'}>
            <input type="text" value={name} onChange={changeHandler} />
            <hr />
            <h1>{name}</h1>
        </div>
    )

}

export default App;