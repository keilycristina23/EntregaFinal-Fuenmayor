import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ComponentesNav } from './components/NavBar/navBar'

function App() {
   

  const greetingsItem='Welcome to our space'

   return (
     
      <BrowserRouter> 
      <ComponentesNav /> 
       <Routes>
         <Route path='/' element={<ItemListContainer greetings={greetingsItem} />} />
         <Route path='/categoria/tratamientosFaciales' element={<ItemListContainer greetings={greetingsItem} />} />
         <Route path='/categoria/tratamientosCorporales' element={<ItemListContainer greetings={greetingsItem} />} />
         <Route path='/ItemDetail/:productoId' element={<ItemDetailContainer/>} />

        {/*  <Route path='/detail' element={<ItemDetailContainer/>} />
         <Route path='/' element={<ItemListContainer greetings={greetingsItem} />} />
 */}
         <Route path='*' element={<Navigate to='/' />} />
       </Routes>   
      </BrowserRouter>
    )
 }

export default App
