interface ButtonComponentProps {
    updateCount: (value: number) => void; // Callback to send data to parent
    action: "increment" | "decrement"; // Decide if it adds or subtracts
}

export default function ButtonComponent({ updateCount, action }: ButtonComponentProps) {
    const handleClick = () => {
        if (action === "increment") {
            updateCount(1); // Notify parent to increment
        } else {
            updateCount(-1); // Notify parent to decrement
        }
    };

    return (
        <button onClick={handleClick}>
            {action === "increment" ? "Increment" : "Decrement"}
        </button>
    );
}
