import {Link} from "react-router";

export function Navigation() {
    return (
        <>
            <nav className="w-full h-[10px] relative pb-10 align-super items-start">
                <div className=" w-full h-full flex flex-row items-center justify-between m-auto ">
                    <Link to='/'>Dashboard</Link>
                    <Link to='/add'>Add Customer</Link>
                    <Link to='/update'>Update Customer</Link>
                    <Link to='/delete'>Delete Customer</Link>
                </div>
            </nav>
        </>
    );
}