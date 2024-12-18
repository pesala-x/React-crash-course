import './App.css';
import {useReducer, useState} from "react";
import {Customer} from "./models/customer.ts";
import {CustomerReducer} from "./reducers/CounterReducer.ts";
function App() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [customer, dispatch] = useReducer(CustomerReducer,{ firstName: "", lastName: "" });

    function addCustomer() {
        const newCustomer = new Customer(name, email, phone);
        dispatch({type : "ADD_CUSTOMER", payload: newCustomer});
    }

    return (
        <>
            <input
                type={"text"}
                placeholder={"Name"}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type={"text"}
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type={"text"}
                placeholder={"Phone"}
                onChange={(e) => setPhone(e.target.value)}
            />
            <br/>
            <button onClick={addCustomer}>
                Add Customer
            </button>
            <br/>

            {customer.map(customer => (
                <div>{customer.name + ' ' + customer.email + ' ' +customer.phone}</div>
            ))}
        </>
    )
}

export default App