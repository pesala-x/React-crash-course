import {createContext, useState} from "react";
import {Customer} from "../models/customer.ts";

// @ts-ignore
export const CustomerContext  = createContext();

// @ts-ignore
export function CustomerProvider({children}) {

    const [customers, setCustomers] = useState<Customer[]>([]);

    return (
        <CustomerContext.Provider value={[customers, setCustomers]}>
            {children}
        </CustomerContext.Provider>
    );
}