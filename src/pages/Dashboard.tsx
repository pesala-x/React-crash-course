import {CustomerContext} from "../components/CustomerProvider.tsx";
import {useContext} from "react";
import {Customer} from "../models/customer.ts";

export function Dashboard() {

    // @ts-ignore
    const [customers, setCustomers] = useContext(CustomerContext);
    return (
        <>
            <h1>Dashboard</h1>
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        </>
    );
}