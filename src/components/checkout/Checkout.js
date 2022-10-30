import './Checkout.css';
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase';

const Checkout = () =>{

    const [loading, setLoading] = useState(false);
    const [formName, setFormName] = useState('');
    const [email, setEmail] = useState('');
    const [verEmail, setVerEmail] = useState('');
    const [phone, setPhone] = useState('')

    const {cart, total, clearCart } = useContext(CartContext);

    const handleFormNameChange = (e) =>{
        setFormName(e.target.value)
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handleVerEmailChange = (e) =>{
        setVerEmail(e.target.value)
    }
    const handlePhoneChange = (e) =>{
        setPhone(e.target.value)
    }



    const createOrder = async () =>{
        
        setLoading(true);
        try{
            const finalOrder = {
                costumer:{ name: formName,
                phone: phone,
                email: email
            }
            ,
                items: cart,
                total
            }   
            setFormName('');
            setEmail('');
            setVerEmail('');
            setPhone('');
            const ids= cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');

            const firestoreProducts = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = firestoreProducts;

            const batch = writeBatch(db);
            const outOfStock = [];

            docs.forEach(doc =>{
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productInCart = cart.find(prod=> prod.id === doc.id);
                const prodQuantity = productInCart?.quantity;
                
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else{
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
            
            if (outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db,'orders');
                const orderAdded = await addDoc(orderRef, finalOrder);
                clearCart();
                return <p>La orden {orderAdded.id} se genero correctamente</p>
            } else {
               return <p>Ciertos productos no estan en stock</p>;
            }
        } catch (error){
            console.log(error);
        } finally{
            setLoading(false)
        }
    
    }
    if(loading){
        return <h1>Estamos generando tu orden!</h1>
    }

    return(
        
        <form className='checkout__form'>
            <h1>Llena estos datos para finalizar tu orden</h1>
            <label className='checkout__label'>Nombre</label>
            <input className='checkout__input' type='text' value={formName} onChange={handleFormNameChange}></input>
            <label className='checkout__label'>Correo</label>
            <input className='checkout__input' type='text' value={email} onChange={handleEmailChange}></input>
            <label className='checkout__label'>Verificar Correo</label>
            <input className='checkout__input' type='text' value={verEmail} onChange={handleVerEmailChange}></input>
            <label className='checkout__label'>Telefono</label>
            <input className='checkout__input' type='text' value={phone} onChange={handlePhoneChange}></input>
            {email === verEmail ? <button className='checkout__button' onClick={createOrder}>Confirmar Orden</button>:<p>El correo tiene que ser el mismo</p>}
            <Link to='/'>Volver al Inicio</Link>

        </form>
    )
}   

export default Checkout