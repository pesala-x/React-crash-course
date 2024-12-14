import {CustomerContext} from "../components/CustomerProvider.tsx";
import {useContext} from "react";
import {Customer} from "../models/customer.ts";

export function Dashboard() {

    // @ts-ignore
    const [customers, setCustomers] = useContext(CustomerContext);
    return (
        <>
            <header className="mt-8 mb-6">
                <h1 className="text-6xl font-bold text-gray-100">Dashboard</h1>
            </header>
            {customers.map((customer: Customer) => (
                <div key={customer.email}>{customer.name + ' ' + customer.email + ' ' + customer.phone}</div>))}
        </>
    );
}