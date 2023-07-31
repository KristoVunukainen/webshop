import React, { useRef } from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


function MaintainProduct() {

  const [products, updateProducts] = useState(productsFromFile);

  const { t } = useTranslation();

  const searcheRef = useRef ();

  const deleteProduct = (index) => {
    productsFromFile.splice(index, 1);
    updateProducts(productsFromFile.slice());
  }

  const searchFromProducts = () => {
    const result = productsFromFile.filter(product => products.name.includes (searcheRef.current.value),
    products.name.toLowerCase().includes(searcheRef.current.value.toLowerCase()))
    updateProducts(result);
  }

  return (
    <div>
      <div className='bold-heading'>{t('maintain-products')}</div><br />

      <input ref= {searcheRef}onChange={searchFromProducts} type="text" />
      <div>Kokku: {products.length}</div>

      {products.map((product, index) =>
        <div key={product.id}>
          <img src={product.image} alt='' />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div>
          <Button onClick={() => deleteProduct(index)}>Kustuta</Button><br /><br />
          <Button as={Link} to={"/admin/edit-product/" + product.id}>Muuda</Button>
        </div>
      )}

    </div>
  )
}


export default MaintainProduct