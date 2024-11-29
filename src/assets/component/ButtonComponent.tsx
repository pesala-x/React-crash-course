import {ReactNode} from "react";

export function ButtonComponent(props:{children:ReactNode}) {

    const handleClick = () => {
        alert("Chuttak කැව..");
    }

    return (
        <>
            <button onClick={handleClick}>{props.children}</button>
        </>
    );
}
