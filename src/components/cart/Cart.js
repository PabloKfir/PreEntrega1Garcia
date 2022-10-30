import './Cart.css';
import CartItem from '../cartItem/CartItem';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () =>{
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext);

    if(totalQuantity === 0) {
        return (
            <h1>Tu carrito no tiene productos</h1>
        )
    }

    return(
        <div>
            <h1>Carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h2>Total: ${total} ARS</h2>
            <button className='cart__empty' onClick={() => clearCart()}>Vaciar Carrito</button>
            <Link to='/checkout' className='cart__link'>Finalizar Compra</Link>
        </div>
    )
}

export default Cart