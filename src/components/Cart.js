import React from 'react';

export default function Basket(props) {
  //Define varieble from parameter
  const { cartItems, onAdd, onRemove } = props;
  //Define item calculate
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  //the function to reload the webpage when user click proceed and OK
  function reload()
{
    alert("Success Order. Click 'OK' to continue Shopping");
    window.location.reload();
}
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div className = "cart">Your cart is empty !</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-3">{item.name}</div>
              <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove"> - </button>&nbsp;
                <button onClick={() => onAdd(item)} className="add"> + </button>
              </div>
            <div className="col-2 text-right">{item.qty} x {item.price} บาท </div>
          </div>
        ))}

      {cartItems.length !== 0 && (
        <>
          <hr/>
            <div className="row">
              <div className="cart">
                <strong>ราคารวม</strong>
              </div>
              <div className="cart">
                <strong>{itemsPrice} บาท</strong>
              </div>
            </div>

          <hr />

            <div className="row">
              <button onClick={() => reload()}>
                Proceed
              </button>
            </div>
        </>
        )}
      </div>
    </aside>
  );
}
