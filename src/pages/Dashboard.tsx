import { CustomerContext } from "../components/CustomerProvider.tsx";
import { useContext } from "react";
import { Customer } from "../models/customer.ts";

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
                            <th className="border border-gray-700 px-4 py-2 text-center">Name</th>
                            <th className="border border-gray-700 px-4 py-2 text-center">Email</th>
                            <th className="border border-gray-700 px-4 py-2 text-center">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer: Customer, index: number) => (
                        <tr key={index} className="odd:bg-gray-700 even:bg-gray-600">
                            <td className="border border-gray-700 px-4 py-2">{customer.name}</td>
                            <td className="border border-gray-700 px-4 py-2">{customer.email}</td>
                            <td className="border border-gray-700 px-4 py-2">{customer.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
