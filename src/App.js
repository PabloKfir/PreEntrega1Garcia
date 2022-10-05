import NavBar from "./components/navbar/NavBar";
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='body'>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Nuestros productos'}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
