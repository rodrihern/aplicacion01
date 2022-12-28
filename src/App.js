import { useState } from "react";
import { ItemCount } from "./Components/ItemCount/ItemCount";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";



function App() {

  const [cartNum, setCartNum] = useState(0)


  return (
    <div>
      <NavBar cartNum={cartNum} />

      
      

      <ItemListContainer greeting="Hola mundo">
          {/* <ItemCount setCartNum={setCartNum} cartNum={cartNum}/> */}
      </ItemListContainer>
      

    </div>
  );
}

export default App;
