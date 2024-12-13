import './App.css';
import { useState } from "react";
import { Customer } from "./customer";

function App() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [deleteEmail, setDeleteEmail] = useState(""); // State for the email to delete

    function addCustomer() {
        if (!name || !address || !email || !mobile) {
            alert("Please fill out all fields.");
            return;
        }

        const newCustomer = new Customer(name, address, email, mobile);
        setCustomers([...customers, newCustomer]);

        // Clear input fields
        setName("");
        setAddress("");
        setEmail("");
        setMobile("");
    }

    function deleteCustomer(index: number) {
        const updatedCustomers = [
            ...customers.slice(0, index), // Elements before the index
            ...customers.slice(index + 1) // Elements after the index
        ];
        setCustomers(updatedCustomers);
    }

    function deleteByEmail() {
        if (!deleteEmail) {
            alert("Please enter an email to delete.");
            return;
        }
        const updatedCustomers = customers.filter(customer => customer.email !== deleteEmail);
        setCustomers(updatedCustomers);
        // Clear the deleteEmail input field
        setDeleteEmail("");
    }


    return (
        <>
            <div className="app">
                <div className="input-group">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Address" value={address}
                           onChange={(e) => setAddress(e.target.value)}/>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                    <button onClick={addCustomer}>Add Customer</button>
                    <div className="delete-group">
                        <h3>Delete Customer by Email</h3>
                        <input
                            type="text"
                            placeholder="Email to delete"
                            value={deleteEmail}
                            onChange={(e) => setDeleteEmail(e.target.value)}
                        />
                        <button onClick={deleteByEmail}>Delete by Email</button>
                    </div>
                </div>
                <ul>
                    {customers.map((customer, index) => (
                        <li key={index}>
                            {customer.name} - {customer.address} - {customer.email} - {customer.mobile}
                            <button onClick={() => deleteCustomer(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
