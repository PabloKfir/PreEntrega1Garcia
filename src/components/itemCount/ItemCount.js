import './ItemCount.css'
import { useState } from 'react'
const ItemCount = ({stock = 5, initial =1, onAdd}) =>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () =>{
        if(quantity<stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if(quantity> 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='counter'>
            <div className='controls'>
                <button className='button__count' onClick={decrement}>-</button>
                <h4 className='number'>{quantity}</h4>
                <button className='button__count' onClick={increment}>+</button>
            </div>
            <div>
                <button className='button__add' onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount