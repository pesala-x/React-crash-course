import './App.css';
import {useReducer} from "react";

function countReducer(state: number, action:{type : string, payload : number}) {

    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}
function App() {
    const [count,dispatch ] = useReducer(countReducer,0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: "INCREMENT", payload: 1})}>Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT", payload: 1})}>Increment</button>
        </>
    );
}

export default App;
