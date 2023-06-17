import './App.css';
import './index.css';
import Navbar from './Navbar';
import Prodotto from './Prodotto';
import Checkout from './Checkout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons"
import { useGlobalContext } from './context';

function App() {
  const {data, deleteAll} = useGlobalContext()
    
  // const removeProdotti = (_id) => {
  //   const prodNew = data.filter(el => el._id !== _id)
  //   setData(prodNew)
  // }

  // const deleteAll =  () => {
  //   const newProd = data.filter(el => el.name === 'jsbvjubfwobcvwo')
  //   setData(newProd)
  // }

  return (
    <div>
      <Navbar />
      <div className='flex justify-evenly mt-4 font-mono'>
        <h3>item</h3>
        <h3>Name</h3>
        <h3>qty</h3>
        <h3>price</h3>
        <button><FontAwesomeIcon icon={faCartFlatbed} style={{color: "#ff0000",}} onClick={deleteAll}/></button>
      </div>
      <hr className='mt-4'/>
      {data.map(el => <Prodotto key={el._id} {...el}/>)}
      {data.length === 0 && <h2 className='flex justify-center mt-20 font-mono'>Nessun prodotto nel carrello</h2>}
      {data.length > 0 && <Checkout />}
    </div>
  );
}

export default App;