import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Error} from "./components/Error.tsx";
import {RootLayout} from "./components/RootLayout.tsx";

function App() {

    const routs = createBrowserRouter([
        {
            path: "/" ,
            element: <RootLayout/>,
            children: [
                {index: true , element: <Dashboard/>},
                {path: "/add" , element: <AddCustomer/> },
                {path: "/update" , element: <UpdateCustomer/> },
                {path: "/delete" , element: <DeleteCustomer/> },
            ]
        },
        {path: "*" , element: <Error/>}
    ])

    return (
        <>
            <RouterProvider router={routs}>

            </RouterProvider>
        </>
    );
}

export default App;
