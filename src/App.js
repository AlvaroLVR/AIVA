import {NavBar} from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>   
      <ItemListContainer greeting="Bienvenidos a AIVA Shop"/>
    </div>
       
  );
}

export default App;