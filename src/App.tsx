import './App.css'
import Dashboard from "./Dashboard.tsx";
import Login  from "./Login.tsx";

function App() {

    const isLoggedIn = true;

    let content;

    if (isLoggedIn) {
        content=<Dashboard/>
    }else {
        content=<Login/>
    }

  return (
      <>
          {content}
      </>
  )
}

export default App
