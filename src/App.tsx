import './App.css';
import { useState } from "react";

function App() {
    const [names, setNames] = useState({
        firstName: '',
        lastName: ''
    });

    const [output, setOutput] = useState({
        firstName: '',
        lastName: ''
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setNames((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleDisplayOutput() {
        setOutput(names);
    }

    return (
        <>
            <div>
                <input type="text" name="firstName" placeholder="First Name" value={names.firstName} onChange={handleInputChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={names.lastName} onChange={handleInputChange} />

                <button onClick={handleDisplayOutput}>Display Output</button>

                <br />

                <p>{output.firstName + " " + output.lastName}</p>
            </div>
        </>
    );
}

export default App;
