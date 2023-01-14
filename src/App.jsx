import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./components/contexts/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ComponentesNav } from "./components/NavBarsito/NavBarsito";
import { CartContainer } from "./components/CartContainer/CartContainer";
import { NoIdError } from "./components/NoIdError/NoIdError";
function App() {
  const greetingsItem = "Welcome to our space";

  return (
    <CartContextProvider>
      <BrowserRouter>
        <ComponentesNav />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greetings={greetingsItem} />}
          />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer greetings={greetingsItem} />}
          />
          <Route
            path="/ItemDetail/:productoId"
            element={<ItemDetailContainer />}
          />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}

          <Route path="*" element={<NoIdError />} />

          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
