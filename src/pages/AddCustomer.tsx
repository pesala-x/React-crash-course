import { useContext, useState } from "react";
import { Customer } from "../models/customer.ts";
import { CustomerContext } from "../components/CustomerProvider.tsx";
import { useNavigate } from "react-router";

export function AddCustomer() {
    const navigate = useNavigate();
    //@ts-ignore
    const [customers, setCustomers] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        setCustomers((customers: Customer[]) => [...customers, newCustomer]);
        navigate('/');
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <header className="mt-8 mb-6">
                    <h1 className="text-6xl font-bold text-gray-100">Add Customer</h1>
                </header>

                <div
                    className="shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md  p-6 rounded-lg w-full max-w-md ">
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="mt-6 w-full bg-gradient-to-r from-purple-700 to-blue-500 text-white py-2 px-4 rounded-lg
                                   hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Add Customer
                    </button>

                </div>
            </div>
        </>
    );
}
