import { ItemCount } from "./Components/ItemCount/ItemCount";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";



function App() {


  return (
    <div>
      <NavBar />
      

      <ItemListContainer greeting="Hola mundo">
        <ItemCount producto="Camiseta de boca" />
      </ItemListContainer>
      

    </div>
  );
}

export default App;
