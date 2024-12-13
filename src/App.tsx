import './App.css';
import {useState} from "react";

function App() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')

    function handleCheckFirstname(event : React.ChangeEvent<HTMLInputElement>) {
        setFirstname(event.target.value); // Update firstname based on input
    }

    function handleCheckLastname(event: React.ChangeEvent<HTMLInputElement>) {
        setLastname(event.target.value); // Update lastname based on input
    }

    return (
        <>
            <div>
                <input type="text" name='First Name' onChange={handleCheckFirstname}/>
                <input type="text" name='Last Name' onChange={handleCheckLastname}/>

                <br/>

                {firstname +" "+ lastname}
            </div>
        </>
    );
}

export default App;
