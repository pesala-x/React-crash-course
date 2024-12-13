import {Link} from "react-router";

export function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <br/>
            <Link to="/add">Add Customer</Link>
            <br/>
            <Link to="/update">Update Customer</Link>
            <br/>
            <Link to="/delete">Delete Customer</Link>
        </>
    );
}