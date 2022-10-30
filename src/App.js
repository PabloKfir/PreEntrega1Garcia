import NavBar from "./components/navbar/NavBar";
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider} from './context/CartContext';
import { NotificationProvider} from './notification/Notification';


function App() {
  return (
    <div className='body'>
    <NotificationProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Nuestros productos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 not Found</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </NotificationProvider>  
    </div>
  );
}

export default App;
