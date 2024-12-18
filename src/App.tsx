import './App.css';
import {useReducer, useState} from "react";
import {nameReducer} from "./reducers/CounterReducer.ts";

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [name, dispatch] = useReducer(nameReducer, { firstName: "", lastName: "" });

    return (
        <>
            <input
                type={"text"}
                placeholder={"First Name"}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                className=''
                type={"text"}
                placeholder={"Last Name"}
                onChange={(e) => setLastName(e.target.value)}
            />
            <br/>
            <br/>
            <button onClick={() => dispatch({type: 'PRINT_NAME', payload: {firstName, lastName}})}>Print</button>
            <br/>
            <p>First Name: {name.firstName}</p>
            <p>Last Name: {name.lastName}</p>
        </>

    );
}

export default App;
