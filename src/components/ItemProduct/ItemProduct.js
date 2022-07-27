import { useState, useEffect } from 'react'
import './ItemProduct.scss'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ItemProduct = ({data, action}) => {
    const [contador, setContador] = useState(1)

    const {title, image, price, stock} = data

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }
    //1. Mount -> Crea
    // useEffect( () => {

    // }, [])

    //2. Update/Change/Actualizacion -> Cambio el valor State/prop
    // useEffect( () => {

    // })
    //3. Unmount/Desmontaje -> Destruye, desaparece
    // useEffect( () => {
        // return () => {
            //     console.log("se desmonta el componente")
            // }
    // })

    useEffect( () => {
        console.log("Actualizacion")
        // setContador(1)
    }, [contador])



    return(
        <div className="item-product">
            <div className='float-options'>
                <p>ENVIO GRATIS</p>
                <button><FavoriteBorderIcon /></button>
            </div>
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <div className='detail-product'>
                <p>{title}</p>
                <p><CreditCardIcon /> 6 Cuotas sin interes</p>
                <p><DeliveryDiningIcon />Envio fratis a partir de $6000</p>
                <span>$ {price}</span>
                {/* <div className='countProd'>
                    <button onClick={removeNumber}>-</button>
                    <p>{contador}</p>
                    <button onClick={addNumber}>+</button>
                </div> */}
            </div>
        </div> 
    )
}

export default ItemProduct