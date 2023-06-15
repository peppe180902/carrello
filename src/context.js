import React,{useState, useContext, createContext} from "react";
import products from "./products";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // lista dei prodotti presa dal file
    const [data, setData] = useState(products)
    
    // funzione per eliminare il singolo prodotto 
    const removeProdotti = (_id) => {
      const prodNew = data.filter(el => el._id !== _id)
      const stock = data.find(el => el._id === _id)
      setData(prodNew)
      sottrazioneAlCart(_id)
      setSomma(somma - (4 * stock.price))
      console.log(stock.price)
    }
  // funzione per eliminare tutti i prodotti 
    const deleteAll =  () => {
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

  //  // quantita dei prodotti
  //  const [counter, setCounter] = useState(1)

  //  // aumenta la quantita del prodotto 
  //  const addCounter = () => {
  //      setCounter(counter + 1)
  //      sommaAlCart(data._id)
  //  }

  //  // diminuisce la quantita del prodotto
  //  const prevCounter = () => {
  //      if (counter > 1) {
  //          setCounter(counter - 1)
  //          sottrazioneAlCart(data._id)
  //      } else {
  //          removeProdotti(data._id)
  //          sottrazioneAlCart(data._id)
  //      }
  //  }
    
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