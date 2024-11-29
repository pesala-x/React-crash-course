import './App.css'
import {ButtonComponent} from "./assets/component/ButtonComponent.tsx";


function App() {

    const handleClick = (name : string) => {
        alert("Button " + name + " is clicked!");
    }
  return (
      <>
          <ButtonComponent onSelect={handleClick}>Button A</ButtonComponent>
          <ButtonComponent onSelect={handleClick}>Button B</ButtonComponent>
      </>
  )
}

export default App
