import './App.css'
import {ButtonComponent} from "./assets/component/ButtonComponent.tsx";
import {Item} from "./assets/component/Item.tsx";
import {itemList} from "./items.ts";

function App() {

    const  itemArray = []

    for (const item of itemList) {
        itemArray.push(<Item title={item.title} description={item.description} />)
    }

  return (
      <>
          <ButtonComponent name = 'add'/>
          {itemArray}
      </>
  )
}

export default App
