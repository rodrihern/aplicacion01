import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";



function App() {


  return (
    <div>
      <NavBar />

      <ItemListContainer greeting="Hola mundo" />

      <p>Hola</p>
      

    </div>
  );
}

export default App;
