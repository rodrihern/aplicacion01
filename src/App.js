import { useState } from "react";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Error404 } from "./Components/Error404/Error404";



function App() {

  const [cartNum, setCartNum] = useState(0)


  return (

    <BrowserRouter>
    
      <NavBar cartNum={cartNum} />

      

     <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/aplicacion01" element={<ItemListContainer />}/>
        <Route path="/productos" element={<ItemListContainer />}/>
        <Route path="/productos/:categoryId" element={<ItemListContainer />}/>
        <Route path="/productos/search/:busqueda" element={<ItemListContainer />}/>
        <Route path="/detalle/:itemId" element={<ItemDetailContainer cartNum={cartNum} setCartNum={setCartNum}/>}/>
        <Route path="/cart" />
        <Route path="*" element={ <Error404 />}/>
        <Route path="/error404" element={ <Error404 />}/>

        
      </Routes>
      

    </BrowserRouter>

    
  );
}

export default App;
