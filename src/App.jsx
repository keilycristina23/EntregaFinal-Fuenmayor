import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './components/itemListContainer/itemlistContainer'
import { ComponentesNav } from './components/NavBar/navBar'

function App() {
   

  const greetingsItem='Welcome to our space'

   return (
     
      <BrowserRouter> 
      <ComponentesNav /> 
       <Routes>
         <Route path='/' element={<ItemListContainer greetings={greetingsItem} />} />
        {/*  <Route path='/detail' element={<ItemDetailContainer/>} />
         <Route path='/' element={<ItemListContainer greetings={greetingsItem} />} />
 */}
         <Route path='*' element={<Navigate to='/' />} />
       </Routes>   
      </BrowserRouter>
    )
 }

export default App
