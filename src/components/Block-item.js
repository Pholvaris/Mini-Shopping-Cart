import React from 'react';
import Item from './oneitem';

export default function Nvidia(props) {
  //Define state of parameter from app.js
  const { products, onAdd, typeblock } = props;
  return (

    <main className="block col-2">
      {typeblock === 'nvi' ? <h2>Nvidia</h2> : <h2>Radeon</h2>}

      <div className="row">
        {products && products.map((product) => (
          <Item key={product.id} product={product} onAdd={onAdd}></Item>
        ))}

      </div>

    </main>
  );
}
