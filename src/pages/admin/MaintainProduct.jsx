import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"
import { Button } from 'react-bootstrap';

function MaintainProduct() {
  const [products, setProducts] = useState (productsFromFile);
  return (
    <div>

      {productsFromFile.map(product => 
        <div>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div>

          <Button>Kustuta</Button>
          </div>)}
    </div>
  )
}
export default MaintainProduct