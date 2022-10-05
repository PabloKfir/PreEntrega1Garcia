import './ItemListContainer.css'
import { useState,useEffect } from 'react'
import { getProducts } from '../../asyncMock';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts]= useState([])
    const { categoryId } = useParams();
    useEffect(()=> {
        getProducts(categoryId).then(products=>{
            setProducts(products)
        })
    },[categoryId])
    console.log(products);

    return (
         <div>
            <h1 className='greeting'>{greeting}</h1>
            <ItemList products={products}/>

        </div>
    )
};
export default ItemListContainer