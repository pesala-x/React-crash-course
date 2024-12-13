import { useState } from "react";
import './App.css';
import { Customer } from "./customer";

function App() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");

    const resetInputs = () => {
        setName("");
        setAddress("");
        setEmail("");
        setMobile("");
    };

    function addCustomer() {
        if (!name || !address || !email || !mobile) {
            setMessage("All fields are required.");
            return;
        }
        const newCustomer: Customer = { name, address, email, mobile };
        setCustomers(customers => [...customers, newCustomer]);
        setMessage("Customer added successfully!");
        resetInputs();
    }

    function deleteCustomer() {
        if (customers.length === 0) {
            setMessage("No customers to delete.");
            return;
        }
        setCustomers(customers => customers.slice(0, -1));
        setMessage("Last customer deleted.");
    }

    function deleteByEmail() {
        if (!email) {
            setMessage("Please enter an email to delete.");
            return;
        }
        const filteredCustomers = customers.filter(customer => customer.email !== email);
        if (filteredCustomers.length === customers.length) {
            setMessage("No customer found with the provided email.");
        } else {
            setCustomers(filteredCustomers);
            setMessage("Customer deleted successfully!");
        }
        resetInputs();
    }

    function updateCustomer() {
        if (!email) {
            setMessage("Please enter the email of the customer to update.");
            return;
        }
        const updated = customers.map(customer =>
            customer.email === email ? { name, address, email, mobile } : customer
        );
        setCustomers(updated);
        setMessage("Customer updated successfully!");
        resetInputs();
    }

    return (
        <div className="App">
            <h1>Customer Management</h1>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" value={mobile} placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} /> <br/>
            <button onClick={addCustomer}>Add Customer</button>
            <button onClick={deleteCustomer}>Delete Customer</button>
            <button onClick={deleteByEmail}>Delete by Email</button>
            <button onClick={updateCustomer}>Update Customer</button>
            <p>{message}</p>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.email}>
                        {customer.name}, {customer.address}, {customer.email}, {customer.mobile}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
