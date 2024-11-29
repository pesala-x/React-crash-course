import './App.css';
import { useState } from "react";
import ButtonComponent from "./assets/component/ButtonComponent";

function App() {
    const [count, setCount] = useState(0);

    const updateCount = (value: number) => {
        setCount(count + value); //
    };

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h1>{count}</h1>
                <ButtonComponent updateCount={updateCount} action="increment" />
                <ButtonComponent updateCount={updateCount} action="decrement" />
            </div>
        </>
    );
}

export default App;
