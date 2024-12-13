import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import {AddCustomer} from "./components/AddCustomer.tsx";
import {UpdateCustomer} from "./components/UpdateCustomer.tsx";
import {DeleteCustomer} from "./components/DeleteCustomer.tsx";
import {Dashboard} from "./components/Dashboard.tsx";

function App() {

    const routs = createBrowserRouter([
        {path: "/" , element: <Dashboard/> },
        {path: "/add" , element: <AddCustomer/> },
        {path: "/update" , element: <UpdateCustomer/> },
        {path: "/delete" , element: <DeleteCustomer/> },
    ])

    return (
        <>
            <RouterProvider router={routs}>

            </RouterProvider>
        </>
    );
}

export default App;
