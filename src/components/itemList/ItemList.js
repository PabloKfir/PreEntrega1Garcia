import './itemList.css'
import Item from "../item/Item";
const ItemList = ( {products} ) =>{
    return(
        <div className="itemlist">
        { products.map(prod => (
            <Item key={prod.id} prod={prod}/>
        ))}
    </div>
    );
}
export default ItemList