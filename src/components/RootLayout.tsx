import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router";

export function RootLayout() {
    return (
        <>
            <Navigation/>
            <Outlet></Outlet>
        </>
    );
}