export function Item(props: {title: string, description: string}) {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </>
    );


}