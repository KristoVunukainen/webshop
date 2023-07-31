import React from 'react'
import productsFromFile from '../../data/products.json'
// import cartFile from '../../data/cart.json'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Slide, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

function HomePages() {

  const [products, updateProducts] = useState(productsFromFile);

  const { t} = useTranslation();

  const sortAZ = () => {
    const result = products.sort((a, b) => a.name.localeCompare(b.name));
    updateProducts(result.slice());
  }

  const sortZA = () => {
    const result = products.sort((a, b) => b.name.localeCompare(a.name));
    updateProducts(result.slice());
  }

  const sortPriceAscending = () => {
    products.sort((a, b) => a.price - b.price);
    updateProducts(products.slice());
  }

  const sortPriceDecending = () => {
    products.sort((a, b) => b.price - a.price);
    updateProducts(products.slice());
  }

  const addToCart = (product) => {
    // cartFile.push(product);
    const cart = JSON.parse(localStorage.getItem("cart")|| "[]" );
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    // toast.success(product.name + ' lisatud!');
  }

  const filterByCategory =(categoryClicked) => {
    const result = productsFromFile.filter(product => product.category === categoryClicked);
    updateProducts (result);
  }

  return (
    <div>
      <div className='bold-heading'>{t('products')}</div><br />
      <Button onClick={() => sortAZ()}>{t('sort-az')}</Button>
      <Button onClick={() => sortZA()}>{t('sort-za')}</Button><div>  </div>
      <Button onClick={() => sortPriceAscending()}>{t('sort-price-increasing')}</Button>
      <Button onClick={() => sortPriceDecending()}>{t('sort-price-decreasing')}</Button>
      <br /><br />
      <button onClick={()=> filterByCategory("memory bank")}>memory bank</button>
      <button>robot vacuum</button>
      <button>ebay</button>
      <button>led</button>
      <button>solar</button>

      {products.map((product, index) =>
        <div key={index}>
          <img src={product.image} alt='' />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <Button onClick={() => addToCart(product)}>{t('add-to-cart')}</Button>
          <Link to={'/product/' + product.id}>
            <Button>{t('product-details')}</Button>
          </Link>
          <br /><br />
        </div>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  )
}

export default HomePages