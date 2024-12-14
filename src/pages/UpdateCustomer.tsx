
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { CustomerContext } from "../components/CustomerProvider.tsx";
import { Customer } from "../models/customer.ts";

export function UpdateCustomer() {
    const navigate = useNavigate();
    // @ts-ignore
    const [customers, setCustomers] = useContext(CustomerContext)!;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function updateCustomer() {
        if (!name || !email || !phone) { // නම හරි email එක හරි නැිනම්   ඇලර්ට් එකක් දන්න හදුව
            alert("Please fill in all fields.");
            return;
        }
        // @ts-ignore
        const customerExists = customers.some(customer => customer.email === email);//email එක අපි input කරන email එකට අසමාන  නම් ඒකට ඇලර්ට් එකක්  එන්න
        if (!customerExists) {
            alert("Customer with this email does not exist!");
            return;
        }

        setCustomers((prevCustomers: Customer[]) =>
            prevCustomers.map(customer => // අප්ඩේට් එකක් දානකොට එක section එකක් වරක් වෙනස් වන්න නැටිව අනිත් data th update වන්න ඔන නිසා මෙක කරා
                customer.email === email ? new Customer(name, email, phone) : customer
            )
        );
        navigate('/'); //Customer array එක update වුන ගමන් dashboard එකට pass කරනව
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <header className="mt-8 mb-6">
                    <h1 className="text-6xl font-bold text-gray-100">Update Customer</h1>
                </header>

                <div
                    className="shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md p-6 rounded-lg w-full max-w-md">
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <button
                        onClick={updateCustomer}
                        className="mt-6 w-full bg-gradient-to-r from-purple-700 to-blue-500 text-white py-2 px-4 rounded-lg
                                   hover:from-blue-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Update Customer
                    </button>
                </div>
            </div>
        </>
    );
}
