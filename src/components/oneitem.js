import React from 'react';

export default function Product(props) {
  //Define the parameter in each product
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
          <div>ราคา: {product.price} บาท</div>
            <div>
              <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
    </div>
  );
}
