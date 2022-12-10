
import { ItemListContainer } from './components/itemListContainer/itemlistContainer'
import { ComponentesNav } from './components/NavBar/navBar'

function App() {
   

  const greetingsItem='Welcome to our space'

   return (
    <>
    <ComponentesNav /> 
    <ItemListContainer greetings={greetingsItem} />
      
    </>
  )
 }

export default App
