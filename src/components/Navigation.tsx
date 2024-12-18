import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./styles/NavBar.css"
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
                        className="nav-links"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/add"
                        className="nav-links"
                    >
                        Add Customer
                    </Link>
                    <Link
                        to="/update"
                        className="nav-links"
                    >
                        Update Customer
                    </Link>
                    <Link
                        to="/delete"
                        className="nav-links"
                    >
                        Delete Customer
                    </Link>
                </div>

                {/* User Profile Section */}
                <div className="flex items-center space-x-4">
                    <button
                        type="button"
                        className="relative overflow-hidden text-purple-500 hover:text-white focus:outline-none rounded-full"
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
