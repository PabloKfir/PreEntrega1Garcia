import cart from '../assets/cart.png'
import './CartWidget.css'

const CartWidget = () =>{
    return (
        <div>
            <img className='cart-widget__pic'src={cart} alt='cart' />
            0
        </div>
    );
}

export default CartWidget