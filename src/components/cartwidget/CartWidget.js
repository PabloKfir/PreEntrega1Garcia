import cart from '../assets/cart.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () =>{

    const { getTotalQuantity } = useContext(CartContext)
    const totalQuantity = getTotalQuantity()

    return (
        <Link to='/cart'>
            <img className='cart-widget__pic'src={cart} alt='cart' />
            {totalQuantity}
        </Link>
    );
}

export default CartWidget