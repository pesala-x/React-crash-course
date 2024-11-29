import {ReactNode} from "react";

export function ButtonComponent(props:{children:ReactNode}) {
    return (
        <>
            <button>{props.children}</button>
        </>
    );
}
