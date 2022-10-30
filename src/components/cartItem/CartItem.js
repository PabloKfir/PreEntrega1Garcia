import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({id, name, quantity, price}) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove= (id) =>{
        removeItem(id)
    }

    return(
        
        <div className='cart__container'>
            
            <div className='cart__items'>{name}</div>
            <div className='cart__items'>{quantity}</div>
            <div className='cart__items'>$ {price} ARS</div>
            <div className='cart__items'>Subtotal: ${price * quantity}</div>
            <button className='cart__button' onClick={()=> handleRemove(id)}>X</button>
        </div>
        
        
    )
}

export default CartItem