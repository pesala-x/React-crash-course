import './App.css';
import { useState } from "react";
import ButtonComponent from "./assets/component/ButtonComponent.tsx";

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            {count}<br/>
            <ButtonComponent onSelect={() => setCount(count + 1)}>addition</ButtonComponent>
            <ButtonComponent onSelect={() => setCount(count + 1)}>subtraction</ButtonComponent>
        </>
    );
}

export default App;
