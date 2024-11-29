import { ReactNode } from "react";

export function ButtonComponent(props: { children: ReactNode, onSelect: (name: string) => void }) {
    return (
        <>
            <button onClick={() => props.onSelect(String(props.children))}>
                {props.children}
            </button>
        </>
    );
}
