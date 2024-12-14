import { useNavigate } from "react-router";
import { useContext } from "react";
import { CustomerContext } from "../components/CustomerProvider.tsx";
import {Customer} from "../models/customer.ts";

export function DeleteCustomer() {
    const navigate = useNavigate();
    //@ts-ignore
    const [customers, setCustomers] = useContext(CustomerContext);

    function handleDelete() {
        if (customers.length === 0) {
            alert("No customers available to delete!");
            return;
        }
        // @ts-ignore
        setCustomers((prevCustomers) => prevCustomers.slice(0, -1));
        navigate('/');
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <header className="mt-8 mb-6">
                    <h1 className="text-6xl font-bold text-gray-100">Delete Customer</h1>
                </header>

                <div className="shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md  p-6 rounded-lg w-full max-w-md ">

                    <table className="min-w-full table-auto border-collapse border border-gray-700 text-white">
                        <thead>
                        <tr className="bg-[#03001417] backdrop-blur-md">
                            <th className="border border-gray-700 px-4 py-2 text-center">Name</th>
                            <th className="border border-gray-700 px-4 py-2 text-center">Email</th>
                            <th className="border border-gray-700 px-4 py-2 text-center">Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*i use map function for get all saved customers to the table*/}
                        {customers.map((customer: Customer, index: number) => (
                            <tr key={index} className="odd:bg-gray-700 even:bg-gray-600">
                                <td className="border border-gray-700 px-4 py-2">{customer.name}</td>
                                <td className="border border-gray-700 px-4 py-2">{customer.email}</td>
                                <td className="border border-gray-700 px-4 py-2">{customer.phone}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <button
                        onClick={handleDelete}
                        className="mt-6 w-full bg-gradient-to-r from-purple-700 to-blue-500 text-white py-2 px-4 rounded-lg
                                   hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Delete Customer
                    </button>
                </div>
            </div>
        </>
    );
}
