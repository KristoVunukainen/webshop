// import productsFromFile from '../../data/products.json'
import { useRef,useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import config from "../../data/config.json"



function MaintainProducts() {

  // const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState ([]);

  const [products, setProducts] = useState(dbProducts);

  const { t } = useTranslation();
  const searchedRef = useRef();

  useEffect (()=> {
    // fetch (config.categoryUrl)
    //   .then(res=> res.json())
    //   .then(data => setCategories(data || []));
  
      fetch (config.productsUrl)
      .then(res=> res.json())
      .then(data => {
         setProducts(data || []);
         setDbProducts(data || []);
         });
    }, []);

  const deleteProduct = (index) => {
    // const index = productsFromFile.findIndex(product => product.id === productId);
    dbProducts.splice(index, 1);
    setProducts(dbProducts.slice());
  }

  const searchFromProducts = () => {
    const result = dbProducts.filter(product => 
      product.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  } // HILJEM ID järgi otsimise


  return (
    <div>
      <div className='bold-heading'>{t('maintain-products')}</div><br />
      <input ref={searchedRef} onChange={searchFromProducts} type="text" />
      <div>Kokku: {products.length} tk</div>
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


export default MaintainProducts