import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./components/contexts/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ComponentesNav } from "./components/NavBar/navBar";
import { CartContainer } from "./components/CartContainer/CartContainer";
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
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
