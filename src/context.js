import React, { useState, useContext, createContext } from "react";
import products from "./products";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // lista dei prodotti presa dal file
  const [data, setData] = useState(() => products.map(product => { return{...product, qty: 1}}))

// funzione per eliminare il singolo prodotto 
const removeProdotti = (_id) => {
  const prodNew = data.filter(el => el._id !== _id)
  const stock = data.find(el => el._id === _id)
  setData(prodNew)
  sottrazioneAlCart(_id)
  // setSomma(somma - (stock.qty * stock.price))
  // console.log(stock.price)
}
// funzione per eliminare tutti i prodotti 
const deleteAll = () => {
  const newProd = data.filter(el => el.name === 'jsbvjubfwobcvwo')
  setData(newProd)
}

// Somma del carrello
const [somma, setSomma] = useState(0)

// ad ogni aumento di qty del prodotto aumenta il prezzo totale
const sommaAlCart = (_id) => {
  const prezzo = data.find(el => el._id === _id);
  setSomma(somma + prezzo.price)
}

// ad ogni decremento di qty del prodotto aumenta il prezzo totale
const sottrazioneAlCart = (_id) => {
  const prezzo = data.find(el => el._id === _id);
  setSomma(somma - prezzo.price)
}

// somma di tutti i prezzi dei prodotti presenti nel carrello
const calculatorTotal = () => {
  const totalPrice = data.reduce((acc, prodotto) => acc + prodotto.price, 0);
  setSomma(totalPrice)
}

const totalPrice = data.reduce((acc, prodotto) => acc + prodotto.price * prodotto.qty, 0);
console.log({totalPrice})

return (
  <AppContext.Provider value={{
    data,
    setData,
    removeProdotti,
    deleteAll,
    somma,
    calculatorTotal,
    sommaAlCart,
    sottrazioneAlCart,
    totalPrice
    // counter,
    // addCounter,
    // prevCounter
  }}
  >{children}</AppContext.Provider>
)
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { useGlobalContext, AppProvider }