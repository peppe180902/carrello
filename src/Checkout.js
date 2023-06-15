import React, { useEffect } from 'react'
import { useGlobalContext } from './context'

function Checkout() {
    const {data, somma, calculatorTotal} = useGlobalContext();

   useEffect(() => {
    calculatorTotal();
   },[])

//                              

    return (
        <div className='flex justify-end'>
            <div className='m-11 bg-slate-500 p-5 rounded-2xl w-56'>
                <h2 className='text-white text-center font-mono'>Carrello</h2>
                <hr className='bg-white m-2'/>
                <h4 className='text-2xl text-white text-center font-mono'>{`€${(somma).toFixed(2)}`}</h4>
                <hr className='bg-white m-2'/>
                <button className='bg-cyan-500 rounded-full p-2 ml-12 mt-2 text-white font-mono'>checkout</button>
            </div>
        </div>
    )
}
// €{(mapSomma).toFixed(2)}
export default Checkout

