import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

export function Navigation() {
    return (
        <nav className="w-full text-white py-4 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-10 rounded-full">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        src="/public/icons/TitlePesalaLogo2.ico"
                        alt="Logo"
                        className="h-6 w-6"
                    />
                    <span className="ml-3 font-semibold text-lg">Customer Management</span>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link
                        to="/"
                        className="text-purple-700 hover:text-white hover:shadow-xl hover:shadow-[#fff]/20"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/add"
                        className="text-purple-700 hover:text-white hover:shadow-xl hover:shadow-[#fff]/20"
                    >
                        Add Customer
                    </Link>
                    <Link
                        to="/update"
                        className="text-purple-700 hover:text-white hover:shadow-xl hover:shadow-[#fff]/20"
                    >
                        Update Customer
                    </Link>
                    <Link
                        to="/delete"
                        className="text-purple-700 hover:text-white hover:shadow-xl hover:shadow-[#fff]/20"
                    >
                        Delete Customer
                    </Link>
                </div>

                {/* User Profile Section */}
                <div className="flex items-center space-x-4">
                    <button
                        type="button"
                        className="relative overflow-hidden text-purple-800 hover:text-white focus:outline-none rounded-full"
                    >
                        <IoIosNotificationsOutline
                            className="h-6 w-6"
                        />
                    </button>
                    <img
                        src="/public/images/me%20one%20copy.jpg"
                        alt="User Avatar"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </nav>
    );
}
