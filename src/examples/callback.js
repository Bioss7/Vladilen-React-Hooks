import React, {useState, useCallback} from "react";
import ItemsList from "./itemsList";

// useCallback - (для генераци элементов в другой компонент) нужна чтобы функция не изменялась при новом рендере 

function App() {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    // закешировали с помощью useCallback
    const generateItemsFromAPI = useCallback((indexNumber) => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + indexNumber}`);
    }, [count]);
    
    return (
        <div>
            <h1 style={styles}>Количесвто элементов: {count}</h1>
            <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Добавить</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>

            <ItemsList getItems={generateItemsFromAPI} />
        </div>
    )

}

export default App;
