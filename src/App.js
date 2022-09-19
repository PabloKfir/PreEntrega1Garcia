import NavBar from "./components/navbar/NavBar";
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'

function App() {
  return (
    <div className='body'>
    <NavBar />
    <ItemListContainer greeting={'Nuestros productos'}/>
    </div>
  );
}

export default App;
