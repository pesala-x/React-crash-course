import './App.css';
import { useReducer, useState } from "react";
import { Customer } from "./models/customer";
import {CustomerReducer, initialState} from "./reducers/CounterReducer.ts";
// import { CustomerReducer, initialState } from "./reducers/CustomerReducer";

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [customers, dispatch] = useReducer(CustomerReducer, initialState);

    function addCustomer() {
        if (!name || !email || !phone) {
            alert("Please fill in all fields");
            return;
        }
        const newCustomer = new Customer(name, email, phone);
        dispatch({ type: "ADD_CUSTOMER", payload: newCustomer });
        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <button onClick={addCustomer}>Add Customer</button>
            <br />
            {customers.map((customer, index) => (
                <div key={index}>
                    {`${customer.name} ${customer.email} ${customer.phone}`}
                </div>
            ))}
        </>
    );
}

export default App;
