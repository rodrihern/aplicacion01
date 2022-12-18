import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";



function App() {


  return (
    <div>
      <NavBar />

      <ItemListContainer greeting="Hola mundo" />
      

    </div>
  );
}

export default App;
