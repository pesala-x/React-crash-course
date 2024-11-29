export function Subject({name, children}: {name: string; children: string}) {
    return (
        <>
            <h1>{name}</h1>
            <p>{children}</p>
        </>
    );
}