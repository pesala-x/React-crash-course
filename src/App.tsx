import './App.css';
import ButtonComponent from "./assets/component/ButtonComponent";
import { useState } from "react";

function App() {
    // State to manage content
    const [content, setContent] = useState("default");

    // Subjects array
    const subjects = [
        {
            sName: "RAD",
            sDes: "Lorem Ipsum RAD"
        },
        {
            sName: "MAD",
            sDes: "Lorem Ipsum MAD"
        },
        {
            sName: "OOP",
            sDes: "Lorem Ipsum OOP"
        },
        {
            sName: "AAD",
            sDes: "Lorem Ipsum AAD"
        }
    ];

    // Click handler
    const handleClick = (name: string) => {
        const subject = subjects.find((subject) => subject.sName === name);

        if (subject) {
            setContent(subject.sDes); // Update content with description
            alert(subject.sDes); // Show description in alert
        }
    };

    return (
        <div>
            {subjects.map((subject) => (
                <ButtonComponent
                    key={subject.sName}
                    onSelect={() => handleClick(subject.sName)}
                >
                    {subject.sName}
                </ButtonComponent>
            ))}
            <div>
                <h2>Selected Content:</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default App;
