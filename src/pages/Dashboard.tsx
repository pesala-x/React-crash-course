import { CustomerContext } from "../components/CustomerProvider.tsx";
import { useContext } from "react";
import { Customer } from "../models/customer.ts";
import "./styles/Dashboard.css"

export function Dashboard() {
    // @ts-ignore
    const [customers] = useContext(CustomerContext);

    return (
        <>
            <header className="mt-8 mb-6 text-center">
                <h1 className="text-6xl font-bold text-gray-100">Dashboard</h1>
            </header>

            <div className="overflow-x-auto shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md">
                <table className="min-w-full table-auto border-collapse border border-gray-700 text-white">
                    <thead>
                        <tr className="bg-[#03001417] backdrop-blur-md">
                            <th className="table-header">Name</th>
                            <th className="table-header">Email</th>
                            <th className="table-header">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer: Customer, index: number) => (
                        <tr key={index} className="odd:bg-gray-700 even:bg-gray-600">
                            <td className="table-row-body">{customer.name}</td>
                            <td className="table-row-body">{customer.email}</td>
                            <td className="table-row-body">{customer.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
