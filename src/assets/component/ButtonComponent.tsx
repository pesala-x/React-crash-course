import {ReactNode} from "react";

export default function ButtonComponent(props:{children: ReactNode, onSelect :any}) {
    return (
        <>
            <button onClick={() =>(props.onSelect(props.children))}>{props.children}</button>
        </>
    )
}