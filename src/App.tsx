import './App.css'
import {ButtonComponent} from "./assets/component/ButtonComponent.tsx";
import {Item} from "./assets/component/Item.tsx";

function App() {
    const itemList =[
        {
            title : "title1",
            description: "description1",
        },
        {
            title : "title2",
            description: "description2",
        },

        {
            title : "title3",
            description: "description3",
        }
    ]
  return (
      <>
          <ButtonComponent name = 'add'/>

          <Item title={itemList[0].title} description={itemList[0].description} />
          <Item title={itemList[1].title} description={itemList[1].description} />
          <Item title={itemList[2].title} description={itemList[2].description} />
      </>
  )
}

export default App
