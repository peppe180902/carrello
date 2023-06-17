import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useGlobalContext } from './context'


const Prodotto = ({ _id, name, image, price, qty }) => {
    const { data, removeProdotti, sommaAlCart, sottrazioneAlCart, setData } = useGlobalContext()
    // const [counter, setCounter] = useState(1)

    const addCounter = () => {
        const stock = data.find(el => el._id === _id);
            if(stock.qty < stock.countInStock){
                const newCart = data.map(product => {
                    if (product._id === stock._id) {
                        return {
                            ...product,
                            qty: product.qty + 1 
                        }
                    }
                    return product
                })
                setData(newCart)
                // setCounter(counter + 1)
                sommaAlCart(_id)
              }
    }

    const prevCounter = () => {
        const stock = data.find(el => el._id === _id);
        if (stock.qty > 1) {
            const newCart = data.map(product => {
                if (product._id === stock._id) {
                    return {
                        ...product,
                        qty: product.qty - 1 
                    }
                }
                return product
            })
            setData(newCart)
            // setCounter(counter - 1)
            sottrazioneAlCart(_id)
        } else {
            removeProdotti(_id)
            sottrazioneAlCart(_id)
        }
    }

    // const checkData = () => {
    //     console.log(data)
    // }

    return (
        <div className='cart-section'>
            <div className='cart-item' key={_id}>
                <img src={image} alt={name} className='img' />
                <h5 className='prd-name'>{name}</h5>
                <div className='flex justify-center qty-selector'>
                    <button><FontAwesomeIcon icon={faPlus} style={{ color: 'red' }} onClick={addCounter} /></button>
                    {/* <h3 className='text-2xl'>{counter}</h3> */}
                    <h3 className='text-2xl'>{qty}</h3>
                    <button><FontAwesomeIcon icon={faMinus} style={{ color: 'red' }} onClick={prevCounter} /></button>
                </div>
                <p>{price}</p>
                <button onClick={() => removeProdotti(_id)}>
                    <FontAwesomeIcon icon={faTrash} style={{ color: "#dc0404", }} />
                </button>
            </div>
            {/* <button className='bg-red-400 rounded-full p-2 font-mono' onClick={checkData}>check</button> */}
        </div>
    )
}

export default Prodotto
