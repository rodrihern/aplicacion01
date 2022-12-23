import { useState } from "react";
import { ItemCount } from "./Components/ItemCount/ItemCount";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";



function App() {

  const [cartNum, setCartNum] = useState("")


  return (
    <div>
      <NavBar onCartNum={setCartNum}/>
      

      <ItemListContainer greeting="Hola mundo">
        <ItemCount />
      </ItemListContainer>
      

    </div>
  );
}

export default App;
