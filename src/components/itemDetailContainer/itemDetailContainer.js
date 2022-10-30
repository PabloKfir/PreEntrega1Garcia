import './itemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase'


const ItemDetailContainer = ({setCart}) =>{
    const [product, setProduct]= useState({});
    const [loading, setLoading] = useState(true)
    
    const {productId} = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc =>{
            const data = doc.data()

            const productAdapted = { id: doc.id, ...data}

            setProduct(productAdapted)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[productId])
   
    if(loading) {
        return <h1>Cargando Producto...</h1>
    }
    return (
        <ItemDetail {...product} setCart={setCart} />
        )
}
    
export default ItemDetailContainer