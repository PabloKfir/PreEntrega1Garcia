import './item.css';
import { Link } from 'react-router-dom';

const Item = ( { prod } ) =>{
    return(
    <div className='item__item'>
        <h1>{prod.name}</h1>
        <h2>${prod.price}ARS</h2>
        <img src={prod.img} alt={'img'} className='item__img'/>
        <Link to={`/detail/${prod.id}`} className='item__detalle'>Ver Detalle</Link>
    </div>
    )
}
export default Item