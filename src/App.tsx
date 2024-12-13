import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import Dashboard from "./Dashboard.tsx";
import {AddCustomer} from "./components/AddCustomer.tsx";

function App() {

    const routs = createBrowserRouter([
        {path: "/" , element: <Dashboard/> },
        {path: "/add" , element: <AddCustomer/> }
    ])

    return (
        <>
            <RouterProvider router={routs}>

            </RouterProvider>
        </>
    );
}

export default App;
