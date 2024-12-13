import './App.css';
import { useState } from "react";

function App() {
    const [names, setNames] = useState({
        firstName: '',
        lastName: ''
    });

    function handleCheckName(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setNames((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <>
            <div>
                <input type="text" name="firstName" placeholder="First Name" value={names.firstName} onChange={handleCheckName} />
                <input type="text" name="lastName" placeholder="Last Name" value={names.lastName} onChange={handleCheckName}/>

                <br />

                <p>{names.firstName + " " + names.lastName}</p>
            </div>
        </>
    );
}

export default App;
