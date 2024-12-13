import './App.css';
import { useState } from "react";
import { Customer } from "./customer";

function App() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    function addCustomer() {
        if (!name || !address || !email || !mobile) {
            alert("Please fill out all fields.");
            return;
        }

        const newCustomer = new Customer(name, address, email, mobile);
        setCustomers(customers => [...customers, newCustomer]);

        // Clear input fields
        setName("");
        setAddress("");
        setEmail("");
        setMobile("");
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <br />
                <button onClick={addCustomer}>Add Customer</button>
            </div>
            <ul>
                {customers.map((customer, index) => (
                    <li key={index}>
                        {customer.name} - {customer.address} - {customer.email} - {customer.mobile}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
