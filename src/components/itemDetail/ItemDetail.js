import { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { NotificationContext} from '../../notification/Notification'

const ItemDetail = ({ id, name, img, category, description, price, stock }) =>{
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}!`)
    }

    return (
        <div className='itemdetail__container'>
            <h1> Detalle del producto</h1>
            <div className='itemdetail__product'>
                <h1>{name}</h1>
                <h2>{category}</h2>
                <img className='img__product' src= {img} alt='img' />
                <h3>$ {price} ARS</h3>
                <h3>{description}</h3>
                <>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <Link to='/cart'>Finalizar Compra</Link>
                    )
                
                }
                </>
            </div>
        </div>
    )
}

export default ItemDetail