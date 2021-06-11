import Header from './components/Navbar';
import Block from './components/Block-item';


import Cart from './components/Cart';
import data_nvi from './Data/data_nvi';
import data_rad from './Data/data_rad';
import { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';



function App() {
  //Define the data from file
  const { products_nvi } = data_nvi;
  const { products_rad } = data_rad;
  //Define the state use in ADD or Remove Item
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    //Define first time checker for add item to cart
    const exist = cartItems.find((item) => item.id === product.id);
    //If found Id in cart add more quatity
    if (exist) {
      setCartItems(cartItems.map((item) =>  item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item));
    } else {
    //If not found add that items
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    //Check if quantity = 1 delete that item from cart
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
    //if not reduce quantity
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      <Router>
          <Header countCartItems={cartItems.length}></Header>
      </Router>
      <div className="row">
        <Block products={products_nvi} onAdd={onAdd} typeblock = 'nvi'></Block>
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
        
      </div>
      <div className="row">
        <Block products={products_rad} onAdd={onAdd} typeblock = 'rad'></Block>
        
        
      </div>
    </div>
  );
}

export default App;
